"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    setFirstName(firstName) {
        this._firstName = firstName;
    }
    get firstName() {
        return this._firstName;
    }
    setLastName(lastName) {
        this._lastName = lastName;
    }
    get lastName() {
        return this._lastName;
    }
    setAddress(address) {
        this._address = address;
    }
    get address() {
        return this._address;
    }
    setCity(city) {
        this._city = city;
    }
    get city() {
        return this._city;
    }
    setZip(zip) {
        this._zip = zip;
    }
    get zip() {
        return this._zip;
    }
    setState(state) {
        this._state = state;
    }
    get state() {
        return this._state;
    }
    setPhoneNumber(phoneNumber) {
        this._phoneNumber = phoneNumber;
    }
    get phoneNumber() {
        return this._phoneNumber;
    }
}
exports.Person = Person;
//# sourceMappingURL=Model.js.map