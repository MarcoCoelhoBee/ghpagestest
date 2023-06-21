import { useEffect, useState } from "react";
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import img_bee_logo from "../../assets/images/Bee_Logo_v2.png";
import img_lettering from "../../assets/images/Bee_Watching_lettering.png";
import { getSeasons } from "../../services/SeasonsApiService";
import { ISeasonNameId } from "../../utils/interfaces/ISeasonNameId";
import NavbarStyle, { NavbarDestinations } from "./NavbarStyle";

interface Props {
  seasonName: string | undefined;
  currentPage: string;
  currentContent: string | number | undefined;
}

const MyNavbar = (props: Props) => {
  const { seasonName, currentPage, currentContent } = props;
  const navigate = useNavigate();
  const [showSeasons, setShowSeasons] = useState(false);
  const [showAwards, setShowAwards] = useState(false);
  const [seasons, setSeasons] = useState<ISeasonNameId[]>([]);

  const sortBy = "name";
  const sortAscDesc = "desc";

  const setSeasonsHandler = () => {
    getSeasons(sortBy, sortAscDesc)
      .then((response) => {
        setSeasons(response || []);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    setSeasonsHandler();
  }, []);

  const handleSeasonClick = () => {
    setShowSeasons(!showSeasons);
    setShowAwards(false);
  };
  const handleAwardClick = () => {
    setShowAwards(!showAwards);
    setShowSeasons(false);
  };

  const changePageSeason = (seasonId: number) => {
    navigate(`/seasons/${seasonId}`);
  };
  /*const changePageAward = (seasonId: number) => {
    navigate(`/awards/${seasonId}`);
  };*/

  return (
    <NavbarStyle variant='dark' expand='lg' className="mt-2">
      <Container>
        <Navbar.Brand className='d-flex mt-1'>
          <img src={img_bee_logo} className="me-2 bee-logo" height={80} alt='logo' />
          <div>
            <img src={img_lettering} height={50} alt='logo' />
            <p className="padding-left-7px">{seasonName ?? "No available Seasons"}</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav' className='collapse mt-3'>
          <NavbarDestinations>
            <Nav.Link
              className={
                "navbarElement " + (currentPage === "home" ? "active" : "")
              }
              href='/'
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={
                "navbarElement " + (currentPage === "requests" ? "active" : "")
              }
              href='/requests'
            >
              Requests
            </Nav.Link>
            {currentContent !== undefined && (
              <Nav.Link
                className={
                  "navbarElement " + (currentPage === "awards" ? "active" : "")
                }
                href={`/awards/${currentContent}`}
              >
                Awards
              </Nav.Link>
            )}
            {/*<Dropdown className={"me-3 " + (currentPage === "awards" ? "active" : "")} onClick={handleAwardClick}>
              <span className='seasonButton'>
                Awards {showAwards ? <CaretUpFill /> : <CaretDownFill />}
              </span>
              {showAwards && (
                <div className='seasonDropdown'>
                  {seasons.length ? (
                    seasons.map((season, index) => (
                      <div
                        className={"seasonItem " + (currentPage === "awards" && currentContent !== undefined ? "active" : "")}
                        key={index}
                        onClick={() => changePageAward(season.id)}
                      >
                        {season.name}
                      </div>
                    ))
                  ) : (
                    <div className='seasonItem'>No awards available</div>
                  )}
                </div>
              )}
            </Dropdown>*/}
            <Dropdown
              className={currentPage === "seasons" ? "active" : ""}
              onClick={handleSeasonClick}
            >
              <span className='seasonButton mb-1'>
                Seasons {showSeasons ? <CaretUpFill /> : <CaretDownFill />}
              </span>
              {showSeasons && (
                <div className='seasonDropdown'>
                  {seasons?.length ? (
                    seasons.map((season, index) => (
                      <div
                        className={
                          "mt-1 seasonItem " +
                          ((currentPage === "seasons" ||
                            currentPage === "home") &&
                          (currentContent !== undefined && season.id == currentContent)
                            ? "active"
                            : "")
                        }
                        key={index}
                        onClick={() => changePageSeason(season.id)}
                      >
                        {season.name}
                      </div>
                    ))
                  ) : (
                    <div className='seasonItem'>No seasons available</div>
                  )}
                </div>
              )}
            </Dropdown>
          </NavbarDestinations>
        </Navbar.Collapse>
      </Container>
    </NavbarStyle>
  );
};

export default MyNavbar;
