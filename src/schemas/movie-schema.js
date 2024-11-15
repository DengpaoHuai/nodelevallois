import { array, number, object, string } from "yup";

export const movieSchema = object().shape({
  title: string().required(),
  director: string().required(),
  year: number().required(),
  actors: array().of(string()).required(),
});
