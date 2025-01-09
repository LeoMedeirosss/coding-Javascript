//verificações no programa, que são utilizadas para ver que tudo vai 
//ocorrer da forma esperada.

let arr = [1,2,3,4,5]
let arr2 = []

function iterarArray(arr){
    if(arr.length == 0){
        throw new Error("o array precisa ter ao menos 1 elemento.")
    } else {
        for(let i = 0;i < arr.length;i++ ){
            console.log(i)
        }
    }
}

function vazioArray(arr){
    if(arr.length > 0){
        throw new Error("o array não está vazio")
    } else {
        console.log("o array está vazio")
    }
}

iterarArray(arr)
iterarArray(arr2)

vazioArray(arr)
vazioArray(arr2)