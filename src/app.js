import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
  console.error("Erro na conexão com o banco de dados!", erro);
});

conexao.once("open", () => {
  console.log("Banco de dados conectado com sucesso!");
});

const app = express();
routes(app);

app.delete("/livros/:id", (req, res) => {
  const livro = buscaLivro(req.params.id);

  livros.splice(livro, 1);
  res.status(204).send("Livro removido com sucesso!");
});

export default app;
