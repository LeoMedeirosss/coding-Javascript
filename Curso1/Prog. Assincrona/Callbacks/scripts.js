//função que faz uma ação depois de algum acontecimento no código.

console.log("1")

setTimeout(function() {
    console.log("5") 
}, 3000 ) //3 segundos depois de ser executado.

console.log("2")
console.log("3")
console.log("4")

//no console, os números ficam em ordem:1, 2, 3, 4, 5