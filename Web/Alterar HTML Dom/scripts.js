//Alterar DOM com insertBefore

let novoElemento = document.createElement("p")
let elementoAlvo = document.querySelector("#principal")
let elementoPai = document.querySelector("#conteiner")

//o insertbefore precisa de 2 parâmetros.
//o novo elemento a ser inserido e o elemento alvo, onde ele vai ser inserido.
elementoPai.insertBefore(novoElemento, elementoAlvo)

//Alterar DOM com appendChild
//appendChild insere o elemento após todos os elementos do elemento pai.

let novoElemento2 = document.createElement("p")
let texto = document.createTextNode("Algum Texto")
novoElemento2.appendChild(texto)

let p = document.querySelector("#texto1")
let pai = p.parentNode
pai.appendChild(novoElemento2)

//TextNode

let pSemTexto = document.getElementById("sem-texto")
let texto2 = document.createTextNode("Inserindo texto")
pSemTexto.appendChild(texto2)