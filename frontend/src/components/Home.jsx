import React, {useState, useEffect} from "react";
import themala from './images/themala.gif';
import think from './images/thinking.jpg';
import donut from './images/donuts.jpg';
import shirt from './images/shirt.jpg';
import {Link} from "react-router-dom";


function Home() {

  return (
  <div>
     <section id ="top"></section>
      <div class="borders">
        <h2 class="top" style={{textAlign: "center"}}><b>SELECT PRODUCT</b></h2>
        <section id ="hook">
          <div class="thick">
          <Link to="/QR1">
          <img src={themala} style={{width: "80%"}}/>
          <br></br>
          <br></br>
          <button className="lognBtn" style={{paddingLeft: 20, paddingRight: 20}}>TheMala</button>
          </Link>
          </div>
          <div class="thick">
          <Link to="/QR2">
          <img src={donut} style={{width: "80%"}}/>
          <br></br>
          <br></br>
          <button className="lognBtn" style={{paddingLeft: 20, paddingRight: 20}}>Donuts</button>
          </Link>
          </div>
          <div class="thick">
          <Link to="/QR3">
          <img src={shirt} style={{width: "80%"}}/>
          <br></br>
          <br></br>
          <button className="lognBtn" style={{paddingLeft: 20, paddingRight: 20}}>Shirt</button>
          </Link>
          </div>
          <div class="thick">
          <Link to="/QR4">
          <img src={think} style={{width: "80%"}}/>
          <br></br>
          <br></br>
          <button className="lognBtn" style={{paddingLeft: 20, paddingRight: 20}}>Harold</button>
          </Link>
          </div>
        </section>
      </div>
      </div>


  );
}

export default Home;