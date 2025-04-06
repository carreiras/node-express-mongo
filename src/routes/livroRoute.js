import express from "express";
import livroController from "../controllers/livroController";

const routes = express.Router();

routes.get("/livros", livroController.listarLivros);
