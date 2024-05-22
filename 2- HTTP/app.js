var http = require("http");
const PORT = 3000;
http.createServer(
    function(req, res) {
        res.end("<h1>Bem vindo ao meu site!</h1><h4> Curso de Node </h4>")
    }
).listen(PORT);
console.log(`O servidor está rodando na porta ${PORT}`)