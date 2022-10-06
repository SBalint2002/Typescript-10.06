"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor(nev, rating) {
        this.name = nev;
        this.rating = rating;
    }
    kiir() {
        console.log(this.name, this.rating);
    }
    set setRating(rating) {
        if (rating > 10 || rating < 1) {
            throw new Error("Nem jou");
        }
        else {
            this.rating = rating;
        }
    }
    toString() {
        return "A könyv neve: " + this.name + " értékelése: " + this.rating;
    }
}
exports.Book = Book;
