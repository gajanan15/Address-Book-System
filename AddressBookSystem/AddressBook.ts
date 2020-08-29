import { Person } from './Model';
import { FileWriter } from './JsonFileOperation';
import { exit } from 'process';
var readlineSync = require('readline-sync');

let jsonFile = new FileWriter();
let personDetail = new Person();
let jsonString: string;

export class Address {

    //Adding Records
    addRecord = () => {
        this.userInput();
        var file = jsonFile.readJsonFile();
        file.push(personDetail);
        jsonString = JSON.stringify(file);
        jsonFile.writeJsonFile(jsonString);
    }

    //Add Person
    userInput = () => {
        var firstName: string = readlineSync.question('Enter First Name: ');
        personDetail.setFirstName(firstName)
        var lastName: string = readlineSync.question("Enter Last Name : ");
        personDetail.setLastName(lastName)
        var address: string = readlineSync.question("Enter address Name : ");
        personDetail.setAddress(address)
        var city: string = readlineSync.question("Enter city Name : ");
        personDetail.setCity(city);
        var state: string = readlineSync.question("Enter state Name : ")
        personDetail.setState(state)
        var zip: number = readlineSync.question("Enter zip Name : ");
        personDetail.setZip(zip)
        var phoneNumber: number = readlineSync.question("Enter phoneNumber Name : ")
        personDetail.setPhoneNumber(phoneNumber)
    }

    //Edit Person
    editPerson = () => {
        var file = jsonFile.readJsonFile();
        var num: number = readlineSync.question('Enter Phone Number To Edit: ');
        for (var i = 0; i < file.length; i++) {
            if (file[i]._phoneNumber == num) {
                console.log(file[i]);
                console.log("Edit Details");
                console.log("1) Address\n2)City\n3)State\n4)Zip\n5)phoneNumber\n6)Exit");
                let option: string = readlineSync.question('Enter your Choice: ');
                let person: Person = file[i];
                personDetail.setFirstName(person._firstName)
                personDetail.setLastName(person._lastName)
                personDetail.setAddress(person._address)
                personDetail.setCity(person._city)
                personDetail.setState(person._state)
                personDetail.setZip(person._zip)
                personDetail.setPhoneNumber(person._phoneNumber)

                switch (option) {
                    case "1":
                        var address = readlineSync.question("Enter New Address: ");
                        personDetail.setAddress(address)
                        break;
                    case "2":
                        var city = readlineSync.question("Enter New City : ");
                        personDetail.setCity(city)
                        break;
                    case "3":
                        var state = readlineSync.question("Enter New State : ");
                        personDetail.setState(state)
                        break;
                    case "4":
                        var zip = readlineSync.question("Enter New Zip : ");
                        personDetail.setZip(zip)
                        break;
                    case "5":
                        var number = readlineSync.question("Enter New Phone Number : ");
                        personDetail.setPhoneNumber(number)
                        break;
                    case "6":
                        exit();
                    default:
                        readlineSync.question("Wrong Input");
                }
                console.log("Edit Succesfully");
                file[i] = personDetail
                jsonString = JSON.stringify(file);
                jsonFile.writeJsonFile(jsonString);
            }
        }
    }

    //Display Person
    display = () => {
        var file = jsonFile.readJsonFile();
        console.log("Display All Records");
        file.map((data, index) => {
            console.log(index + 1, data);
        })
    }
}