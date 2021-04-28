import React from "react";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import SliderBadging from "../../assets/images/slider-badging.jpg";
import SliderScale from "../../assets/images/slider-scale.jpg";
import SliderBadag from "../../assets/images/slider-badag.jpg";
import SliderScales from "../../assets/images/slider-scales.jpg";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div>
      <Carousel {...settings}>
        <Wrap>
          <a href="/home">
            <img src={SliderBadging} alt="" />
          </a>
        </Wrap>

        <Wrap>
          <a href="/home">
            <img src={SliderScale} alt="" />
          </a>
        </Wrap>

        <Wrap>
          <a href="/home">
            <img src={SliderBadag} alt="" />
          </a>
        </Wrap>

        <Wrap>
          <a href="/home">
            <img src={SliderScales} alt="" />
          </a>
        </Wrap>
      </Carousel>
    </div>
  );
};

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  & a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
      rgb(0 0 0 / 73%) 0 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
  }
`;

const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

export default ImageSlider;
