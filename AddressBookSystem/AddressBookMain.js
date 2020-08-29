"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AddressBook_1 = require("./AddressBook");
const process_1 = require("process");
var readlineSync = require('readline-sync');
console.log('Welcome To Address Book Problem');
var personRecord = new AddressBook_1.Address();
let option;
class AddressBookMain {
    constructor() {
        this.addressBook = () => {
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
                        process_1.exit();
                    default:
                        readlineSync.question("Wrong Input");
                }
            }
        };
    }
}
new AddressBookMain().addressBook();
//# sourceMappingURL=AddressBookMain.js.map