console.log(1)
function pontoLog(){
    console.log("Texto")
}
pontoLog()

console.log(" ")
console.log(2)
function temIdade(idade){
    console.log(`você tem ${idade} anos`)
}
temIdade(20)

console.log(" ")
console.log(3)
function somar(x,y){
   return x + y
}
console.log(somar(10,2))

console.log(" ")
console.log(4)
function random(x){
    return Math.floor(Math.random() * x) + 1
}
console.log(random(100))

console.log(" ")
console.log(5)
function entrar(idade){
    if(idade >= 18){
        console.log("pode entrar")
    } else {
        console.log("não pode entrar")
    }
}
entrar(14)
entrar(19)

console.log(" ")
console.log(6)
function detectar(variavel){
    if(typeof variavel === "number" ){
        console.log("é um numero")
    } else if(typeof variavel === "boolean"){
        console.log("é um booleano")
    } else if(typeof variavel === "string"){
        console.log("é uma string")
    }
}
detectar(5)
detectar(true)
detectar("palavra")

console.log(" ")
console.log(7)
function negativo(n){
    n = (n * (-1) )
    return n
}
console.log(negativo(-10))

console.log(" ")
console.log(8)
function maiorque(texto){
    if(texto.length > 10){
        console.log("string muito longa")
    } else {
        console.log("string dentro do limite")
    }
    console.log(texto.length)
}
maiorque("aeeeeeeeeeeeeeeee")

console.log(" ")
console.log(9)
function decrementa(num){
    while(num >= 0){
        if(num % 2 == 0){
            console.log(num + " é par")
        }
        num--
    }
}

decrementa(20)
