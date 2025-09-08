console.log(1)
console.log(" ")
let string = "string"
let numero = 2
let booleano = true
console.log(string)
console.log(numero)
console.log(booleano)

console.log(" ")
console.log(2)
console.log(" ")
let idade = 20
if (idade >= 18) {
    console.log("entrar")
}

console.log(" ")
console.log(3)
console.log(" ")
const nome = "João"
if(nome == "João"){
    console.log(`saudações ${nome}`)
}

console.log(" ")
console.log(4)
console.log(" ")
let dois = Math.pow(2,2)
let tres = Math.pow(3,2)
let dezoito = Math.pow(18,2)
console.log(dois)
console.log(tres)
console.log(dezoito)

console.log(" ")
console.log(5)
console.log(" ")
let vel = 120
if (vel >= 80) {
    console.log("velocidade além da permitida")
} else {
    console.log("velocidade permitida")
}

console.log(" ")
console.log(6)
console.log(" ")
let id = 18
let cnh = false

if (id >= 18 && cnh == true) {
    console.log("pode dirigir")
} else if(id >= 18 && cnh == false){
    console.log("maior de idade mas não tem carteira")
} else{
    console.log("não pode tirar carteira")
}
console.log(" ")
console.log(7)
console.log(" ")
let loop = 0
while(loop <= 10){
    console.log(loop)
    loop = loop + 1
}

console.log(8)
for (let index = 100; index >= 50; index--) {
    console.log(index)  
}
console.log(" ")
console.log(9)
console.log(" ")
for (let i = 0; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(i + " é par")
    } else {
        console.log(i + " é impar")
    }
}