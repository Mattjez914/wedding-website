import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import cover from '../../images/cover.jpeg';
import beach from '../../images/beach.jpeg';
import ring from '../../images/ring.jpeg';
import './SlideShow.css';

const SlideShow = () => {
  return (
    <section id='home'>
      <div className="row d-flex justify-content-center">
      <Carousel>
        <Carousel.Item className="vh-100" style={{position: "relative"}}>
          <img
            className="h-75"
            src={cover}
            alt="Home"
          />
          <p style={{position: "absolute"}}>Testing</p>
        </Carousel.Item>
        <Carousel.Item className="vh-100">
          <img
            className="h-75"
            src={beach}
            alt="beach"
          />
        </Carousel.Item>
        <Carousel.Item className="vh-100">
          <img
            className="h-75"
            src={ring}
            alt="ring"
          />
        </Carousel.Item>
      </Carousel>
      </div>

      {/* <div className="cover"></div> */}
    </section>
  );

}

export default SlideShow;