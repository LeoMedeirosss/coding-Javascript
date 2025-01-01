console.log(1)
array1 = [1,2,3,4,5]
console.log(array1[0],array1[2], array1[3])

console.log(" ")
console.log(2)
array2 = [1,2]
array3 = [1,2,3,4]
console.log[array2.length]
console.log[array3.length]

console.log(" ")
console.log(3)
let onibus = {
    rodas:8,
    limite:40,
    portas:2
}
console.log(onibus.rodas)
console.log(onibus.limite)
console.log(onibus.portas)

console.log(" ")
console.log(4)
delete onibus.rodas
console.log(onibus.rodas)
onibus.janelas = 20
console.log(onibus.janelas)

console.log(" ")
console.log(5)
array4 = ["um","dois","tres","quatro","cinco"]
if(array4.includes("tres")){
    console.log("inclui")
} else {
    console.log("não inclui")
}

console.log(" ")
console.log(5)
array5 = [1,2,3,4,5,6,7,8,9,0]
array6 = [1,2,3]
function maisde5(i){
    if(i.length >= 5){
        console.log("muitos elementos")
    } else{
        console.log("poucos elementos")
    }
}
maisde5(array5)
maisde5(array6)

console.log(" ")
console.log(6)
array7 = [1,2,3,4,5]
for (let i = 0; i < array7.length; i++) {
    console.log(array7[i])
}

console.log(" ")
console.log(7)
let json1 = {
    "nome": "João",
    "idade": 19,
    "profissão":"Padeiro"
}
console.log(json1.nome)
console.log(json1.idade)
console.log(json1.profissão)

console.log(" ")
console.log(8)
const frase = "array feito atravez de uma string"
const arrfrase = frase.split(" ")

for(let i = 0; i<arrfrase.length; i++){
    console.log(arrfrase[i])
}

console.log(" ")
console.log(9)
const calculadora = {
    soma: function(a,b){
        return a+b;
    },
    subtrair: function(a,b){
        return a-b
    },
    multiplicar: function(a,b){
        return a*b
    },
    dividir: function(a,b){
        return a/b
    }
}
console.log(calculadora.soma(1,2))
console.log(calculadora.subtrair(4,2))
console.log(calculadora.multiplicar(5,5))
console.log(calculadora.dividir(6,3))