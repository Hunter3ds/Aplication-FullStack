const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

let usuarios = [];
app.get('/usuarios', (req, res)=>{
    res.json(usuarios);
})
app.post('/usuarios', (req, res)=>{
    const novoUsuario = req.body;
    console.log('Usuário recebido')
    usuarios.push(novoUsuario);
    res.status(201).json({mensagem: 'Usuário criado com sucesso'})
})
app.listen(port, ()=>{
    console.log(`Sevidor rodando em http://localhost`)
})