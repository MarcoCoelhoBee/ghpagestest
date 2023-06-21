import { IMovie } from "./IMovie";
import { IParticipant } from "./IParticipant";
import { ISeason } from "./ISeason";

export interface IAwardsDTO {
    
  seasonId: number;
  season: ISeason;

  awards: Array<IAwardDTO>;
  
}
export interface IAwardDTO {
    
  id: number;
  name: string;
  order: number;

  movieId: number;
  movie: IMovie;

  participantId: number;
  participant: IParticipant;
  
}