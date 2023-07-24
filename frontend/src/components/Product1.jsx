import React, {useState, useEffect} from "react";
import { Provider } from "react-redux";
import store from "../redux/store";
import Mint from '../functions/Mint'
import Original from './images/Original.png';
import logo from './images/logo.png';

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
      <h2 class="top" style={{textAlign: "center"}}>
        <b>Original</b>
        <br></br>
        <img src={logo} style={{ width: "15%", paddingTop: 15, paddingBottom: 10}}/>
        </h2>
        <div style={{textAlign: "center"}}>
        <img src={Original} style={{width: "50%"}}/>
        <br></br>
        <br></br>
        PRICE: <b>1.0 WEMIX</b>
        <br></br>
        <br></br>
        <Provider store={store}>
          <Mint />
        </Provider>
        <br></br>
        💡Make sure to set 'Max base fee' to 101 GWEI
        <br></br>
        and 'Priority Fee' to 100 GWEI. (<a href="https://2865074520-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FHLCRdDJi6FQHil3cJbtq%2Fuploads%2F7KPhgMJkrQDuRiPfBgFe%2F1.0.2%20gas%20fee%20%E1%84%87%E1%85%A7%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC.png?alt=media&token=b9d79f39-c6e7-4a02-bdf2-272ede08cacc">pic</a>)
        </div>
      </div>
  );
}

export default Product1;
