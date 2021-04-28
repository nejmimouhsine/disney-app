import React from "react";
import styled from "styled-components";

import ViewersDisney from "../../assets/images/viewers-disney.png";
import ViewersPixar from "../../assets/images/viewers-pixar.png";
import ViewersMarvel from "../../assets/images/viewers-marvel.png";
import ViewersStarWars from "../../assets/images/viewers-starwars.png";
import ViewersNational from "../../assets/images/viewers-national.png";

import DisneyViewerVideo from "../../assets/videos/1564674844-disney.mp4";
import PixarViewerVideo from "../../assets/videos/1564676714-pixar.mp4";
import MarvelViewerVideo from "../../assets/videos/1564676115-marvel.mp4";
import StarWarsViewerVideo from "../../assets/videos/1608229455-star-wars.mp4";
import NationalViewerVideo from "../../assets/videos/1564676296-national-geographic.mp4";

const Viewers = (props) => {
  return (
    <Container>
      <Wrap>
        <img src={ViewersDisney} alt="Disney" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={DisneyViewerVideo} type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
        <img src={ViewersPixar} alt="Pixar" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={PixarViewerVideo} type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
        <img src={ViewersMarvel} alt="Marvel" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={MarvelViewerVideo} type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
        <img src={ViewersStarWars} alt="StarWars" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={StarWarsViewerVideo} type="video/mp4" />
        </video>
      </Wrap>

      <Wrap>
        <img src={ViewersNational} alt="National" />
        <video autoPlay={true} loop={true} playsInline={true}>
          <source src={NationalViewerVideo} type="video/mp4" />
        </video>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    z-index: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
      rgb(0 0 0 / 72%) 0 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);

    video {
      opacity: 1;
    }
  }
`;

export default Viewers;
