import React from 'react';
import tent from '../../images/tent.jpeg';
import './Reception.css';

const containerStyle = {
  width: 'auto', 
  height: '75vh', 
  justifyContent: 'center'
};

const imageStyle= {
  height: 'auto', 
  maxWidth:'100vw', 
  maxHeight:'75vh', 
  display: 'block', 
  marginLeft: 'auto', 
  marginRight: 'auto',
  padding: '20px'
  // padding: 'calc(15px + (20 - 15) * ((100vw - 300px) / (1600 - 300)))'
}

const Reception = () => {
  return (
    <section style={containerStyle} id='reception'>
      <div>
        <img
          style={imageStyle}
          src={tent}
          alt="sky"
        />
      </div>
    </section>
  );
}

export default Reception;