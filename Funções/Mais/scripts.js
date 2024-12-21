function multiplicar(x,y,z){
    return x*y*z;
}

console.log(multiplicar(2,4,2))

function dirigir(idade,cnh){
    if(idde >= 18 && cnh == true){
        console.log("pode dirigir")
    } else {
        console.log("Não pode dirigir")
    }
}

console.log(dirigir(19,true))
console.log(dirigir(19,false))
console.log(dirigir(17,true))
console.log(dirigir(17,false))