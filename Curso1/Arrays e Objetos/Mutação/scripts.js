let pessoa = {
    nome:"Pedro"
}
let pessoa2 = pessoa

console.log(pessoa == pessoa2) //true

let pessoa3 = {
    nome:"Pedro"
}

console.log(pessoa2 == pessoa3) //false
console.log(pessoa = pessoa3) //false

pessoa2.nome = "João" //também muda no "pessoa"
console.log(pessoa.nome)