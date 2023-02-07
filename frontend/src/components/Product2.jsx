import React, {useState, useEffect} from "react";
import { Provider } from "react-redux";
import store2 from "../redux/store2";
import Mint2 from '../functions/Mint2'
import donut from './images/donuts.jpg';
import {Link} from "react-router-dom";


function Product2() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
  },[])

  return (
    <div class="borders">
      <h2 class="top" style={{textAlign: "center"}}><b>Donuts</b></h2>
        <div style={{textAlign: "center"}}>
        <br></br>
        <img src={donut} style={{width: "80%"}}/>
        <br></br>
        <br></br>
        PRICE: <b>1.0 WEMIX</b>
        <br></br>
        <br></br>
        <Provider store={store2}>
          <Mint2 />
        </Provider>
        <br></br>
        <Link to="/" onClick={() => {window.scroll(0, 0);}}> 
          <button className="lognBtn" style={{paddingLeft: 20, paddingRight: 20}}>Back</button>
        </Link>
        </div>
      </div>


  );
}

export default Product2;
