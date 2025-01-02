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