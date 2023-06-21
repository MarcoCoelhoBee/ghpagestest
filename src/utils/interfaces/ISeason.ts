import { IMovieParticipantSeasons } from "./IMovieParticipantSeasons";

export interface ISeason {
  id: number;
  name: string;
  startDate: Date;
  endDate: Date | undefined;
  movieParticipantSeasons: Array<IMovieParticipantSeasons>;
}
