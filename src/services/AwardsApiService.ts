import axios from "axios";
import { awardsGetBySeasonURL, moviesRequestedURL } from "../utils/constants/apiPaths";

export const getAwardsBySeasonId = async (seasonId: string) => {
  const response = await axios.get(
    awardsGetBySeasonURL(+seasonId)
  );

  return response;
};
