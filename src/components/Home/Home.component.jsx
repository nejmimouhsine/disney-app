import React from "react";
import styled from "styled-components";

import ImageSlider from "../ImageSlider/ImageSlider.component";
import Viewers from "../Viewers/Viewers.component";

import HomeBackground from "../../assets/images/home-background.png";

const Home = (props) => {
  return (
    <Container>
      <ImageSlider />
      <Viewers />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: calc(3.5vw + 5px);

  &:after {
    content: "";
    background-image: url(${HomeBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: center;
    position: absolute;
    inset: 0;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
