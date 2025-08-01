import express from "express";

const orango = express();

orango.use(express.json());

var ultimoId = 1;
var usuarios = [];

orango.get("/usuarios", (req, res) => {
    res.send("Usuarios: ")

    res.status(200).json(usuarios)
})

orango.get("/rota/:id", (req, res) => {
    console.log("Você acessou a rota: ", req.params)
})

orango.post("/usuarios/cadastrar", (req, res) => {

    const { nome, email } = req.body;

    if(!nome || !email) {
        res.status(400).json( message = "Não tem nome ou email")
        return;
    }

    const usuario = {
        id: ultimoId++,
        nome,
        email
    }
    usuarios.push(usuario)

    console.log("Usuario cadastrado: ")
    console.log(usuarios)

    
    console.log(usuarios)
    res.status(200).json(req.body)
})

const PORT = 3002;
orango.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
