//Funções assincronas podem ser usadas com a palavra reservada async
//retornam uma promise

async function somar(a,b) {
    return a + b
}

console.log(somar(5,10)) //retornar em formato de promise

somar(5,10).then(value => console.log(value)) //retornar em formato de função