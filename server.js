const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Configuração para processar JSON no body das requisições
app.use(cors());
app.use(express.json());

let usuarios = [];

// Rota para listar todos os usuários (READ)
app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

// Rota para criar um novo usuário (CREATE)
app.post('/usuarios', (req, res) => {
  const novoUsuario = req.body;
  console.log("Usuário recebido", novoUsuario);
  
  // Adiciona um ID automático ao usuário
  novoUsuario.id = usuarios.length + 1;
  
  usuarios.push(novoUsuario);
  res.status(201).json({ mensagem: 'Usuário criado com sucesso' });
});

// fazer daqui
app.get('/usuarios/:id', (req, res) => {
  const { id } = req.params;
  const usuario = usuarios.find(u => u.id == id);

  if (usuario) {
    res.status(200).json({ mensagem: 'Usuário encontrado', usuario });
  } else {
    res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }
});
app.put('usuarios/:id', (req, res)=> {
  const { id } = req.params;
  const usuarioIndex = usuarios.findIndex(u => u.id == id);

  if(usuarioIndex !== -1){
    usuarios[usuarioIndex] = {...usuarios[usuarioIndex], ...req.body}
    res.status(200).json({mensagem:'Usuário atualizado com sucesso', usuario: usuarios[usuarioIndex]});
  }else{
    res.status(404).json({mensagem:'Usuário não encontrado'})
  }
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
