export const MovieIndex = (req, res) => {
  res.send({ obj1: "Hello, MoviesArea API! inside movies.controller.js"   });
}
export const movieList=(req, res)=>{
      res.send({obj1:"List of movies will be here."});
}
export const MovieCreate=(req, res) => {
  res.send("New movie added.");
}
export const MovieUpdate=(req, res) => {
  res.send("Movie updated.");
}
export const MovieDelete=(req, res) => {
  res.send("Movie deleted.");
}