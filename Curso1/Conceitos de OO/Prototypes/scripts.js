//objeto fallback de outro objeto(fallback = filho)
//quando um objeto recebe uma requisição de uma propriedade que não tem
//ela procura no prototype deste objeto.

const obj = {
    numero: 10,
}

console.log(Object.getPrototypeOf(obj))
console.log(Object.getPrototypeOf(obj) === Object.prototype)
console.log(obj.hasOwnProperty('numero')) //true
console.log(obj.hasOwnProperty('cor')) // false

const obj2 = Object.create(obj)
console.log(obj2.numero)
console.log(obj2.hasOwnProperty('numero')) //false, pois quem tem a propriedade é obj, 
                                                        //e não obj2    