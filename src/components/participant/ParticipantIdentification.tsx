import { Col, Image, Row } from "react-bootstrap";
import default_image_coral from "../../assets/images/default_participant_coral.png";
import { participantsGetImageByIdURL } from "../../utils/constants/apiPaths";
import { IParticipant } from "../../utils/interfaces/IParticipant";

interface Props {
  participant: IParticipant | undefined;
}

const ParticipantIdentification = ({ participant }: Props) => {
  return (
    <Row className='flex-column'>
      <Col>
        <Image
          roundedCircle
          style={{ height: "30px" }}
          src={
            participant?.image
              ? participantsGetImageByIdURL(participant?.id)
              : default_image_coral
          }
          alt=''
        />
      </Col>
      <Col className='mt-1'>{participant?.name}</Col>
    </Row>
  );
};

export default ParticipantIdentification;
