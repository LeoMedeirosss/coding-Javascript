let a = 1
let b = 2
let c = 3
let d = 4

function imprimir(...args){
    for(let i = 0; i > args.length; i ++){
        console.log(args[i])
    }
}
imprimir(a,b,c)
console.log(' ')
imprimir(d,c,d)
console.log(' ')
imprimir(1,2,3,4,5,6,77,88,99)