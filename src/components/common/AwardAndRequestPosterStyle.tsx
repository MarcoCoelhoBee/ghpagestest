import { styled } from "styled-components";
import { MoviePoster } from "../../pages/HomeStyle";

export const AwardAndRequestPosterStyle = styled(MoviePoster)`
  flex-basis: 11%;
  .movie-poster-image,
  .movie-poster-image .image-and-info {
    width: 100%;
    height: auto;
    &.unknown-award-movie {
      background-color: rgba(39, 45, 47, 0.5);
      color: rgba(255, 255, 255, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 210px;
    }
  }
`;
