function somaDelay(a,b){
    return new Promise(resolve => {
        setTimeout(function(){
            resolve(a+b)
        }, 4000 /* 4 segundos */ )
    })
}

async function resSoma(a,b,c) {
    let x = somaDelay(a,b)
    let y = c

    return await x + y
}

resSoma(1,2,3).then(value => console.log(value))