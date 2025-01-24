//Quando um elemento não é bem definido ou um elemento que está dentro de outro evento.
//Pode acontecer a propagação, ou seja, o outro elemento ativar um evento
//Aconteceria uma duplicação.
//Método stopPropagation.

let btn = document.getElementById("button")
let p = document.getElementById("capsula")

function msg(e){
    console.log("clicou no button")
    e.stopPropagation();
}

btn.addEventListener("click",msg)
p.addEventListener("click",function(){
    console.log("clicou no parágrafo")
})