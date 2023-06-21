import { Spinner } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import logo from "../assets/images/Bee_Logo_v2.png";


interface Props {
  isLoading: boolean;
}

const Loader = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  color: white;
  padding: 25px;

  .spinner-border {
    width: 100px;
    height: 100px;
    max-width: 100vw;
    max-height: 100vw;
  }

  img {
    max-height: 155px;
  }
  p {
    font-size: 58px;
    line-height: 60px;
    font-style: italic;
    font-weight: 900;
  }

  position: absolute;
  z-index: -1;

  & ~ .opacity-0 {
    opacity: 0;
  }

  &, & ~ div {
    transition: all linear 0.5s;
  }


  .spinner-yellow {
    color: #FFF830;
  }
`;

const MainLayout = (props:Props) => {
  const {isLoading} = props;

  return (
    <>
      <Loader className={isLoading ?  "" : "d-none"}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img className="img-fluid" alt="" src={logo} />
          <p className="mt-3 mb-5">Bee Watching</p>
        </div>
        <Spinner animation="border" className="spinner-yellow" />
      </Loader>
      <div className={isLoading ? "opacity-0" : ""}>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
