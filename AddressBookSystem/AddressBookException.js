"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookException = void 0;
class BookException extends Error {
    constructor(m) {
        super(m);
        this.name = "Validation Error";
    }
}
exports.BookException = BookException;
//# sourceMappingURL=AddressBookException.js.map