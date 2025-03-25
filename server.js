import http from "http";
import app from "./src/app.js";

const PORT = 3000;

const rotas = {
    "/": "Hello World\n",
    "/livros": "Lista de livros\n",
    "/autores": "Lista de autores\n",
}

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
