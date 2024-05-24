const express = require('express');//importando o express
const app = express(); //iniciando o express

app.get("/", function(req, res){
    res.send(
        " <h1>Minha primeira rota!</h1>"
    );     
});

app.get("/blog/:artigo?", function(req, res){

    var artigo = req.params.artigo;
    if(artigo){
        res.send(`<h2>Artigo: ${artigo}</h2>`)
    }else{
        res.send(`<h2>Bem vindo ao meu blog!</h2>`)
    }
    
})

app.get("/canal/youtube", function(req, res){

    var canal = req.query["canal"];
    if(canal){
        res.send("Canal: "+canal)
    }else{
        res.send("Não foi informado o canal")
    }
    
})

app.get('/ola/:nome/:empresa', function(req,res){
    const nome = req.params.nome
    const empresa = req.params.empresa
    res.send(`<h1>Oi ${nome} que trabalha na empresa ${empresa}!</h1>`)
})

app.listen(4000,function(erro){
    if(erro){
        console.log("Ocorreu um erro!");
    }else{
        console.log("Servidor iniciado com sucesso!")
    }
})

