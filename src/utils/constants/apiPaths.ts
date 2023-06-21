const URL = `http://localhost:5001/api/`;

/*
 * Participants
 */

const CONTROLLERPARTICIPANTS = `participants/`;
export const participantsGetImageByIdURL = (id: Number) =>
  URL + CONTROLLERPARTICIPANTS + id + "/image?refreshedAt=" + Date.now();

/*
 * Seasons
 */
const CONTROLLERSEASONS = `seasons/`;
export const seasonsGetByIdURL = (
  id: Number,
  sortBy: string,
  sortAscDesc: string
) =>
  URL + CONTROLLERSEASONS + id + `?sortBy=${sortBy}&sortAscDesc=${sortAscDesc}`;
export const seasonsGetFeaturedURL = URL + CONTROLLERSEASONS + "featured";
export const seasonsGetFeaturedWithIdURL = (id: number) =>
  URL + CONTROLLERSEASONS + "featured/" + id;
export const seasonsGetListURL = (
  count: Number,
  sortBy: string,
  sortAscDesc: string
) =>
  URL +
  CONTROLLERSEASONS +
  `list?count=${count}&sortBy=${sortBy}&sortAscDesc=${sortAscDesc}`;

/*
 * Movies
 */
const CONTROLLERMOVIES = `movies/`;

export const moviesGetAllURL = (
  count: Number,
  sortBy: string,
  sortAscDesc: string
) =>
  URL +
  CONTROLLERMOVIES +
  `?count=${count}&sortBy=${sortBy}&sortAscDesc=${sortAscDesc}`;

export const moviesCurrentMovie = (id: Number) => URL + CONTROLLERMOVIES + id;

export const moviesRequestedURL = (
  count: Number,
  sortBy: string,
  sortAscDesc: string
) =>
  URL +
  CONTROLLERMOVIES +
  `Requested?count=${count}&sortBy=${sortBy}&sortAscDesc=${sortAscDesc}`;

  
/*
 *  Awards
 */
const CONTROLLERAWARDS = `awards/`;

export const awardsGetBySeasonURL = (seasonId: Number) : string => URL + CONTROLLERAWARDS + seasonId;