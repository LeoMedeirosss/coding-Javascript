//let a = 5 -> o erro acontece pois "a" não está declarado

try{
    let b = a * 2
} catch(e){
    console.log(e) //não para o programa, apenas exibe o erro.
    //throw new Error(e) // para o programa.
}