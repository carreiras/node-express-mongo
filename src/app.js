import express from "express";

const app = express();

const livros = [
  { id: 1, titulo: "O Senhor dos Anéis" },
  { id: 2, titulo: "Fundação" },
  { id: 3, titulo: "Neuromancer" },
];

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World\n");
});

app.get("/livros", (req, res) => {
  res.status(200).json(livros);
});

app.post("/livros", (req, res) => {
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso!");
});

export default app;
