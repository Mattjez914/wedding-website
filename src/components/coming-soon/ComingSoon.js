import React from 'react';

const titleStyle = {
  color: 'rgb(58, 57, 57)',
  // color: 'white',
  fontFamily: 'CalifornianFB',
  fontSize: 'calc(35px + (55 - 35) * ((100vw - 300px) / (1600 - 300)))',
  alignItems: 'center',
  display: 'flex'
}

const infoStyle = {
  color: 'black',
  // color: 'white',
  fontFamily: 'CalifornianFB',
  fontSize: 'calc(12px + (25 - 12) * ((100vw - 300px) / (1600 - 300)))',
  alignItems: 'center',
  display: 'flex'
};

const containerStyle = {
  margin: '0',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'calc(250px + (500 - 250) * ((100vw - 300px) / (1600 - 300)))',
  height: 'auto',
  backgroundColor: 'rgba(255,255,255,0.9)',
  border: 'calc(3px + (4 - 3) * ((100vw - 300px) / (1600 - 300))) solid black',
  borderStyle: 'double'
}

const ComingSoon = () => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center flex-column align-items-center" style={containerStyle}>
        <div style={titleStyle}>Coming Soon</div>
        <div style={infoStyle}>Page Content will be populated at a later date</div>
      </div>
    </React.Fragment>
  );
}

export default ComingSoon;