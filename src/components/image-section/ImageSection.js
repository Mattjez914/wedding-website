import React from 'react';

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