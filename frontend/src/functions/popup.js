import React from 'react';
import MintNFTButton from './button'
import img from '../components/images/algebra_logo.png';



const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        {/* Content of the pop-up */}
        <b>Please provide info</b>
        <br></br>
        <br></br>
        Credit Card Number:
        <br></br>
        <input type="text"/>
        <br></br>
        <br></br>
        Name:
        <br></br>
        <input type="text"/>
        <br></br>
        <br></br>
        <MintNFTButton onClick={onClose} />
        <br></br>
        <button onClick={onClose} className="lognBtn" style={{paddingLeft: 20, paddingRight: 20}}>Close</button>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};

export default Popup;