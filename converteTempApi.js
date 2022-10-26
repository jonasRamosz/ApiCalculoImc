const express = require('express');
const app = express();

const calculadora = require('./funcConvert');

app.get('/', (req,res) => {
    let celsius = req.query.celsius;

    let temp = calculadora.converteF(celsius);

    res.json({temperatura: temp})

})

app.listen(8080,() => {
    console.log('servidor node iniciado')
})
