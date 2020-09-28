import React from 'react';

const titleStyle = {
  color: 'rgb(58, 57, 57)',
  // color: 'white',
  fontFamily: 'CalifornianFB',
  fontSize: 'calc(25px + (45 - 25) * ((100vw - 300px) / (1600 - 300)))',
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

const Reception = () => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center flex-column align-items-center" style={containerStyle}>
        <div style={titleStyle}>The Reception</div>
        <div style={infoStyle}>Flora</div>
        <div style={infoStyle}>3:00 PM</div>
        <div style={infoStyle}>1040 Seventh Avenue</div>
        <div style={infoStyle}>San Diego, CA 92101</div>
      </div>
    </React.Fragment>
  );
}

export default Reception;