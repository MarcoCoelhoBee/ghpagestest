import { ClockFill } from "react-bootstrap-icons";
import { MoviePosterImageHover } from "../../pages/HomeStyle";
import { IAwardDTO } from "../../utils/interfaces/IAwardDTO";
import { genresText } from "../../utils/utils";
import Ratings from "../home/Ratings";

interface Props {
  award: IAwardDTO;
}

const MoviePosterContent = (props: Props) => {
  const { award } = props;
  return (
    <>
      <img src={award.movie.image} alt='' />
      <MoviePosterImageHover className='movie-poster-image-hover'>
        <h2 className='title mt-4'>{award.movie.title}</h2>
        <div>
          <div className='info'>{award.movie.year}</div>
          <div
            className='info'
            dangerouslySetInnerHTML={{
              __html: genresText(award.movie.genres),
            }}
          ></div>
          <div className='d-flex justify-content-center align-items-center info'>
            <ClockFill className='me-2' />
            {award.movie.runtime.slice(0, -3)}
          </div>
        </div>
        <div className='ratings info mt-3 mb-1'>
          <Ratings pref='imdb' value={award.movie.imdbRating} />
          <Ratings
            pref='rotten'
            value={award.movie.rottenTomatoesRating + "%"}
          />
          <Ratings pref='meta' value={award.movie.metaRating + "%"} />
        </div>
      </MoviePosterImageHover>
    </>
  );
};

export default MoviePosterContent;
