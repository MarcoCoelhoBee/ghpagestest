import React, { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import {
  MoviePosterImage,
  MoviePosterList,
  PrevMovieList,
} from "../../pages/HomeStyle";
import { IAwardDTO } from "../../utils/interfaces/IAwardDTO";
import { AwardAndRequestPosterStyle } from "../common/AwardAndRequestPosterStyle";
import ParticipantIdentification from "../participant/ParticipantIdentification";
import MoviePosterContent from "./MoviePosterContent";

interface Props {
  awards: Array<IAwardDTO> | undefined;
}

const PreviousAwards = (props: Props) => {
  const { awards /*reference, events*/ } = props;

  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  return (
    <>
      <div className='col d-flex align-items-start pt-100px'>
        <PrevMovieList>
          <MoviePosterList className='align-items-end' {...events} ref={ref}>
            {awards?.map((award, index) => {
              return (
                <AwardAndRequestPosterStyle
                  key={"awards-" + index}
                  className='text-center me-3'
                >
                  <p>{award.name}</p>
                  <a
                    href={award.movie?.trailer ?? "#"}
                    target={award.movie !== null ? '_blank' : '_self' }
                    className='text-light text-decoration-none'
                    rel='noreferrer'
                  >
                    <MoviePosterImage className='mb-2 movie-poster-image'>
                      <div className={"image-and-info " + (award.movieId === null && "unknown-award-movie")}>
                        {award.movieId !== null ? (
                          <MoviePosterContent award={award} />
                        ) : (
                          "?"
                        )}
                      </div>
                    </MoviePosterImage>
                  </a>
                  {award.movieId !== null && <ParticipantIdentification participant={award.participant} />}
                </AwardAndRequestPosterStyle>
              );
            })}
          </MoviePosterList>
        </PrevMovieList>
      </div>
    </>
  );
};

export default PreviousAwards;
