export const BASE64PREFIX = "data:image/png;base64,";

export const GETRATINGIMAGE = (pref: string): string => {
  if (pref === "imdb")
    return "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IMDb_Logo_Square.svg/2048px-IMDb_Logo_Square.svg.png";
  else if (pref === "rotten")
    return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/757px-Rotten_Tomatoes.svg.png";
  else if (pref === "meta")
    return "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Metacritic.svg/2048px-Metacritic.svg.png";
  return "";
};
