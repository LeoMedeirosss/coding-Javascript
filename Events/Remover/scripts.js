//É possível remover eventos quando for necessário.
//removeEventListener, passando o evento e a função que o evento está escutando.

let btn = document.getElementById("button1")
let btn2 = document.getElementById("button2")

function mensagem() {
    console.log("Mensagem enviada")
}

btn.addEventListener("click", mensagem)

btn2.addEventListener("click", function(){
    btn.removeEventListener("click",mensagem)
})