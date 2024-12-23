function lembrar(x) {
    return function(y) {
        return x+y
    }
}

let soma = lembrar(2)

console.log(soma(5))

function contador(i) {
    let cont = i
    let somarCont = function(){
        console.log(cont)
        cont++
    }
    return somarCont
}

let meuContador = contador(5)
meuContador()
meuContador()