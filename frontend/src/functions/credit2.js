import React, { useState } from 'react';
import MintNFTButton2 from './button2';

const Credit2 = () => {
  const [popupOpened, setPopupOpened] = useState(false);
  const [popupClosed, setPopupClosed] = useState(false);

  const openWebsiteA = () => {
    // Open "Website A" in a new window using a direct link
    const popup = window.open(
      'https://gateway.1shop.tw/send-Payment.php?token=97662ae30a55ea9d53f77234a2663bcd84df4405',
      '_blank'
    );
    setPopupOpened(true);
    // Add an event listener to detect when the new window is closed
    const checkPopupClosed = () => {
      if (popup && popup.closed) {
        // Update the state to indicate that the new window is closed
        setPopupClosed(true);
      } else {
        // If the new window is not closed, check again after a short delay
        setTimeout(checkPopupClosed, 1000);
      }
    };
    // Start checking for new window closure
    checkPopupClosed();
  };

  return (
    <div>
      {!popupOpened && (
        <button
          onClick={openWebsiteA}
          className="lognBtn"
          style={{ paddingLeft: 20, paddingRight: 20 }}
        >
          Purchase using Credit Card
        </button>
      )}
      {popupClosed && (
        <p>
          <b>Transaction Status:</b>
          <br />
          <b style={{ color: 'red' }}>Success!! Plx press Confirm to complete 👇🏻</b>
          <br />
          <br />
          <MintNFTButton2
            className="lognBtn"
            style={{ paddingLeft: 20, paddingRight: 20 }}
          ></MintNFTButton2>
        </p>
      )}
    </div>
  );
};

export default Credit2;
