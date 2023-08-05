import React, {useState, useEffect} from "react";
import img from './images/algebra_logo.png';
import Kroma from './images/Kroma.png';
import { NavHashLink as Link } from 'react-router-hash-link';

function Merchant() {

    return (
        <div class="borders">
            <br></br>
            <br></br>
            <h2 style={{textAlign: "center"}}>
            <b>MERCHANT PLATFORM</b>
            <br></br>
            <br></br>
            <img src={img} style={{width: '15%'}}/>
            </h2>
            <br></br>
            <div style={{textAlign: "center"}}>
            <br></br>
            <Link className="nav-link" to='/addproduct'><button style={{padding: 5, paddingLeft: 20, paddingRight: 20}}>Add Products</button></Link>
            <br></br>
            <Link className="nav-link" to='/manageproduct'><button style={{padding: 5, paddingLeft: 20, paddingRight: 20}}>Manage Products</button></Link>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <a href="https://kroma.network/"><img src={Kroma} style={{width: '35px', paddingTop:"1px"}}/></a>
            <br></br>
            <br></br>
            <p style={{textAlign: "center"}}><i>operational on kroma</i></p>
            </div>
          </div>
      );
    }

export default Merchant;
