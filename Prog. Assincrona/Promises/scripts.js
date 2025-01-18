//ações assíncronas que produzem um valor em algum momento do código.
//promete ao javascript que o valor pode estar presente em algum momento do código

let promessa = Promise.resolve(5 + 1)

console.log("Outros códigos")
console.log(promessa)

promessa.then((value) => (console.log(`o valor é ${value}`)))

//falha nas promises

