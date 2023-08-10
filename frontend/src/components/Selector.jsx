import React, {useState, useEffect} from "react";
import { Provider } from "react-redux";
import Kroma from './images/Kroma.png';
import {Link} from "react-router-dom";
import Select from '../functions/Select'
import store from "../redux/store";



function Selector() {

  return (
  <div>
     <section id ="top"></section>
      <div class="borders">
        <br></br>
        <br></br>
        <h2 style={{textAlign: "center"}}>
        <b>SELECT YOUR STORE</b></h2>
        <br></br>
        <br></br>
        <Provider store={store}>
        <Select></Select>
        </Provider>
        <br></br>
        <br></br>
        <br></br>

        <div style={{textAlign: "center"}}>
        <a href="https://kroma.network/"><img src={Kroma} style={{width: '35px', paddingTop:"1px"}}/></a>
        <br></br>
        <br></br>
        <p style={{textAlign: "center"}}><i>operational on kroma</i></p>
        </div>
      </div>
      </div>
  );
}

export default Selector;
