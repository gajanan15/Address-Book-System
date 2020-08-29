"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileWriter = void 0;
const fs = require("fs");
const jsonFile = "Person.json";
class FileWriter {
    constructor() {
        this.readJsonFile = () => {
            let jsonString = fs.readFileSync(jsonFile);
            let person = JSON.parse(jsonString);
            return person;
        };
        this.writeJsonFile = (jsonString) => {
            fs.writeFileSync(jsonFile, jsonString);
        };
    }
}
exports.FileWriter = FileWriter;
//# sourceMappingURL=JsonFileOperation.js.map