import { Col, Row } from "react-bootstrap";
import { ClockFill, PlayFill } from "react-bootstrap-icons";
import { MainCol } from "../../pages/HomeStyle";
import { IMovie } from "../../utils/interfaces/IMovie";
import { IParticipant } from "../../utils/interfaces/IParticipant";
import { genresText } from "../../utils/utils";
import ParticipantIdentification from "../participant/ParticipantIdentification";
import Ratings from "./Ratings";

interface Props {
  movie: IMovie;
  participant: IParticipant;
}

const MovieOfWeek = (props: Props) => {
  const { movie, participant } = props;
  return (
    <MainCol className='movie-of-week'>
      <Row className='flex-column align-items-center'>
        <Col md={12} lg={4} className='text-center'>
          <Row className='flex-column'>
            <Col className='mb-2'>
              <h3 className='fst-italic fw-bolder'>{movie.title}</h3>
            </Col>
            <Col className='mb-3'>
              <Row className='justify-content-center align-items-center'>
                <Col xs={3} className='text-end'>
                  {movie.year}
                </Col>
                <Col
                  xs={4}
                  dangerouslySetInnerHTML={{ __html: genresText(movie.genres) }}
                ></Col>
                <Col xs={3} className='d-flex align-items-center'>
                  <ClockFill className='me-2' />
                  {movie.runtime.slice(0, -3)}
                </Col>
              </Row>
            </Col>
            <Col>
              <Row className='justify-content-center font-size-small'>
                <Ratings pref='imdb' value={movie.imdbRating} />
                <Ratings
                  pref='rotten'
                  value={movie.rottenTomatoesRating + "%"}
                />
                <Ratings pref='meta' value={movie.metaRating + "%"} />
                <Col className='removeFlexSizing'>
                  <a
                    className='text-light text-decoration-none'
                    href={movie.trailer}
                    rel='noreferrer'
                    target='_BLANK'
                  >
                    <div>
                      <PlayFill size={23} className='d-block m-auto' />
                      Trailer
                    </div>
                  </a>
                </Col>
              </Row>
            </Col>
            <Col className='mb-5'>
              <ParticipantIdentification participant={participant} />
            </Col>
          </Row>
        </Col>
      </Row>
    </MainCol>
  );
};

export default MovieOfWeek;
