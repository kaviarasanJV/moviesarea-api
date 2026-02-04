import express from "express";
import { MovieIndex, movieList, MovieCreate, MovieUpdate, MovieDelete } from "../controllers/movies.controller.js";
//const router = express();
const router = express.Router();

///CRUD functionality for movies
router.get("/", MovieIndex);
router.get("/list",movieList);
router.post("/", MovieCreate);
router.put("/:id",MovieUpdate);
router.delete("/:id", MovieDelete);

export default router;
