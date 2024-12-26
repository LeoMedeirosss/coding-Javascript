let obj = {
    nome:"João",
    profissao: "Engenheiro",
    idade: 20,
    strings: function(){
        console.log("abc")
    }
}

let obj2 = {
    prop: "propriedade"
}

console.log(obj.nome)
console.log(obj.idade)
obj.strings

delete obj.profissao
console.log(obj.profissao)

obj.booleano = true
console.log(obj.booleano)

Object.assign(obj, obj2)
console.log(obj)
console.log(obj2)

let obj3 = {
    prop1: "teste",
    prop2: "teste2"
}
console.log(Object.keys(obj3))