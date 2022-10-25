
const express = require('express');
const app = express();

const calculadoraImc = require('./funcoesImc')


app.get('/' , (req,res) => {

    let peso = req.query.peso;
    let altura = req.query.altura;

    if(calculadoraImc.validaParametro(peso) && calculadoraImc.validaParametro(altura)){

        let imc = calculadoraImc.efetuarCalculoImc(peso,altura); 
        let status = calculadoraImc.retornaStatusIMC(imc);
        
        let json = {imc: imc.toFixed(2),status: status}
        
        res.json(json)
        }

    else{
        res.status(400).json({'ERRO' : 'Peso ou Altura invalidos'})
    }
});

app.listen(8080, () => {
    console.log('servior node iniciado');
});""