import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const ContainerWBackground = styled(Container)`
  background-image: url(${(props) => props.imageurl});
  background-size: cover;
  background-position: top center;
  position: relative;

  min-height: 100vh;

  &:before {
    content: "";
    background-color: rgba(0, 0, 0, 0.33);
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
  }

  > div {
    color: white;
    position: relative;
  }
`;

export const ColWBackground = styled(Col)`
  background-image: url(${(props) => props.bgImage});
`;

export const PrevMovieList = styled(Col)`
  position: relative;
  overflow: hidden;

  padding-top: 10px;
  padding-bottom: 10px;
`;

export const MoviePosterList = styled.div`
  display: flex;
  overflow-x: hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (min-width: 1200px) {
    > :first-child {
      margin-left: 150px;
    }
    > :last-child {
      margin-right: 150px !important;
    }
    @media (min-width: 1600px) {
      > :first-child {
        margin-left: 300px;
      }
      > :last-child {
        margin-right: 300px !important;
      }
    }
  }
`;
export const MoviePoster = styled.div`
  width: 8.5rem;
  cursor: pointer;
  flex: 0 0 7.7%;
  position: relative;

  .image-and-info {
    position: relative;
    border-radius: 6px;
  }
`;

export const MainRow = styled(Row)`
  min-height: 100vh;
`;

export const MainCol = styled(Col)`
  font-size: 0.9em;
  flex: 0 0 0;

  &.movie-of-week .removeFlexSizing {
    flex: 0 0 0;

    &:not(:last-child) {
      padding-left: 21px;
      padding-right: 20px;
    }
  }

  &.gradientBackground {
    background-color: #00000024;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      #1a1b1b1c 5%,
      #1a1b1b5c 15%,
      #1a1b1bd6 33%,
      #1a1b1b 100%
    );
    .z-index-1 {
      z-index: 1;
    }
  }
`;
export const MoviePosterImage = styled.div`
  &,
  .image-and-info {
    width: 140px; /*200*/
    height: 201.6px; /*288*/
    overflow: hidden;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    display: block;
  }

  &:hover {
    .image-and-info > img {
      filter: blur(4px);
    }
    .movie-poster-image-hover {
      display: flex;
    }
  }
`;

export const MoviePosterImageHover = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  flex-direction: column;
  justify-content: space-around;

  .info {
    font-size: small;
    font-weight: bold;
  }

  .title {
    font-weight: bolder;
    font-style: italic;
    font-size: 16px;
  }
  .ratings {
    display: flex;
    justify-content: center;
    align-items: center;

    .removeFlexSizing.col {
      flex: 0 0 0;
      margin-left: 8px;
      margin-right: 8px;
    }
  }
`;
