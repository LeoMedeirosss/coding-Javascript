//Eventos de Tecla.
//keyup e keydown

window.addEventListener("keydown",function(e){
    if(e.key == 'l'){
        console.log("apertou o L")
    }
})

window.addEventListener('keyup',function(e){
    if(e.key == "l"){
        console.log("soltou o l")
    }
})

//Eventos de Mouse
//mousedown e mouseup
//dblclick
//botão direito no btn2

let btn1 = document.getElementById("button1")
let btn2 = document.getElementById("button2")

btn1.addEventListener("mousedown",function(){
    console.log("apertou o botão")
})

btn1.addEventListener("mouseup",function(){
    console.log("soltou o botão")
})

btn2.addEventListener("dblclick",function(){
    console.log("clicou duas vezes")
})

btn2.addEventListener("contextmenu",function(e){
    e.preventDefault
    console.log("Botão direito")
})

//Movimento do mouse
//mousemove

window.addEventListener("mousemove", function(e){ //imprime na tela os eixos x e y
    console.log(e.x)
    console.log(e.y)
})