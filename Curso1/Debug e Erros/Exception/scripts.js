function ola(nome){
    if(typeof nome != "string"){
        throw new Error("o input precisa ser uma string")
    } else {
        console.log(`Olá ${nome}.`)
    }
}

ola("Wesley")
ola(false)