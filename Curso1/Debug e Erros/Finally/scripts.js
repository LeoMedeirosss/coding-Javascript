//pode ser executado independnete do resultado do try/catch
//não é tão utilizado

let a = 10
//let b = 2
try{
    let c = a + b
} catch(e){
    console.log(e)
} finally {
    console.log("executou")
}

console.log("teste")