import express from "express";

const app = express();

const livros = [
  { id: 1, titulo: "O Senhor dos Anéis" },
  { id: 2, titulo: "Fundação" },
  { id: 3, titulo: "Neuromancer" },
];

function buscaLivro(id) {
  return livros.findIndex((livro) => {
    return livro.id === Number(id);
  });
}

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World\n");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
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

export default app;
