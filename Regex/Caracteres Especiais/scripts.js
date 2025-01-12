//testes dos caracteres especiais para as regex
//amplamente utilizado

const pontoRegex = /./ //aceita todos os caracteres
console.log(".")
console.log(pontoRegex.test("abcd"))
console.log(pontoRegex.test("   "))
console.log(pontoRegex.test("12345"))
console.log(pontoRegex.test("abcd12345-Ç"))
//all true
console.log(" ")

const dRegex = /\d/ //aceita todos os números [0-9]
console.log("\d")
console.log(dRegex.test("abcd")) //false
console.log(dRegex.test("   ")) //false
console.log(dRegex.test("12345")) //true
console.log(dRegex.test("abcd12345-Ç")) //true
console.log(" ")

const dRegex2 = /\D/ //não aceita apenas números = [^0-9]
console.log("\D")
console.log(dRegex2.test("abcd")) //true
console.log(dRegex2.test("   ")) //true
console.log(dRegex2.test("12345")) //false
console.log(dRegex2.test("abcd12345-Ç")) //true - pois caractéres além dos numeros.
console.log(" ")

const sRegex = /\s/ //aceita espaços vazios, tabs e quebra de linhas.
console.log("\s")
console.log(sRegex.test("abcd")) //false
console.log(sRegex.test("   ")) //true
console.log(sRegex.test("12345")) //false
console.log(sRegex.test("abcd12345-Ç")) //false
console.log(" ")

const wRegex = /\w/ //aceita caracteres alfanuméricos: de a-z e 0-9.
console.log("\w")
console.log(wRegex.test("abcd")) //true
console.log(wRegex.test("   ")) //false
console.log(wRegex.test("12345")) //true
console.log(wRegex.test("abcd12345-Ç")) //true

const dia =/\d\d/
console.log(dia.test("2019") && "2019".length == 2 && "2019" <= "31") //false
console.log(dia.test("30") && "30".length == 2 && "30" <= "31" ) //true