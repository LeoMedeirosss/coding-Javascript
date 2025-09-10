function calcularIMC() {
    const form = document.querySelector(".form")

    function calculo(evento) {
        evento.preventDefault();
        const peso = document.querySelector(".peso")
        const altura = document.querySelector(".altura")
        const resultado = (peso.value / (altura.value * altura.value))
        console.log(resultado)

        if(resultado < 18.5) {
            console.log("abaixo do peso")
        } else if(resultado > 18.5 && resultado < 24.9) {
            console.log("peso normal")
        } else if (resultado > 25 && resultado < 29.9) {
            console.log("Sobre peso")
        } else if (resultado > 30 && resultado < 34.9) {
            console.log("obesidade 1")
        } else if (resultado > 35 && resultado < 39.9) {
            console.log("obesidade 2")
        } else {
            console.log("obesidade 3")
        }
    }
    form.addEventListener("submit", calculo);
}
calcularIMC()