import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import MovieOfWeek from "../components/home/MovieOfWeek";
import PreviousMovies from "../components/home/PreviousMovies";
import Navbar from "../components/navbar/Navbar";
import {
  getFeaturedByIdSeason,
  getFeaturedSeason,
} from "../services/SeasonsApiService";
import { IMovieParticipantSeasons } from "../utils/interfaces/IMovieParticipantSeasons";
import { ISeason } from "../utils/interfaces/ISeason";
import { ContainerWBackground, MainCol, MainRow } from "./HomeStyle";

interface Props {
  seasonId: string | undefined;
  setLoadingHandler: (state: boolean) => void;
}

const Home = (props: Props) => {
  const { seasonId, setLoadingHandler } = props;
  const [season, setSeason] = useState<ISeason | undefined>(undefined);
  const [movieParticipantSeasons, setMovieParticipantSeasons] =
    useState<Array<IMovieParticipantSeasons>>();
  const [currentMovie, setCurrentMovie] = useState<IMovieParticipantSeasons>();

  useEffect(() => {
    const season =
      seasonId === undefined
        ? getFeaturedSeason()
        : getFeaturedByIdSeason(+seasonId);
    season
      .then((response) => {
        setSeason(response);
        setMovieParticipantSeasons(response.movieParticipantSeasons);
        setCurrentMovie(response.movieParticipantSeasons[0]);
        setLoadingHandler(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [seasonId]);

  /* imageurl={currentMovie?.movie.movieBackground} */
  return (
    <ContainerWBackground imageurl={currentMovie?.movie.movieBackground} fluid>
      <MainRow className='flex-column justify-content-between'>
        <MainCol>
          <Container>
            <Navbar
              seasonName={season?.name}
              currentPage={seasonId === undefined ? "home" : "seasons"}
              currentContent={seasonId === undefined ? season?.id : seasonId}
            />{" "}
            {/* "Page" component, in the "element" property */}
          </Container>
        </MainCol>
        {!season ||
        (season &&
          (!movieParticipantSeasons ||
            movieParticipantSeasons.length === 0)) ? (
          <h3 className='d-flex justify-content-center align-items-center'>
            No movies yet!
          </h3>
        ) : (
          <>
            {currentMovie !== undefined && (
              <MovieOfWeek
                movie={currentMovie.movie}
                participant={currentMovie.participant}
              />
            )}
            <PreviousMovies movieParticipantSeasons={movieParticipantSeasons} />
          </>
        )}
      </MainRow>
    </ContainerWBackground>
  );
};

export default Home;
