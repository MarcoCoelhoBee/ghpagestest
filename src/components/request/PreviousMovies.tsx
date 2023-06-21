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
import { IMovieMPS } from "../../utils/interfaces/IMovieMPS";
import { genresText } from "../../utils/utils";
import Ratings from "../home/Ratings";
import ParticipantIdentification from "../participant/ParticipantIdentification";
import { AwardAndRequestPosterStyle } from "../common/AwardAndRequestPosterStyle";

interface Props {
  movies: Array<IMovieMPS> | undefined;
}

const PreviousMovies = (props: Props) => {
  const { movies /*reference, events*/ } = props;

  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  return (
    <>
      <div className="col d-flex align-items-center">
          <PrevMovieList>
            <MoviePosterList {...events} ref={ref}>
              {movies?.map((movie, index) => {
                return (
                  <AwardAndRequestPosterStyle
                    key={"mps-" + index}
                    className='text-center me-3'
                  >
                    <a
                      href={movie.trailer ?? ""}
                      target='_blank'
                      className='text-light text-decoration-none'
                      rel='noreferrer'
                    >
                      <MoviePosterImage className='mb-2 movie-poster-image'>
                        <div className='image-and-info'>
                          <img src={movie.image} alt='' />
                          <MoviePosterImageHover className='movie-poster-image-hover'>
                            <h2 className='title mt-4'>{movie.title}</h2>
                            <div>
                              <div className='info'>{movie.year}</div>
                              <div
                                className='info'
                                dangerouslySetInnerHTML={{
                                  __html: genresText(movie.genres),
                                }}
                              ></div>
                              <div className='d-flex justify-content-center align-items-center info'>
                                <ClockFill className='me-2' />
                                {movie.runtime.slice(0, -3)}
                              </div>
                            </div>
                            <div className='ratings info mt-3 mb-1'>
                              <Ratings pref='imdb' value={movie.imdbRating} />
                              <Ratings
                                pref='rotten'
                                value={movie.rottenTomatoesRating + "%"}
                              />
                              <Ratings
                                pref='meta'
                                value={movie.metaRating + "%"}
                              />
                            </div>
                          </MoviePosterImageHover>
                        </div>
                      </MoviePosterImage>
                    </a>
                    <ParticipantIdentification
                      participant={movie.movieParticipantSeasons[0].participant}
                    />
                  </AwardAndRequestPosterStyle>
                );
              })}
            </MoviePosterList>
          </PrevMovieList>
      </div>
      {/*<MainCol className='gradientBackground'>
        <Row className='flex-column'>
          <Col className=' z-index-1'>
            <h5 className='text-center mb-2 mt-2 fst-italic fw-bold'>
              Previous Movies
            </h5>
          </Col>
          <PrevMovieList>
            <MoviePosterList {...events} ref={ref}>
              {movies?.map((movie, index) => {
                return (
                  <MoviePoster
                    key={"mps-" + index}
                    className='text-center me-3'
                  >
                    <a
                      href={movie.trailer ?? ""}
                      target='_blank'
                      className='text-light text-decoration-none'
                      rel='noreferrer'
                    >
                      <MoviePosterImage className='mb-2'>
                        <div className='image-and-info'>
                          <img src={movie.image} alt='' />
                          <MoviePosterImageHover className='movie-poster-image-hover'>
                            <h2 className='title mt-4'>{movie.title}</h2>
                            <div>
                              <div className='info'>{movie.year}</div>
                              <div
                                className='info'
                                dangerouslySetInnerHTML={{
                                  __html: genresText(movie.genres),
                                }}
                              ></div>
                              <div className='d-flex justify-content-center align-items-center info'>
                                <ClockFill className='me-2' />
                                {movie.runtime.slice(0, -3)}
                              </div>
                            </div>
                            <div className='ratings info mt-3 mb-1'>
                              <Ratings pref='imdb' value={movie.imdbRating} />
                              <Ratings
                                pref='rotten'
                                value={movie.rottenTomatoesRating + "%"}
                              />
                              <Ratings
                                pref='meta'
                                value={movie.metaRating + "%"}
                              />
                            </div>
                          </MoviePosterImageHover>
                        </div>
                      </MoviePosterImage>
                    </a>
                    <ParticipantIdentification
                      participant={movie.movieParticipantSeasons[0].participant}
                    />
                  </MoviePoster>
                );
              })}
            </MoviePosterList>
          </PrevMovieList>
        </Row>
            </MainCol>*/}
    </>
  );
};

export default PreviousMovies;
