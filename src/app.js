import express from "express";

const app = express();

const livros = [
    { id: 1, titulo: "O Senhor dos Anéis" },
    { id: 2, titulo: "Fundação" },
    { id: 3, titulo: "Neuromancer" },
]

app.get("/", (req, res) => {
    res.status(200).send("Hello World\n");
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
});

export default app;