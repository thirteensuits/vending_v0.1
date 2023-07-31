import React, {useState, useEffect} from "react";
import QR from './images/QR1.png';
import logo from './images/logo.png';
import {Link} from "react-router-dom";

function QR1() {

  return (
      <div class="borders">
        <h2 class="top" style={{textAlign: "center"}}>
        <b>Original</b>
        <br></br>
        <img src={logo} style={{ width: "15%", paddingTop: 10}}/>
        </h2>
        <div style={{textAlign: "center"}}>
        <p>Scan the QR Code below</p>
        <img src={QR} style={{width: "40%"}}/>
        <br></br>
        <br></br>
        <Link to="/P1" onClick={() => {window.scroll(0, 0);}}> 
          <button className="lognBtn" style={{paddingLeft: 20, paddingRight: 20}}>Purchase Page</button>
        </Link>
        <br></br>
        <br></br>
        <Link to="/" onClick={() => {window.scroll(0, 0);}}> 
          <button className="lognBtn" style={{paddingLeft: 20, paddingRight: 20}}>Back</button>
        </Link>
        </div>
      </div>
  );
}

export default QR1;
