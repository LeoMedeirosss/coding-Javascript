//Uma classe pode herdar propriedades de outras classes
//uso do extends

class Mamifero{
    constructor(patas){
        this.patas = patas
    }
}

class Gato extends Mamifero{
    construtor(patas,cor){
        super(patas,patas)
        this.cor = cor
    }
}
let siames = new Gato(4,"preto")