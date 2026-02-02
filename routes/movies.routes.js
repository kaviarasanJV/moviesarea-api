import express from "express";
//const router = express();
const router = express.Router();


///CRUD functionality for movies
router.get("/", (req, res) => {
  res.send({ obj1: "Hello, MoviesArea API! insidemovies.routes.js"   });
});
router.get("/", (req, res) => {
  res.send({obj1:"List of movies will be here."});
});
router.post("/", (req, res) => {
  res.send("New movie added.");
});
router.put("/:id", (req, res) => {
  res.send("Movie updated.");
});
router.delete("/:id", (req, res) => {
  res.send("Movie deleted.");
});

export default router;
