import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send({obj1:"Hello, MoviesArea API!"});
});

///CRUD functionality for movies
app.get("/movies", (req, res) => {
  res.send({obj1:"List of movies will be here."});
});
app.post("/movies", (req, res) => {
  res.send();
});
app.put("/movie/:id", (req, res) => {
  res.send();
});
app.delete("/movies/:id", (req, res) => {
  res.send();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});