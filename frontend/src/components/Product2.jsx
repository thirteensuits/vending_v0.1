import React, {useState, useEffect} from "react";
import { Provider } from "react-redux";
import store2 from "../redux/store2";
import Mint2 from '../functions/Mint2'
import Seaweed from './images/Seaweed.png';
import logo from './images/logo.png';
import Kroma from './images/Kroma.png';
import Credit2 from '../functions/credit2';



function Product2() {

  return (
    <div class="borders">
      <h2 class="top" style={{textAlign: "center"}}>
        <b>Seaweed</b>
      <br></br>
        <img src={logo} style={{ width: "15%", paddingTop: 15, paddingBottom: 10}}/>
        </h2>
        <div style={{textAlign: "center"}}>
        <img src={Seaweed} style={{width: "50%"}}/>
        <br></br>
        <br></br>
        PRICE: <b>10 wei</b>
        <br></br>
        <br></br>
        <Provider store={store2}>
          <Mint2 />
        </Provider>
        <br></br>
        <Credit2/>
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

export default Product2;
