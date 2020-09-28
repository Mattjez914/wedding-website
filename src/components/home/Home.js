import React from 'react';

const textHomeStyle = {
  color: 'rgb(58, 57, 57)',
  // color: 'white',
  fontFamily: 'CalifornianFB',
  fontSize: 'calc(20px + (40 - 20) * ((100vw - 300px) / (1600 - 300)))',
  marginBottom: '0px',
  paddingBottom: '0px',
  // backgroundColor: 'yellow',
  height: 'calc(20px + (40 - 20) * ((100vw - 300px) / (1600 - 300)))',
  alignItems: 'center',
  display: 'flex'
};

const textHomeSmallStyle = {
  color: 'rgb(58, 57, 57)',
  // color: 'white',
  fontFamily: 'CalifornianFB',
  fontSize: 'calc(12px + (25 - 12) * ((100vw - 300px) / (1600 - 300)))',
  marginTop: '0px',
  paddingTop: '0px',
  // backgroundColor: 'green',
  height: 'calc(13px + (25 - 13) * ((100vw - 300px) / (1600 - 300)))',
  alignItems: 'center',
  display: 'flex'
};

const containerHomeStyle = {
  position: 'absolute',
  right: '20px',
  bottom: '20px',
  width: 'auto',
  height: 'auto',
  padding: 'calc(3px + (4 - 3) * ((100vw - 300px) / (1600 - 300)))',
  backgroundColor: 'white',
  border: 'calc(3px + (4 - 3) * ((100vw - 300px) / (1600 - 300))) solid black',
  borderStyle: 'double'
}

const Home = () => {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center" style={containerHomeStyle}>
      <div style={textHomeStyle}>M &amp; B</div>
      <div style={textHomeSmallStyle}>Meant to Be</div>
    </div>
  );
}

export default Home;