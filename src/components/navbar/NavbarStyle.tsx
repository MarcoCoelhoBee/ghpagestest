import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

export const NavbarStyle = styled(Navbar)`
  // When on a big screen
  @media (min-width: 992px) {
    display: flex;
  }

  color: white;
  flex-wrap: wrap;
  font-size: 1.1em;
  align-items: start;
  justify-content: space-between;

  > .container {
    align-items: start;
  }
  .logoStyle {
    display: flex;
  }

  .collapse {
    flex-direction: row-reverse;
  }

  .bee-logo {
    padding-top: 7px;
  }
  .padding-left-7px {
    padding-left: 7px;
  }

`;

export const NavbarDestinations = styled(Nav)`
  display: flex;
  color: white;
  align-items: center;
  justify-content: end;
  font-size: larger;

  // When on a small screen
  @media (max-width: 992px) {
    display: flex;
    align-items: end;
  }

  .navbarElement {
    margin-right: 15px;
    color: white;
    &.active,
    &:hover {
      color: rgb(240, 255, 36);
    }

    &:hover {
    cursor: pointer;
    transition: color 0.3s ease;
    }
  }

  .seasonButton {
    cursor: pointer;
    position: relative;
  }

  .dropdown {
    &.active {
    color: rgb(240, 255, 36);
    }
  }
  .seasonButton:hover,
  .seasonButton.active {
    color: rgb(240, 255, 36);
  }

  .seasonItem {
    color: white;
    font-size: 0.8em;
    &.active {
      
    color: rgb(240, 255, 36);
    }
  }

  .seasonDropdown {
    position: absolute;
  }

  .seasonItem:hover {
    cursor: pointer;
    color: rgb(240, 255, 36);
  }
`;

export default NavbarStyle;
