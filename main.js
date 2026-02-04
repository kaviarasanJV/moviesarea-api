import express from "express";
import moviesRoutes from "./routes/movies.routes.js";
const app = express();
const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send({obj1:"Hello, MoviesArea API! main.js"});
});
///CRUD functionality for movies
app.use("/movies", moviesRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});