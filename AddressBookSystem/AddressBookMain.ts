import { Address } from './AddressBook';
var readlineSync = require('readline-sync');
console.log('Welcome To Address Book Problem');

var personRecord = new Address()
let option: string;

class AddressBookMain {
    addressBook = () => {
        while (true) {
            option = readlineSync.question("1) Add Person\nEnter Option : ");
            switch (option) {
                case "1":
                    personRecord.addRecord();
                    break;
                default:
                    readlineSync.question("Wrong Input");
            }
        }
    }
}

new AddressBookMain().addressBook()