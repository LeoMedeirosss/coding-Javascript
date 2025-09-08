//Generators são semelhantes as Promises
//ações podem ser pausadas e continuadas depois

function* criadorID(){
    let id = 0
    while(true) {
        yield id++
    }
}

let criarID = criadorID()

console.log(criarID.next().value)
console.log(criarID.next().value)
console.log(criarID.next().value)
console.log(criarID.next().value)