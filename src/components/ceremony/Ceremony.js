import React from 'react';
import sky from '../../images/sky.jpeg';
import './Ceremony.css';

const textStyle = {
  color: 'rgb(58, 57, 57)',
  fontFamily: 'CalifornianFB',
  fontSize: '50px',
  position: 'absolute',
  top: '10px',
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
  width: 'auto', 
  height: '80vh', 
  justifyContent: 'center',
  backgroundImage: `url(${sky})`,
  backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};

const imageStyle= {
  eight: 'auto', 
  maxWidth:'100vw', 
  maxHeight:'75vh', 
  display: 'block', 
  marginLeft: 'auto', 
  marginRight: 'auto',
  padding: '20px'
  // padding: 'calc(15px + (20 - 15) * ((100vw - 300px) / (1600 - 300)))'
}

const Ceremony = () => {
  return (
    <section style={containerStyle} id='ceremony'>
      <div>
        {/* <img
          style={imageStyle}
          src={sky}
          alt="sky"
        />
        <div style={textStyle}>The Ceremony</div> */}
      </div>
    </section>
  );
}

export default Ceremony;