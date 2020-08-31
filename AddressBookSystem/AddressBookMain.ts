import { Address } from './AddressBook';
import { exit } from 'process';
var readlineSync = require('readline-sync');
console.log('Welcome To Address Book Problem');

var personRecord = new Address()
let option: string;

class AddressBookMain {
    addressBook = () => {
        while (true) {
            try {
                console.log("\n================== ADDRESS BOOK =======================\n")
                option = readlineSync.question("1) Add Person\n" +
                    "2) Edit Person\n" +
                    "3) Delete Person\n" +
                    "4) Sort By Field\n" +
                    "5) Display Person\n" +
                    "6) Exit\n" +
                    "Enter Option : ");
                switch (option) {
                    case "1":
                        personRecord.addRecord();
                        break;
                    case "2":
                        personRecord.editPerson();
                        break;
                    case "3":
                        personRecord.deletePerson();
                        break;
                    case "4":
                        personRecord.sortByField();
                        break;
                    case "5":
                        personRecord.display();
                        break;
                    case "6":
                        exit();
                    default:
                        readlineSync.question("Wrong Input");
                }
            } catch (err) {
                console.log(err.message);
            }
        }
    }
}

new AddressBookMain().addressBook()