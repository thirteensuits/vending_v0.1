import React, { useState } from 'react';
import MintNFTButton2 from './button2';

const Credit2 = () => {
  const [popupClosed, setPopupClosed] = useState(false);

  const openWebsiteA = () => {
    // Open "Website A" in a popup window
    const popup = window.open(
      'https://gateway.1shop.tw/send-Payment.php?token=15c3abf71ca4f34d95cf22e4cb4aa1172e54e5c8',
      '_blank',
      'width=800,height=600'
    );

    // Add an event listener to detect when the popup is closed
    const checkPopupClosed = () => {
      if (popup && popup.closed) {
        // Update the state to indicate that the popup is closed
        setPopupClosed(true);
      } else {
        // If the popup is not closed, check again after a short delay
        setTimeout(checkPopupClosed, 1000);
      }
    };

    // Start checking for popup closure
    checkPopupClosed();
  };

  return (
    <div>
      {!popupClosed && ( // Only render if the popup is not closed
        <button onClick={openWebsiteA} className="lognBtn" style={{ paddingLeft: 20, paddingRight: 20 }}>
          Purchase using Credit Card
        </button>
      )}
      {popupClosed && <p><b>Transaction Status:</b><br></br><b style={{color: "red"}}>Success!! Plx press Confirm to complete 👇🏻</b><br></br><br></br><MintNFTButton2 className="lognBtn" style={{ paddingLeft: 20, paddingRight: 20 }}></MintNFTButton2></p>}
    </div>
  );
};

export default Credit2;
