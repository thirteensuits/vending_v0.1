import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect3 } from "../redux/blockchain/blockchainActions3";

const Mint3 = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [CONFIG, SET_CONFIG] = useState({
    PRODUCT_ADDRESS_3: "",
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
    let cost = 1000000000000000;
    let gasLimit = 285000;
    let totalCostWei = String(cost);
    let totalGasLimit = String(gasLimit);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    blockchain.smartContract.methods
      .mint(blockchain.account, 1)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.PRODUCT_ADDRESS_3,
        from: blockchain.account,
        value: totalCostWei,
      })
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
        <button style={{padding: 5, paddingLeft: 20, paddingRight: 20}} onClick={() => {dispatch(connect3())}}>Connect your Wallet to Purchase the Branch</button>
        ) : (
          <>
        <button style={{padding: 5, paddingLeft: 20, paddingRight: 20}} onClick={() => {dispatch(claimNFTs)}}>Purchase the Branch!!</button>
        </>
    )}

      </div>
  );
}

export default Mint3;
