import React, {useState, useEffect} from "react";
import { Provider } from "react-redux";
import store3 from "../redux/store3";
import Mint3 from '../functions/Mint3'
import shirt from './images/shirt.jpg';
import {Link} from "react-router-dom";


function Product3() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
  },[])

  return (
    <div class="borders">
      <h2 class="top" style={{textAlign: "center"}}><b>Shirt</b></h2>
        <div style={{textAlign: "center"}}>
        <br></br>
        <img src={shirt} style={{width: "80%"}}/>
        <br></br>
        <br></br>
        PRICE: <b>1.0 WEMIX</b>
        <br></br>
        <br></br>
        <Provider store={store3}>
          <Mint3 />
        </Provider>
        <br></br>
        <Link to="/#top">
          <button className="lognBtn" style={{paddingLeft: 20, paddingRight: 20}}>Back</button>
        </Link>
        </div>
      </div>


  );
}

export default Product3;