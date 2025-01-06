//classe é um molde de um ou mais objetos
// é o prototype do javascript

let cachorro = {
    patas: 4,
    raça: " ",
    latir: function(){
        console.log("ruf ruf")
    }
}

let labrador = Object.create(cachorro)
let yorkshire = Object.create(cachorro)

labrador.raça = "Labrador"
yorkshire.raça = "York"

//duas formas de instanciar um objeto de uma classe

function criarCachorro(raça,patas,cor) {
    let cachorro = Object.create({})
    cachorro.raça = raça
    cachorro.patas = patas
    cachorro.cor = cor
    return cachorro
}

let doberman = criarCachorro("doberman",4,"preto")
console.log(doberman)

function criarCachorro2(raça,patas,cor){
    this.raça = raça
    this.patas = patas
    this.cor = cor
}

let husky = new criarCachorro2("Husky",4,"branco")

console.log(husky)

class dog{
    constructor(raca){
        this.raca = raca
    }
}
let patas = Symbol()
dog.prototype[patas] = 4
let golden = new dog("Golden Retriever")
console.log(dog.prototype[patas])