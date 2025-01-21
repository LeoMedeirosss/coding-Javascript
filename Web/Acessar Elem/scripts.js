//acessando elementos

console.log(document.body)
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes[1])
console.log(document.body.childNodes[1].childNodes[1].innerText)

//acessando pela TAG

console.log(document.getElementsByTagName("h1"))
console.log(document.getElementsByTagName("p"))

//acessando pela ID

console.log(document.getElementById('principal'))
console.log(document.getElementById('lista'))