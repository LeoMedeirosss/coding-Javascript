/* A principal diferença da 
função padrão para a arrow funcion
é que a arrow function não cria seu 
próprio escopo de variáveis, 
mas sim herda o escopo do 
contexto em que ela foi definida */

let consoleTeste = () => {
    console.log("teste")
}

let soma = (a,b) => {
    return a + b
}

console.log(soma(10,90))

const multiplicar = (x) => {
    return x * x
}

console.log(multiplicar)

const Multiplicar2 = x => x * x

console.log(Multiplicar2(4))