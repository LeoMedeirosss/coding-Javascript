const {createServer} = require("http")

let server = createServer( (request, response) =>{

    response.writeHead(200, {"Content-Type": "text/html"})
    response.write(`
        <h1>Título</h1>
        <p>Primeira pagina com Node.js</p>
    `);
    response.end()

})

server.listen(8000)

console.log("Ouvindo a porta 8000")

//aplicação criada com Node