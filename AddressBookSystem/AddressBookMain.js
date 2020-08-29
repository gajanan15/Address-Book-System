"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AddressBook_1 = require("./AddressBook");
var readlineSync = require('readline-sync');
console.log('Welcome To Address Book Problem');
var personRecord = new AddressBook_1.Address();
let option;
class AddressBookMain {
    constructor() {
        this.addressBook = () => {
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
        };
    }
}
new AddressBookMain().addressBook();
//# sourceMappingURL=AddressBookMain.js.map