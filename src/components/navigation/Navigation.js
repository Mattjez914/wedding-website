import React from 'react';
import { Link } from "react-router-dom";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navigation.css';

const fixedStyle = {
  zIndex: 1000,
  backgroundColor: 'rgb(255, 255, 255)',
  width: '100%'
};

const headerStyle = {
  display: 'grid',
  gridTemplateColumns: '100px auto 100px',
  gridTemplateRows: '40px auto',
  justifyContent: 'space-between'
};

const dateStyle = {
  gridRowStart: 1,
  gridColumnStart: 1,
  gridColumnEnd: 'col2-start',
  justifySelf: 'start',
  margin: '20px 20px',
  fontSize: 'calc(15px + (20 - 15) * ((100vw - 300px) / (1600 - 300)))',
  color: 'rgb(58, 57, 57)',
  fontFamily: 'CalifornianFB'
};

const placeStyle = {
  gridRowStart: 1,
  gridColumnStart: 3,
  gridColumnEnd: 'end',
  justifySelf: 'end',
  margin: '20px 20px',
  fontSize: 'calc(15px + (20 - 15) * ((100vw - 300px) / (1600 - 300)))',
  color: 'rgb(58, 57, 57)',
  fontFamily: 'CalifornianFB'
};

const lineStyle = {
  border: '1.5px solid rgb(58, 57, 57)',
  margin: '0px'
}

const Navigation = React.forwardRef((props,ref) => {
  return (
    <div ref={ref} style={fixedStyle}>
      <div style={headerStyle}>
        <h4 style={dateStyle}>April 10, 2020</h4>
        <h4 style={placeStyle}>San Diego, CA</h4>
        <h1 className="title"><Link to="/">BAILEY &amp; MATTHEW</Link></h1>
      </div>
      <hr style={lineStyle}/>
      <ul className="nav">
        <li>
          <Link to="/ceremony">Ceremony</Link>
        </li>
        <li>
          <Link to="/reception">Reception</Link>
        </li>
        <li>
          <Link to="/accommodations">Accommodations</Link>
        </li>
        <li>
          <Link to="/reigstry">Registry</Link>
        </li>
        <li>
          <Link to="/rsvp">RSVP</Link>
        </li>
      </ul>
      <hr style={lineStyle}/>
    </div> 
  );
})

export default Navigation;