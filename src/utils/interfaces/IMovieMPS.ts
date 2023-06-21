import { IGenre } from "./IGenre";
import { IParticipantSeason } from "./IParticipantSeason";

export interface IMovieMPS {
  id: number;
  imdbId: string;
  title: string;
  genres: Array<IGenre>;
  image: string;
  imdbRating: number;
  metaRating: number;
  rottenTomatoesRating: number;
  movieBackground: string | null;
  runtime: string;
  trailer: string | null;
  year: number;
  movieParticipantSeasons: Array<IParticipantSeason>;
}
