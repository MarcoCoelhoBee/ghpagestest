import { IParticipant } from "./IParticipant";
import { ISeason } from "./ISeason";

export interface IParticipantSeason {
  participantId: number;
  participant: IParticipant;
  seasonId: number | null;
  season: ISeason | null;
  hasBeenChosen: boolean;
  watchedAtDate: Date;
}
