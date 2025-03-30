import express from "express";
import conectaNaDatabase from "../config/dbConnect.js";
import livro from "../models/Livro.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("Erro na conexão com o banco de dados!", erro);
});


conexao.once("open", () => {
  console.log("Banco de dados conectado com sucesso!");
}); 

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World\n");
});

app.get("/livros", async (req, res) => {
  const listaLivros = await livro.find();
  res.status(200).json(listaLivros);
});

app.get("/livros/:id", (req, res) => {
  const livro = buscaLivro(req.params.id);
  res.status(200).json(livros[livro]);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso!");
});

app.put("/livros/:id", (req, res) => {
  const livro = buscaLivro(req.params.id);

  livros[livro].titulo = req.body.titulo;
  res.status(200).json(livros[livro]);
});

app.delete("/livros/:id", (req, res) => {
  const livro = buscaLivro(req.params.id);

  livros.splice(livro, 1);
  res.status(204).send("Livro removido com sucesso!");
});

export default app;
