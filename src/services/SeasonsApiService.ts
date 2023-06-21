import axios from "axios";
import {
  seasonsGetByIdURL,
  seasonsGetFeaturedURL,
  seasonsGetFeaturedWithIdURL,
  seasonsGetListURL,
} from "../utils/constants/apiPaths";
import { ISeason } from "../utils/interfaces/ISeason";

export const getSeasonById = async (seasonId: number): Promise<ISeason> => {
  const response = await axios.get(
    seasonsGetByIdURL(seasonId, "watchedAtDate", "desc")
  );
  return response.data;
};

export const getFeaturedSeason = async (): Promise<ISeason> => {
  const response = await axios.get(seasonsGetFeaturedURL);
  return response.data;
};
export const getFeaturedByIdSeason = async (
  seasonId: number
): Promise<ISeason> => {
  const response = await axios.get(seasonsGetFeaturedWithIdURL(seasonId));
  return response.data;
};

export const getSeasons = async (sortBy: string, sortAscDesc: string) => {
  const response = await axios.get(seasonsGetListURL(0, sortBy, sortAscDesc));
  return response.data;
};
