export class BookException extends Error{

    constructor(m: string) {
        super(m)
        this.name = "Validation Error";
    }
}