import React from 'react';

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        {/* Content of the pop-up */}
        <h3>Please put info</h3>
        <br></br>
        Credit Card Number:
        <br></br>
        <input
        type="text"
        placeholder="Type something..."
      />
        <br></br>
        <br></br>
        Name:
        <br></br>
        <input
        type="text"
        placeholder="Type something..."
      />
        <br></br>
        <br></br>
        <button onClick={onClose}>Submit</button>
      </div>
    </div>
  );
};

export default Popup;