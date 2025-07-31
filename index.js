const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rota GET /usuarios
app.get('/usuarios', (req, res) => {
  console.log('Rota acessada: /usuarios');
  res.send('Rota /usuarios acessada');
});

// Rota GET /usuario com parâmetro id
app.get('/usuario/:id', (req, res) => {
  const { id } = req.params;
  console.log(`Rota acessada: /usuario com ID: ${id}`);
  res.send(`Rota /usuario acessada com ID: ${id}`);
});

// Rota POST /usuario/criar
app.post('/usuario/criar', (req, res) => {
  console.log('Corpo da requisição recebido:', req.body);
  res.json({
    message: 'Usuário criado com sucesso',
    data: req.body
  });
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});