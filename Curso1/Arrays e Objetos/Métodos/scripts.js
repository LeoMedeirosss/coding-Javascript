//são propriedades que funcionam como funções

let nome = "nome"
let nomeMaiusculo = "NOME"

console.log(nome.toUpperCase)
console.log(nomeMaiusculo.toLowerCase)

console.log(typeof nome.toUpperCase) //function

//string.propriedade
//string.metodo()


//MÉTODOS

let array = [1,2,3,4,5,6,7,8,9,10]

let pop = array.pop() //remover o último elemento

let push = array.push(10) //adiciona no fim do array

let shift = array.shift() //remove o primeiro elemento

let unshift = array.unshift(1) //adiciona no inicio do array

array.forEach(num =>{
    console.log(num) //igual um for, mais simplificado
})

console.log(array.includes(11)) //false
console.log(array.includes(10)) //true

let numero = "10"
console.log(numero.padStart(4,"2"))

let frase = "O rato roeu a roupa do rei de roma"
let palavras = frase.split(" ")
console.log(palavras)