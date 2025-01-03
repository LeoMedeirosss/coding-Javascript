//muito comum em linguagens OO, como java

class pessoa{
    constructor(nome, altura){
        this.nome = nome
        this.altura = altura
    }

    get getNome(){
        return this.nome
    }
    get getAltura(){
        return this.altura
    }

    set setNome(nome){
        this.nome = nome
    }
    set setAltura(altura){
        this.altura = altura
    }
}

pessoa.setNome = "João"
pessoa.setAltura = 1.75

console.log(pessoa.getNome)
console.log(pessoa.getAltura)