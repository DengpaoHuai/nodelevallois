import Movie from "../models/movie-model.js";

export const getMovies = async (req, res) => {
  const movies = await Movie.find();
  res.send(movies);
};

export const postMovie = async (req, res) => {
  console.log(req.body);
  Movie.create(req.body);
  res.send("ok");
};

export const deleteMovieById = async (req, res) => {
  console.log(req.params);
  await Movie.findByIdAndDelete(req.params.id);
  res.send("ok");
};
