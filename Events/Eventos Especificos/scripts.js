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