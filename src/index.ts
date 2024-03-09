import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

// const numbersCollection = new NumbersCollection([101, 30, -5, 0, 1, 4, 9, 3, 40])
// numbersCollection.sort()
// console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('aXaaytwSP')
charactersCollection.sort()
console.log(charactersCollection.data)
