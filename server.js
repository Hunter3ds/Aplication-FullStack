const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

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
app.put('/usuarios/:id', (req, res)=>{
    const id = req.params;
    const idUsuario = element => element == id
    const usuarioIndex = usuarios.findIndex(idUsuario);
    
    if(usuarioIndex !== -1){
        res.send(`Usuário encontrado no índice ${usuarioIndex}`)
    }else{
        res.status(404).send('Usuário não encontrado')
    }
})
app.listen(port, ()=>{
    console.log(`Sevidor rodando em http://localhost`)
})