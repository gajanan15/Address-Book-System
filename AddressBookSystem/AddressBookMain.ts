import { Address } from './AddressBook';
import { exit } from 'process';
var readlineSync = require('readline-sync');
console.log('Welcome To Address Book Problem');

var personRecord = new Address()
let option: string;

class AddressBookMain {
    addressBook = () => {
        while (true) {
            option = readlineSync.question("1) Add Person\n" +
                                           "2) Display Person\n" +
                                           "3) Exit\n" +
                                           "Enter Option : ");
            switch (option) {
                case "1":
                    personRecord.addRecord();
                    break;
                case "2":
                    personRecord.display();
                    break;
                case "3":
                    exit();
                default:
                    readlineSync.question("Wrong Input");
            }
        }
    }
}

new AddressBookMain().addressBook()