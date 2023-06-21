import { Col, Image } from "react-bootstrap";
import { GETRATINGIMAGE } from "../../utils/constants/constants";

interface Props {
  pref: string; // imdb, rotten, meta
  value: string | number; // string so it can include % and stuff
}

const Ratings = (props: Props) => {
  const { pref, value } = props;
  return (
    <Col className='removeFlexSizing'>
      <Image
        className='d-block m-auto mb-1'
        style={{ height: "20px" }}
        src={GETRATINGIMAGE(pref)}
        alt=''
      />
      <p className='info'>{value}</p>
    </Col>
  );
};

export default Ratings;
