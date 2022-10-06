//Automata fordítás:
//npx tsc --watch


import { Book } from "./Book";

let lista: Array<Book> = [];

console.log("\n30 db könyv:");
for(let i = 0; i < 30; i++){
    var rkonyv = Math.floor(Math.random()*10+1);
    lista.push(new Book("Book#" + i, rkonyv));
}

for(let i = 0; i < lista.length; i++){
    console.log(lista[i]);
}

console.log("\n7-nél nagyobb értékelésű könyvek:");

for(let i = 0; i < lista.length; i++){
    if(lista[i].rating > 7){
        console.log(lista[i]);
    }
}