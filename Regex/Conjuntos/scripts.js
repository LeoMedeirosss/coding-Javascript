//é possível definir um conjunto de caracteres para encontrar por regex

const reg1 = /[12345]/ //se qualquer um desses caracteres estiver presente na string, retornará true

console.log(reg1.test("numero 4")) //true
console.log(reg1.test("numero 77")) //false
console.log(reg1.test("numero 123")) //true

const reg2 = /[0-9]/ //se qualquer número nesse intervalo de 0-9 estiver na string, retornará true
//reg2 basicamente verifíca se existe um número na string
console.log(reg2.test("68")) //true
console.log(reg2.test("102948145")) //true



