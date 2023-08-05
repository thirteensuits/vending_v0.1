import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";

const Mint = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [feedback, setFeedback] = useState(``);
  const [CONFIG, SET_CONFIG] = useState({
    PRODUCT_ADDRESS_1: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = 10;
    let gasLimit = 285000;
    let totalCostWei = String(cost);
    let totalGasLimit = String(gasLimit);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Purchasing, plx wait...`);
    blockchain.smartContract.methods
      .mint(blockchain.account)
      .send({
        gasLimit: String(totalGasLimit),
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong, plx try again...");
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, you got it`
        );
      });
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);



  return (
      <div style={{textAlign: 'center'}}>
        {blockchain.account === "" ||
    blockchain.smartContract === null ? (
        <button style={{padding: 5, paddingLeft: 20, paddingRight: 20}} onClick={() => {dispatch(connect())}}>Connect your Wallet to Purchase Original</button>
        ) : (
          <>
        <button style={{padding: 5, paddingLeft: 20, paddingRight: 20}} onClick={() => {dispatch(claimNFTs)}}>Purchase Original!!</button>
        <br></br>
        <br></br>
        <b>Transaction Status:</b>
        <br></br>
        <b style={{color: "red"}}>{feedback}</b>
        </>
    )}

      </div>
  );
}

export default Mint;