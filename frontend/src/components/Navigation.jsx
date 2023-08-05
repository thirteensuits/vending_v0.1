import React from "react";
import { NavLink } from "react-router-dom";
import img from './images/algebra_logo.png';
import { NavHashLink as Link } from 'react-router-hash-link';




function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-light" style={{backgroundColor: "#ebecf0"}}>
        <div className="container navbar_header">
          <NavLink className="image navbar-brand" to="/">
          <img src={img} width="150px" />
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to='/merchant'><button style={{padding: 5, paddingLeft: 20, paddingRight: 20}}>For Merchants</button></Link>
              </li>
              </ul>
              </div>
          </div>
      </nav>
    </div>
  );
}

export default Navigation;
