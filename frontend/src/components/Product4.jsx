import React, {useState, useEffect} from "react";
import { Provider } from "react-redux";
import store4 from "../redux/store4";
import Mint4 from '../functions/Mint4'
import think from './images/thinking.jpg';
import {Link} from "react-router-dom";


function Product4() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
  },[])

  return (
    <div class="borders">
      <h2 class="top" style={{textAlign: "center"}}><b>Harold</b></h2>
        <div style={{textAlign: "center"}}>
        <br></br>
        <img src={think} style={{width: "80%"}}/>
        <br></br>
        <br></br>
        PRICE: <b>1.0 WEMIX</b>
        <br></br>
        <br></br>
        <Provider store={store4}>
          <Mint4 />
        </Provider>
        </div>
      </div>


  );
}

export default Product4;
