"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Address = void 0;
const Model_1 = require("./Model");
const JsonFileOperation_1 = require("./JsonFileOperation");
var readlineSync = require('readline-sync');
let jsonFile = new JsonFileOperation_1.FileWriter();
let personDetail = new Model_1.Person();
let jsonString;
class Address {
    constructor() {
        //Adding Records
        this.addRecord = () => {
            this.userInput();
            var file = jsonFile.readJsonFile();
            file.push(personDetail);
            jsonString = JSON.stringify(file);
            jsonFile.writeJsonFile(jsonString);
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
        };
        //Display Person
        this.display = () => {
            var file = jsonFile.readJsonFile();
            console.log("Display All Records");
            file.map((data, index) => {
                console.log(index + 1, data);
            });
        };
    }
}
exports.Address = Address;
//# sourceMappingURL=AddressBook.js.map