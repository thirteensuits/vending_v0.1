import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect3 } from "../redux/blockchain/blockchainActions3";
import PhotoUploadForm from './PhotoUploader';

const LoginAdd = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [feedback, setFeedback] = useState(``);
  const [name, setName] = useState('');
  const [nick, setNick] = useState('');
  const [cost, setCost] = useState('');
  const [CONFIG, SET_CONFIG] = useState({
    PRODUCT_FACTORY: "",
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

  const deploy = () => {
    let gasLimit = 18500000;
    let totalGasLimit = String(gasLimit);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Deploying, plx wait...`);
    blockchain.smartContract.methods
      .deploySBT(name, nick, '', cost, blockchain.account)
      .send({
        gasLimit: String(totalGasLimit),
        from: blockchain.account,
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
        <button style={{padding: 5, paddingLeft: 20, paddingRight: 20}} onClick={() => {dispatch(connect3())}}>Connect your Wallet to Login</button>
        ) : (
          <>
        <p><b style={{color: "red"}}>Login Successful!!</b></p>
        Your Address:
        <br></br>
        <b>{blockchain.account}</b>
        <br></br>
        <br></br>
        <b>Name of Your Product:</b>
        <br></br>
        <input value={name} onChange={(e) => setName(e.target.value)}></input>
        <br></br>
        <br></br>
        <b>Nickname of Your Product:</b>
        <br></br>
        <input value={nick} onChange={(e) => setNick(e.target.value)}></input>
        <br></br>
        <br></br>
        <b>Cost of Your Product:</b>
        <br></br>
        <input value={cost} onChange={(e) => setCost(e.target.value)}></input>&nbsp;<b>Wei</b>
        <br></br>
        <br></br>
        <b>Upload a Picture of Your Product:</b>
        <br></br>
        <PhotoUploadForm />
        <br></br>
        <br></br>
        <button style={{padding: 5, paddingLeft: 20, paddingRight: 20}} onClick={() => {dispatch(deploy())}}>Deploy your Product!!</button>
        <br></br>
        <br></br>
        <b style={{color: "red"}}>{feedback}</b>
        </>
    )}

      </div>
  );
}

export default LoginAdd;