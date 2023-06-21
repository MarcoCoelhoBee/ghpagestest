import axios from "axios";
import { moviesRequestedURL } from "../utils/constants/apiPaths";

export const getRequestedMovies = async (
  count: number,
  sortBy: string,
  sortAscDesc: string
) => {
  const response = await axios.get(
    moviesRequestedURL(count, sortBy, sortAscDesc)
  );

  return response;
};
