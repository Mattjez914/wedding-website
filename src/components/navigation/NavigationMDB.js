import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink} from 'mdbreact';
import './Navigation.css';

const textStyle = {
  color: 'rgb(58, 57, 57)',
  fontFamily: 'CalifornianFB'
}
const NavigationMDB = () => {
  return (
    <header>
      <MDBNavbar color="white" className="text" fixed="top">
        <MDBNavbarBrand href="/">
          <strong>Navbar</strong>
        </MDBNavbarBrand>
        {/* {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
        <MDBCollapse isOpen={this.state.collapse} navbar> */}
          <MDBNavbarNav>
            <MDBNavItem>
              <AnchorLink offset='250' href='#ceremony'>Ceremony</AnchorLink>
            </MDBNavItem>
            <MDBNavItem>
              <AnchorLink offset='250' href='#reception'>Reception</AnchorLink>
            </MDBNavItem>
            <MDBNavItem>
              <AnchorLink offset='100' href='#experience'>Accommodations</AnchorLink>
            </MDBNavItem>
          </MDBNavbarNav>
        {/* </MDBCollapse> */}
      </MDBNavbar>
    </header>
    <nav className="navbar fixed-top">
       <div style={headerStyle}>
         <h4 style={dateStyle}>April 10, 2020</h4>
         <h4 style={placeStyle}>San Diego, CA</h4>
         <h1 className="title"><AnchorLink offset='400' href='#home'>BAILEY &amp; MATTHEW</AnchorLink></h1>
       </div>
       <hr style={lineStyle}/>
       <ul className="nav">
         <li>
           <AnchorLink offset='250' href='#ceremony'>Ceremony</AnchorLink>
         </li>
         <li>
           <AnchorLink offset='250' href='#reception'>Reception</AnchorLink>
         </li>
         <li>
           <AnchorLink offset='100' href='#experience'>Accommodations</AnchorLink>
         </li>
         <li>
           <AnchorLink offset='100' href=''>Registry</AnchorLink>
         </li>
         <li>
           <AnchorLink offset='100' href=''>RSVP</AnchorLink>
         </li>
       </ul>
       <hr style={lineStyle}/>
     </nav> 
  );

}

export default NavigationMDB;