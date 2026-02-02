import express from "express";
import moviesRoutes from "./routes/movies.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send({obj1:"Hello, MoviesArea API! main.js"});
});

///CRUD functionality for movies
app.use("/movies", moviesRoutes
//     (req, res) => {
//   if (req.method === "GET") {
//     res.send({obj1:"List of movies will be here."});    
//     } else if (req.method === "POST") { 
//     res.send({obj1:"New movie added."});
//   }}
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});