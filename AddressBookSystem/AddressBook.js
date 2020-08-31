"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const Model_1 = require("./Model");
const JsonFileOperation_1 = require("./JsonFileOperation");
const process_1 = require("process");
const AddressBookException_1 = require("./AddressBookException");
var readlineSync = require('readline-sync');
let jsonFile = new JsonFileOperation_1.FileWriter();
let personDetail = new Model_1.Person();
let jsonString;
var regExName = new RegExp("^[A-Z]{1}[a-z]{2,}$");
var regExAddress = new RegExp("^\\w{1,150}");
var regExCity = new RegExp("^[a-zA-Z]+");
var regExState = new RegExp("^[a-zA-Z]+");
var regExNumber = new RegExp("^([6-9]{1}[0-9]{9})$");
var regExZip = new RegExp("^[1-9]{1}[0-9]{2}[-]{0,1}[0-9]{3}$");
class Address {
    constructor() {
        //Adding Records
        this.addRecord = () => {
            var file = jsonFile.readJsonFile();
            let person = this.userInput();
            let isNewPerson = true;
            for (let i = 0; i < file.length; i++) {
                if (person.phoneNumber == file[i]._phoneNumber) {
                    isNewPerson = false;
                }
            }
            if (isNewPerson) {
                this.checkValidation(person);
            }
            else {
                throw new AddressBookException_1.BookException("Mobile Number Already Present.......");
            }
        };
        this.checkValidation = (person) => {
            var file = jsonFile.readJsonFile();
            if (!regExName.test(person._firstName)) {
                throw new AddressBookException_1.BookException("Please Enter Valid First Name");
            }
            else if (!regExName.test(person._lastName)) {
                throw new AddressBookException_1.BookException("Please Enter Valid Last Name");
            }
            else if (!regExAddress.test(person._address)) {
                throw new AddressBookException_1.BookException("Please Enter Valid Address");
            }
            else if (!regExCity.test(person._city)) {
                throw new AddressBookException_1.BookException("Please Enter Valid City");
            }
            else if (!regExState.test(person._state)) {
                throw new AddressBookException_1.BookException("Please Enter Valid State");
            }
            else if (!regExZip.test(person._zip)) {
                throw new AddressBookException_1.BookException("Please Enter Valid Zip Code");
            }
            else if (!regExNumber.test(person._phoneNumber)) {
                throw new AddressBookException_1.BookException("Please Enter Valid Phone Number");
            }
            else {
                file.push(person);
                jsonString = JSON.stringify(file);
                jsonFile.writeJsonFile(jsonString);
                console.log("Person Added Successfully.....");
            }
        };
        //Add Person
        this.userInput = () => {
            var firstName = readlineSync.question('Enter First Name: ');
            personDetail.setFirstName(firstName);
            var lastName = readlineSync.question("Enter Last Name : ");
            personDetail.setLastName(lastName);
            var address = readlineSync.question("Enter address Name : ");
            personDetail.setAddress(address);
            var city = readlineSync.question("Enter city Name : ");
            personDetail.setCity(city);
            var state = readlineSync.question("Enter state Name : ");
            personDetail.setState(state);
            var zip = readlineSync.question("Enter zip Name : ");
            personDetail.setZip(zip);
            var phoneNumber = readlineSync.question("Enter phoneNumber Name : ");
            personDetail.setPhoneNumber(phoneNumber);
            return personDetail;
        };
        //Edit Person
        this.editPerson = () => {
            var file = jsonFile.readJsonFile();
            var num = readlineSync.question('Enter Phone Number To Edit: ');
            for (var i = 0; i < file.length; i++) {
                if (file[i]._phoneNumber == num) {
                    console.log(file[i]);
                    console.log("Edit Details");
                    console.log("1) Address\n2)City\n3)State\n4)Zip\n5)phoneNumber\n6)Exit");
                    let option = readlineSync.question('Enter your Choice: ');
                    let person = file[i];
                    personDetail.setFirstName(person._firstName);
                    personDetail.setLastName(person._lastName);
                    personDetail.setAddress(person._address);
                    personDetail.setCity(person._city);
                    personDetail.setState(person._state);
                    personDetail.setZip(person._zip);
                    personDetail.setPhoneNumber(person._phoneNumber);
                    switch (option) {
                        case "1":
                            var address = readlineSync.question("Enter New Address: ");
                            personDetail.setAddress(address);
                            break;
                        case "2":
                            var city = readlineSync.question("Enter New City : ");
                            personDetail.setCity(city);
                            break;
                        case "3":
                            var state = readlineSync.question("Enter New State : ");
                            personDetail.setState(state);
                            break;
                        case "4":
                            var zip = readlineSync.question("Enter New Zip : ");
                            personDetail.setZip(zip);
                            break;
                        case "5":
                            var number = readlineSync.question("Enter New Phone Number : ");
                            personDetail.setPhoneNumber(number);
                            break;
                        case "6":
                            process_1.exit();
                        default:
                            readlineSync.question("Wrong Input");
                    }
                    console.log("Edit Successfully.......");
                    file[i] = personDetail;
                    jsonString = JSON.stringify(file);
                    jsonFile.writeJsonFile(jsonString);
                }
            }
        };
        //Delete Person
        this.deletePerson = () => {
            var file = jsonFile.readJsonFile();
            console.log("length:  " + file.length);
            this.display();
            var id = readlineSync.question('Enter ID To Delete Person: ');
            file.splice((id - 1), 1);
            console.log("Delete Person Successfully......");
            jsonString = JSON.stringify(file);
            jsonFile.writeJsonFile(jsonString);
        };
        //Sort Data By Field
        this.sortByField = () => {
            var file = jsonFile.readJsonFile();
            console.log("Edit Details");
            console.log("1)Address\n2)City\n3)State\n4)Zip\n5)phoneNumber");
            let option = readlineSync.question('Enter your Choice: ');
            switch (option) {
                case "1":
                    file.sort((a, b) => a._address.localeCompare(b._address));
                    break;
                case "2":
                    file.sort((a, b) => a._city.localeCompare(b._city));
                    break;
                case "3":
                    file.sort((a, b) => a._state.localeCompare(b._state));
                    break;
                case "4":
                    file.sort((a, b) => a._zip.localeCompare(b._zip));
                    break;
                case "5":
                    file.sort((a, b) => a._phoneNumber.localeCompare(b._phoneNumber));
                    break;
                default:
                    console.log("Wrong Input");
            }
            jsonString = JSON.stringify(file);
            jsonFile.writeJsonFile(jsonString);
            console.log(file);
        };
        //Display Person
        this.display = () => {
            var file = jsonFile.readJsonFile();
            console.log("================== Display All Records =================");
            file.map((data, index) => {
                console.log(index + 1, data);
            });
        };
    }
}
exports.Address = Address;
//# sourceMappingURL=AddressBook.js.map