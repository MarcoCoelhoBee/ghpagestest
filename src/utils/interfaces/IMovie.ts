import { IGenre } from "./IGenre";

export interface IMovie {
  id: number;
  imdbId: string;
  title: string;
  image: string;
  trailer: string;
  runtime: string;
  year: number;
  imdbRating: number;
  metaRating: number;
  rottenTomatoesRating: number;
  genres: Array<IGenre>;
  movieBackground: string;
}
