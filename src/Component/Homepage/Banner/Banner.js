import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../Drone-img/banner/New Project (6).jpg"
import img2 from "../../../Drone-img/banner/New Project (7).jpg"
import img3 from "../../../Drone-img/banner/New Project (8).jpg"

const Banner = () => {
  return (


    
    <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3></h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img2}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={img3}
        alt="Third slide"
      />
  
      <Carousel.Caption>
      
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  );
};

export default Banner;
