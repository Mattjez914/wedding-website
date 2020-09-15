import React from 'react';

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


const ImageSection = (props) => {
  const containerStyle = {
    position: 'relative',
    width: 'auto', 
    height: `${props.height}vh`, 
    justifyContent: 'center',
    backgroundImage: `url(${props.image})`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <section style={containerStyle} id='ceremony'>
      <div>
        {props.children}
      </div>
    </section>
  );
}

export default ImageSection;