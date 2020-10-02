import React, { useState } from 'react';

const titleStyle = {
  color: 'rgb(58, 57, 57)',
  // color: 'white',
  margin: '35px',
  fontFamily: 'CalifornianFB',
  textDecoration: 'underline',
  fontSize: 'calc(35px + (55 - 35) * ((100vw - 300px) / (1600 - 300)))',
  alignItems: 'center',
  display: 'flex'
}

const sectionStyle = {
  color: 'rgb(58, 57, 57)',
  // color: 'white',
  fontFamily: 'CalifornianFB',
  fontSize: 'calc(20px + (30 - 20) * ((100vw - 300px) / (1600 - 300)))',
  fontWeight: 'bold'
}

const infoStyle = {
  color: 'black',
  // color: 'white',
  fontFamily: 'CalifornianFB',
  // fontSize: 'calc(12px + (25 - 12) * ((100vw - 300px) / (1600 - 300)))',
  // alignItems: 'center',
  // display: 'flex'
};

const containerStyle = {
  margin: '0',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '85vw',
  height: '70vh',
  backgroundColor: 'rgba(255,255,255,0.9)',
  border: 'calc(3px + (4 - 3) * ((100vw - 300px) / (1600 - 300))) solid black',
  borderStyle: 'double'
}

const formStyle = {
  width: '90%'
}

let guestInfo = [
  {
    first: 'Matthew',
    last: 'Stockton',
    attending: null
  },
  {
    first: 'Bailey',
    last: 'Advincula',
    attending: false
  }
]

const toBoolean = (string) => {
  return string === 'true' ? true : false
}

const Rsvp = () => {
  const [guests, setGuests] = useState(guestInfo);

  return(
    <React.Fragment>
      <div className="d-flex flex-column align-items-center overflow-auto" style={containerStyle}>
        <div style={titleStyle}>RSVP FORM</div>
        <form style={formStyle}>
          <h2 style={sectionStyle}>Guests</h2>
          {guests.map((guest,index) =>
            <React.Fragment key={guest.first} >
              <div className="form-group row justify-content-center"> 
                <div className="col-lg-5">
                  <label htmlFor="firstName" style={infoStyle}>First Name</label>
                  <input 
                    disabled type="text" value={guest.first} className="form-control" id="firstName" aria-describedby="first" 
                  />
                </div>
                <div className="col-lg-5">
                  <label htmlFor="lastName" style={infoStyle}>Last Name</label>
                  <input disabled type="text" value={guest.last} className="form-control" id="lastName" aria-describedby="last" />
                </div>
                <div className="col-lg-2">
                  <label htmlFor="attending" style={infoStyle}>Attending?</label>
                  <div className="custom-control custom-radio">
                    <input 
                      type="radio"
                      value="true" 
                      checked={guest.attending === true}
                      onChange={(e) => setGuests(guests.map((g,i) => i === index ? {...g, attending: toBoolean(e.target.value)} : g))}  
                      id={guest.first+'-radio1'} 
                      className="custom-control-input" 
                    />
                    <label className="custom-control-label" htmlFor={guest.first+'-radio1'}>Yes</label>
                  </div>
                  <div className="custom-control custom-radio">
                    <input 
                      type="radio"
                      value="false" 
                      checked={guest.attending === false} 
                      onChange={(e) => setGuests(guests.map((g,i) => i === index ? {...g, attending: toBoolean(e.target.value)} : g))} 
                      id={guest.first+'-radio2'} 
                      className="custom-control-input" 
                    />
                    <label className="custom-control-label" htmlFor={guest.first+'-radio2'}>No</label>
                  </div>
                </div>
              </div>
              <hr />
            </React.Fragment>
          )}
          {/* <button type="button" onClick={() => console.log(guests)}>See state</button> */}
          <h2 style={sectionStyle}>Contact Information</h2>
          <div className="form-group row justify-content-center">
            <div className="col-lg-6">
              <label htmlFor="phone" style={infoStyle}>Phone Number</label>
              <input type="tel" className="form-control" id="phone" />
            </div>
            <div className="col-lg-6">
              <label htmlFor="email" style={infoStyle}>Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
          </div>
          <h2 style={sectionStyle}>Address</h2>
          <div className="form-group row justify-content-center">
            <div className="col-lg-12">
              <label htmlFor="street" style={infoStyle}>Street Address</label>
              <input type="text" className="form-control" id="street" />
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <div className="col-lg-6">
              <label htmlFor="city" style={infoStyle}>City</label>
              <input type="text" className="form-control" id="city" />
            </div>
            <div className="col-lg-6">
              <label htmlFor="state" style={infoStyle}>State</label>
              <input type="text" className="form-control" id="state" />
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <div className="col-lg-6">
              <label htmlFor="zip" style={infoStyle}>Postal/Zip Code</label>
              <input type="text" className="form-control" id="zip" />
            </div>
            <div className="col-lg-6">
              <label htmlFor="country" style={infoStyle}>Country</label>
              <input type="text" className="form-control" id="country" />
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Rsvp;