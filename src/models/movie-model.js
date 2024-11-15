import mongoose from "mongoose";

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: String,
  year: Number,
  actors: [String],
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
