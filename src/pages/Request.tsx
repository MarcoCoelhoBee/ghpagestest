import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import bg_requests from "../assets/images/background/background_requests.png";
import Navbar from "../components/navbar/Navbar";
import PreviousMovies from "../components/request/PreviousMovies";
import { getRequestedMovies } from "../services/MoviesApiService";
import { IMovieMPS } from "../utils/interfaces/IMovieMPS";
import { ContainerWBackground, MainCol, MainRow } from "./HomeStyle";

interface Props {
  setLoadingHandler: (state: boolean) => void;
}
const Request = (props: Props) => {
  const { setLoadingHandler } = props;
  const [movies, setMovies] = useState<Array<IMovieMPS>>([]);

  useEffect(() => {
    getRequestedMovies(0, "watchedDate", "desc")
      .then((response) => {
        setMovies(response.data);
        setLoadingHandler(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <ContainerWBackground imageurl={bg_requests} fluid>
      <MainRow className='flex-column justify-content-between'>
        <MainCol>
          <Container>
            <Navbar
              seasonName={"Requests"}
              currentPage='requests'
              currentContent={undefined}
            />{" "}
          </Container>
        </MainCol>
        {movies == null || movies.length === 0 ? (
          <h3 className='d-flex justify-content-center align-items-center'>
            No requested movies yet!
          </h3>
        ) : (
          <PreviousMovies movies={movies} />
        )}
      </MainRow>
    </ContainerWBackground>
  );
};

export default Request;
