console.log(1)
class Conta{
    constructor(saldo){
        this.saldo = saldo
    }
    deposito(dinheiro){
        console.log(this.saldo = this.saldo + dinheiro)
    }
    saque(dinheiro){
        console.log(this.saldo= this.saldo - dinheiro)
    }

}

let conta = new Conta(2000)
conta.deposito(1000)
conta.deposito(1000)
conta.saque(1000)

console.log(" ")
console.log(2)
class Carrinho{
    constructor(item,quantidade,valorTotal){
        this.item = item
        this.quantidade = quantidade
        this.valorTotal = valorTotal
    }
}
let carrinho = new Carrinho([
    {
        id:1,
        nome:"Pão",
        quantidade:1,
        valor:5
    },
    {
        id:2,
        nome:"Queijo",
        quantidade:3,
        valor:10
    }
],4, 35)
console.log(carrinho)

console.log(" ")
console.log(3)
class Endereço{
    constructor(rua,bairro,cidade,estado){
        this.rua = rua
        this.bairro = bairro
        this.cidade = cidade
        this.estado = estado
    }
    set setRua(rua){
        this.rua = rua
    }
    set setBairro(bairro){
        this.bairro = bairro
    }
    set setCidade(cidade){
        this.cidade = cidade
    }
    set setEstado(estado){
        this.estado = estado
    }
}
let end = new Endereço

end.rua = "Teles Júnior"
end.bairro = "Aflitos"
end.cidade = "Refice"
end.estado = "Pernambuco"
console.log(end)

console.log(" ")
console.log(4)
class Carro{
    constructor(marca,cor,gasolina){
        this.marca = marca
        this.cor = cor
        this.gasolina = gasolina
    }
    dirigir(){
        for (let i = 0; i < this.gasolina;i = i ) {
            if(this.gasolina > 0){
                console.log("dirigindo...")
                this.gasolina = this.gasolina - 1
                console.log(this.gasolina + " litro(s) restantes")
                if(this.gasolina == 0){
                    console.log("acabou a gasolina")
                }
            }
        }
    }
    abastecer(gas){
        this.gasolina = this.gasolina + gas
        console.log(`agora a gasolina restante é de ${this.gasolina} litros`)
    }
}
let lambo = new Carro("Lamborghini", "preto", 10)
lambo.dirigir()
lambo.abastecer(20)
