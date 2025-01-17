//Exercicios
console.log(1) 
regex1 = /[A-Z]/ //qualquer string com algum digito maiúsculo
console.log(regex1.test("abcd"))
console.log(regex1.test("ABCD"))

console.log(" ")
console.log(2) 
regex2 = /\w+ID\b/ //qualquer digito com ID no final
console.log(regex2.test("1ID"))
console.log(regex2.test("kdoaskID"))
console.log(regex2.test("kdoIDask"))
console.log(regex2.test("kask"))

console.log(" ")
console.log(3)
regex3 = /Marca:(Nike|Adidas|Puma|Asics)/ //Marca: qualquer uma dessas strings
console.log(regex3.test("Marca:Nike"))
console.log(regex3.test("Marca:Adidas"))
console.log(regex3.test("Marca:Asics"))
console.log(regex3.test("Marca:Jordan"))
console.log(regex3.test("Mar:Nike"))
console.log(regex3.test("Marca"))

console.log(" ")
console.log(4)
regex4 = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/ //IP
console.log(regex4.test("127.0.0.1"))
console.log(regex4.test("127.903.444.190"))
console.log(regex4.test("12344444444"))
console.log(regex4.test("1.9.4.1"))
console.log(regex4.test("127.903.444.1904"))

console.log(" ")
console.log(5)
regex5 = /^(?=.{3,16}$)[a-z0-9-_]+$/ //string que tem entre 3-16 carac, letras minusculas, numeros, hifen ou underline.
console.log(regex5.test("a"))
console.log(regex5.test("aaaa"))
console.log(regex5.test("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"))
console.log(regex5.test("abcde__--oo44"))
console.log(regex5.test("_____j1____"))