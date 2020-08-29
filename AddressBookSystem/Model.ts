export class Person {

    public _firstName: string;
    public _lastName: string;
    public _address: string;
    public _city: string;
    public _state: string;
    public _zip;
    public _phoneNumber;

    setFirstName(firstName: string) {
        this._firstName = firstName;
    }

    get firstName(): string {
        return this._firstName;
    }

    setLastName(lastName: string) {
        this._lastName = lastName;
    }

    get lastName(): string {
        return this._lastName;
    }

    setAddress(address: string) {
        this._address = address;
    }

    get address(): string {
        return this._address;
    }

    setCity(city: string) {
        this._city = city;
    }

    get city(): string {
        return this._city;
    }

    setZip(zip) {
        this._zip = zip;
    }

    get zip() {
        return this._zip;
    }

    setState(state: string) {
        this._state = state;
    }

    get state(): string {
        return this._state;
    }

    setPhoneNumber(phoneNumber) {
        this._phoneNumber = phoneNumber;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }

}