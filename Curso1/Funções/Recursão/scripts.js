//problema de usar muitos recursos

function recursao(n){
    if(n-1<2) {
        console.log("recursão parou " + n)
    } else if(n % 2 != 0) {
        console.log("numero impar " + n)
        recursao(n-1)
    } else {
        console.log("numero par " + n)
        recursao(n-2)
    }
}

recursao(27)
recursao(9)
recursao(87)