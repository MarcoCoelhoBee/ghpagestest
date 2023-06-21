import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import bg_awards from "../assets/images/background/background_awards.png";
import PreviousAwards from "../components/award/PreviousAwards";
import Navbar from "../components/navbar/Navbar";
import { getAwardsBySeasonId } from "../services/AwardsApiService";
import { IAwardsDTO } from "../utils/interfaces/IAwardDTO";
import { ContainerWBackground, MainCol, MainRow } from "./HomeStyle";

interface Props {
  setLoadingHandler: (state: boolean) => void;
}

const Award = (props: Props) => {
  const { setLoadingHandler } = props;
  const { seasonId } = useParams();
  const [awards, setAwards] = useState<IAwardsDTO>();

  useEffect(() => {
    if (seasonId !== undefined) {
      getAwardsBySeasonId(seasonId)
        .then((response) => {
          setAwards(response.data);
          setLoadingHandler(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <ContainerWBackground imageurl={bg_awards} fluid>
      <MainRow className='flex-column justify-content-between'>
        <MainCol>
          <Container>
            <Navbar
              seasonName={awards?.season?.name}
              currentPage='awards'
              currentContent={seasonId}
            />{" "}
          </Container>
        </MainCol>
        {awards == null ||
        awards === undefined ||
        awards?.awards?.length === 0 ? (
          <h3 className='d-flex justify-content-center align-items-center'>
            No awards yet!
          </h3>
        ) : (
          <PreviousAwards awards={awards.awards} />
        )}
      </MainRow>
    </ContainerWBackground>
  );
};

export default Award;
