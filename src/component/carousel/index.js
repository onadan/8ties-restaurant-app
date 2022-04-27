import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img from "../../image/navbar.jpg";
import img2 from "../../image/slider.jpg";
import img3 from "../../image/pexels-maria-orlova-4916142.jpg";
const Carousels = () => {
  return (
    <Carousel fade variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 h-25"
          src={img}
          alt="First slide"
          height="100px"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-25"
          src={img2}
          alt="First slide"
          height="100"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-25"
          src={img3}
          alt="First slide"
          height="100px"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
