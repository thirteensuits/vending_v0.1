import React, {useState, useEffect} from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import Mint from '../functions/Mint'
import Original from './images/Original.png';
import logo from './images/logo.png';
import Kroma from './images/Kroma.png';
import Credit from '../functions/credit';




function Product1() {

  return (
    <div class="borders">
      <h2 class="top" style={{textAlign: "center"}}>
        <b>Original</b>
        <br></br>
        <img src={logo} style={{ width: "15%", paddingTop: 15, paddingBottom: 10}}/>
        </h2>
        <div style={{textAlign: "center"}}>
        <img src={Original} style={{width: "50%"}}/>
        <br></br>
        <br></br>
        PRICE: <b>10 wei</b>
        <br></br>
        <br></br>
        <Provider store={store}>
          <Mint />
        </Provider>
        <br></br>
        <Credit/>
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

export default Product1;
