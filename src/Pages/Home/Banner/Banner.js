import React from "react";
import "./Banner.css";
import img1 from '../../../images/banner/bannerImg1.png'
import img2 from '../../../images/banner/bannerImg2.png'
import img3 from '../../../images/banner/bannerImg3.png'

import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className=" banner-img d-block w-100 "
          src={img1}
          alt="First slide"
        />
        <div className="banner-head text-white ">
          <h1 className="banner-heading">
            We Create <span className="text-warning">Experiences</span>
          </h1>
        </div>
        <Carousel.Caption>
          <h4>UNITED STATES</h4>
          <h1>Irresistible New York</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 banner-img"
          src={img2}
          alt="First slide"
        />
        <div className="banner-head text-white">
          <h1 className="banner-heading ">
            We Create <span className="text-warning">Experiences</span>
          </h1>
        </div>
        <Carousel.Caption>
          <h4>UNITED Kingdom</h4>
          <h1>Theatrical London</h1>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 banner-img"
          src={img3}
          alt="First slide"
        />
        <div className="banner-head text-white">
          <h1 className="banner-heading ">
            We Create <span className="text-warning">Experiences</span>
          </h1>
        </div>
        <Carousel.Caption>
          <h4>France</h4>
          <h1>Magnificent Paris</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
