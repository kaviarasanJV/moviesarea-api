import express from "express";
//const router = express();
const router = express.Router();

///CRUD functionality for movies
router.get("/", MovieIndex);
router.get("/",movieList);
router.post("/", MovieCreate);
router.put("/:id",MovieUpdate);
router.delete("/:id", MovieDelete);

export default router;
