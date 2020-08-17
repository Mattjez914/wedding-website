import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import sky from '../../images/sky.jpeg';
import './Ceremony.css';

const textStyle = {
  color: 'rgb(58, 57, 57)',
  fontFamily: 'CalifornianFB',
  fontSize: '50px',
  position: 'absolute',
  left: '20px',
  zIndex: 2
};

const infoStyle = {
  color: 'rgb(58, 57, 57)',
  fontFamily: 'CalifornianFB',
  fontSize: '50px',
  position: 'relative',
  zIndex: 2
};

const containerStyle = {
  position: 'relative',
  width: '25em'
};

const Ceremony = () => {
  return (
    <section className="row d-flex justify-content-center" id='ceremony'>
      <div className="vh-100">
        <img
          className="h-75"
          src={sky}
          alt="sky"
        />
      </div>
      {/* <div>
        <p style={textStyle}>Ceremony</p>
      </div> */}
      {/* <div style={containerStyle}>
      <Parallax
        offsetYMin={-100}
        offsetYMax={100}
      >
        <p style={textOneStyle}>Ceremony</p>
      </Parallax>
      <Parallax
        offsetYMin={-10}
        offsetYMax={50}
      >
        <p style={textTwoStyle}>Test</p>
      </Parallax>
      </div> */}
    </section>
  );
}

export default Ceremony;