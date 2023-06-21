import { IGenre } from "./interfaces/IGenre";

export const genresText = (genres: Array<IGenre> | undefined): string => {
  return genres?.map((value) => value.name).join("/<wbr />") ?? "None";
};
