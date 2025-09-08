//forma de encontrar padrões em uma string.
//ex: validar se só tem números.
//expressões regulares são um tipo de objeto no javascript.


let reg1 = new RegExp("palavra")
let reg2 = /palavra/
//dois modos de declarar regex.

let string = "aqui tem palavra"

//verificando padrões com regex:
console.log(reg1.test("aaaaappalavrajdiosapkd")) //true
console.log(reg1.test("umdoistrespeelavoorq3")) //false

console.log(reg2.test("aaaaappalavrajdiosapkd")) //true
console.log(reg2.test("umdoistrespeelavoorq3")) //false

console.log(reg1.test(string)) //true