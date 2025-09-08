//Eventos são ações condicionadas a algum tipo de resposta feita pelo usuário
//É possível atrelar lógica a essas ações do usuário
//Clicks, movimento do mouse, etc.

let btn = document.getElementById("button1")
btn.addEventListener("click", function() {
    console.log("apertou")
})