"use strict";
//Automata fordítás:
//npx tsc --watch
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./Book");
let lista = [];
for (let i = 0; i < 30; i++) {
    var rkonyv = Math.floor(Math.random() * 10 + 1);
    lista.push(new Book_1.Book("Book#" + i, rkonyv));
}
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}
