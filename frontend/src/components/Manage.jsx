import React, {useState, useEffect} from "react";
import { Provider } from "react-redux";
import store4 from "../redux/store4";
import Login2 from '../functions/Login2'
import img from './images/algebra_logo.png';
import Kroma from './images/Kroma.png';

function Manage() {

    return (
        <div class="borders">
            <br></br>
            <br></br>
            <h2 style={{textAlign: "center"}}>
            <b>MANAGE YOUR PRODUCTS</b>
            <br></br>
            <br></br>
            <img src={img} style={{width: '15%'}}/>
            </h2>
            <br></br>
            <br></br>
            <div style={{textAlign: "center"}}>
            <Provider store={store4}>
              <Login2 />
            </Provider>
            <br></br>
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

export default Manage;
