//ações assíncronas que produzem um valor em algum momento do código.
//promete ao javascript que o valor pode estar presente em algum momento do código

let promessa = Promise.resolve(5 + 1)

console.log("Outros códigos")
console.log(promessa)

promessa.then((value) => (console.log(`o valor é ${value}`)))
        .then((value) => {return value + 5})
        .then((value) => (console.log(value)))

//falha nas promises

console.log(" ")
let promessa2 = Promise.resolve(new Error("falha"))

console.log("Outros códigos")

promessa2.then(value=> console.log(value))
         .catch(reason => console.log("Falhou " + reason))

//rejeitar promises


