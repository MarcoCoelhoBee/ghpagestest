import React, { useRef } from "react";
import { Col, Row } from "react-bootstrap";
import { ClockFill } from "react-bootstrap-icons";
import { useDraggable } from "react-use-draggable-scroll";
import {
  MainCol,
  MoviePoster,
  MoviePosterImage,
  MoviePosterImageHover,
  MoviePosterList,
  PrevMovieList,
} from "../../pages/HomeStyle";
import { IMovieParticipantSeasons } from "../../utils/interfaces/IMovieParticipantSeasons";
import { genresText } from "../../utils/utils";
import ParticipantIdentification from "../participant/ParticipantIdentification";
import Ratings from "./Ratings";
import ScrollPreviousMovies from "./ScrollPreviousMovies";

interface Props {
  movieParticipantSeasons: Array<IMovieParticipantSeasons> | undefined;
  // reference: React.MutableRefObject<HTMLInputElement>;
  // events: { onMouseDown: (e: React.MouseEvent<HTMLInputElement>) => void; };
}

const PreviousMovies = (props: Props) => {
  const { movieParticipantSeasons /*reference, events*/ } = props;

  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  return (
    <MainCol className="gradientBackground">
      <Row className="flex-column">
        <Col className=" z-index-1">
          <h5 className="text-center mb-2 mt-2 fst-italic fw-bold">
            Previous Movies
          </h5>
        </Col>
        <PrevMovieList>
          {/*<ScrollPreviousMovies scrollRef={ref} />*/}

          <MoviePosterList {...events} ref={ref}>
            {movieParticipantSeasons?.map((mps, index) => {
              return (
                <MoviePoster key={"mps-" + index} className="text-center me-3">
                  <a
                    href={mps.movie.trailer}
                    target="_blank"
                    className="text-light text-decoration-none"
                    rel="noreferrer"
                  >
                    <MoviePosterImage className="mb-2">
                      <div className="image-and-info">
                        <img src={mps.movie.image} alt="" />
                        <MoviePosterImageHover className="movie-poster-image-hover">
                          <h2 className="title mt-4">{mps.movie.title}</h2>
                          <div>
                            <div className="info">{mps.movie.year}</div>
                            <div
                              className="info"
                              dangerouslySetInnerHTML={{
                                __html: genresText(mps.movie.genres),
                              }}
                            ></div>
                            <div className="d-flex justify-content-center align-items-center info">
                              <ClockFill className="me-2" />
                              {mps.movie.runtime.slice(0, -3)}
                            </div>
                          </div>
                          <div className="ratings info mt-3 mb-1">
                            <Ratings pref="imdb" value={mps.movie.imdbRating} />
                            <Ratings
                              pref="rotten"
                              value={mps.movie.rottenTomatoesRating + "%"}
                            />
                            <Ratings
                              pref="meta"
                              value={mps.movie.metaRating + "%"}
                            />
                          </div>
                        </MoviePosterImageHover>
                      </div>
                    </MoviePosterImage>
                  </a>
                  <ParticipantIdentification participant={mps.participant} />
                </MoviePoster>
              );
            })}
          </MoviePosterList>
        </PrevMovieList>
      </Row>
    </MainCol>
  );
};

export default PreviousMovies;
