import express from "express";
import { helloWorld } from "./src/controllers/hello-world-controller.js";
import {
  deleteMovieById,
  getMovies,
  postMovie,
} from "./src/controllers/movies-controller.js";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { yupSchemaMiddleware } from "./src/middlewares/yupSchemaMiddleware.js";
import { movieSchema } from "./src/schemas/movie-schema.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(cors());

mongoose.connect("mongodb://localhost:27017/demodbsuperincroyable");

app.get("/", helloWorld);

app.get("/movies", getMovies);
app.post("/movies", yupSchemaMiddleware(movieSchema), postMovie);
app.delete("/movies/:id", deleteMovieById);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
