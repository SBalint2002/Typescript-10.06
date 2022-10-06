//Automata fordítás:
//npx tsc --watch


import { Book } from "./Book";

let lista: Array<Book> = [];

for(let i = 0; i < 30; i++){
    var rkonyv = Math.floor(Math.random()*10+1);
    lista.push(new Book("Book#" + i, rkonyv));
}

for(let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}