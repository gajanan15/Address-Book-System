import { Person } from "./Model";
const fs = require("fs");
const jsonFile = "Person.json"

export class FileWriter {

    readJsonFile = (): Array<Person> => {
        let jsonString = fs.readFileSync(jsonFile)
        let person = JSON.parse(jsonString)
        return person;
    }

    writeJsonFile = (jsonString: string): void  => {
        fs.writeFileSync(jsonFile, jsonString)
    }
}