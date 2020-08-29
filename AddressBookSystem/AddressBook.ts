import { Person } from './Model';
import { FileWriter } from './JsonFileOperation';
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

    //Display Person
    display = () => {
        var file = jsonFile.readJsonFile();
        console.log("Display All Records");
        file.map((data, index) => {
            console.log(index + 1, data);
        })
    }
}