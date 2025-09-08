const obj = {
    falar: function(){
        console.log("falar")
    },
    nome:" ",
    setNome: function(nome){
        this.nome = nome
    }
}

obj.setNome("Robson")
console.log(obj.nome)