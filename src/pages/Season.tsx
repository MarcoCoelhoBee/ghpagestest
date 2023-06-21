import { useParams } from "react-router-dom";
import Home from "./Home";

interface Props {
  setLoadingHandler: (state: boolean) => void;
}
const Season = (props: Props) => {
  const { setLoadingHandler } = props;
  const { seasonId } = useParams();
  return <Home seasonId={seasonId} setLoadingHandler={setLoadingHandler} />;
};

export default Season;
