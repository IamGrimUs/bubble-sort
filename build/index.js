"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = require("./CharactersCollection");
// const numbersCollection = new NumbersCollection([101, 30, -5, 0, 1, 4, 9, 3, 40])
// numbersCollection.sort()
// console.log(numbersCollection.data)
const charactersCollection = new CharactersCollection_1.CharactersCollection('aXaaytwSP');
charactersCollection.sort();
console.log(charactersCollection.data);
