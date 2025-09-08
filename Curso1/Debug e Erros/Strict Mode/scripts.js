"use strict"

variavel = "teste" //erro. Se, o "use strict", não daria erro

let variavel2 = "teste" //sem erro

function teste(){
    "use strict"
    t = 5 //erro
    let a = 3
}
teste()