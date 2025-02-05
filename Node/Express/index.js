let express = require("express")
let app = express()

app.get("/",function(req,res){
    res.send("First Express Route")
}) //principal

app.listen(3000, function() {
    console.log("Aplicação funcinando na rota 3000")
})

