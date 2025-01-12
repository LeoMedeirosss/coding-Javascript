//Operadores

//Not -> ^
const semAeB = /[^ab]/
console.log(semAeB.test("aaaa")) //false
console.log(semAeB.test("aabbbbabab")) //false
console.log(semAeB.test("aaaca")) //true, pois tem o "C" também.

const semAateZ = /[^a-z]/
console.log(semAateZ.test("abcdemioklpppp")) //false
console.log(semAateZ.test("abcdemioklppppç")) //true, pois tem o "Ç" também.
console.log(semAateZ.test("abcdefghijk9")) //true, pois tem o "9" também.

//Plus -> +
const umOuMaisNum = /\d+/ //qualquer quantidade de números.
console.log(umOuMaisNum.test("19048u938106478311")) //true
console.log(umOuMaisNum.test(" ")) //false
console.log(umOuMaisNum.test("acbd123564444")) //true

//Question -> ?
const opc = /abcde?/ //o "e" é opcional.
console.log(opc.test("abcde")) //true
console.log(opc.test("abcd")) //true
console.log(opc.test("ae")) //false
console.log(opc.test("abcdefg")) //true
console.log(opc.test("abcdfg")) //true