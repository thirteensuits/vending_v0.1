import React, {useState, useEffect} from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import Mint from '../functions/Mint'
import themala from './images/themala.gif';
import {Link} from "react-router-dom";


function Product1() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
  },[])

  return (
    <div class="borders">
      <h2 class="top" style={{textAlign: "center"}}><b>TheMala</b></h2>
        <div style={{textAlign: "center"}}>
        <br></br>
        <img src={themala} style={{width: "80%"}}/>
        <br></br>
        <br></br>
        PRICE: <b>1.0 WEMIX</b>
        <br></br>
        <br></br>
        <Provider store={store}>
          <Mint />
        </Provider>
        <br></br>
        <Link to="/#top">
          <button className="lognBtn" style={{paddingLeft: 20, paddingRight: 20}}>Back</button>
        </Link>
        </div>
      </div>


  );
}

export default Product1;