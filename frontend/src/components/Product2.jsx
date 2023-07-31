import React, {useState, useEffect} from "react";
import { Provider } from "react-redux";
import store2 from "../redux/store2";
import Mint2 from '../functions/Mint2'
import Seaweed from './images/Seaweed.png';
import logo from './images/logo.png';
import Popup from '../functions/popup';



function Product2() {
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },2000)
  },[])

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
          <button className="lognBtn" onClick={handleButtonClick} style={{paddingLeft: 20, paddingRight: 20}}>Purchase using Credit Card</button>
          {showPopup && <Popup onClose={handleClosePopup} />}
        </div>
      </div>
  );
}

export default Product2;
