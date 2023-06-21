import { IMovie } from "./IMovie";
import { IParticipant } from "./IParticipant";

export interface IMovieParticipantSeasons {
  movie: IMovie;
  movieId: number;
  participant: IParticipant;
  participantId: number;
  hasBeenChosen: boolean;
  watchedAtDate: Date | null;
}
