//tratamento de input por função

function checarNumero(num){
    let number = Number(num)
    if(Number.inNaN(number)){
        alert("Esse input aceita apenas números")
    } else {
        return number
    }
}

checarNumero(5)
checarNumero("cinco")