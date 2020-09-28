import React from 'react';

const titleStyle = {
  color: 'rgb(58, 57, 57)',
  // color: 'white',
  fontFamily: 'CalifornianFB',
  fontSize: 'calc(30px + (50 - 30) * ((100vw - 300px) / (1600 - 300)))',
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
  backgroundColor: 'rgba(255,255,255,0.5)',
  border: 'calc(3px + (4 - 3) * ((100vw - 300px) / (1600 - 300))) solid black',
  borderStyle: 'double'
}

const Ceremony = () => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center flex-column align-items-center" style={containerStyle}>
        <div style={titleStyle}>The Ceremony</div>
        <div style={infoStyle}>The Immaculata at</div>
        <div style={infoStyle}>University of San Diego</div>
        <div style={infoStyle}>11:00 AM</div>
        <div style={infoStyle}>5998 Alcala Park</div>
        <div style={infoStyle}>San Diego, CA 92110</div>
      </div>
    </React.Fragment>
  );
}

export default Ceremony;