import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { connect2 } from "../redux/blockchain/blockchainActions2";
import { connect3 } from "../redux/blockchain/blockchainActions3";
import Original from '../components/images/Original.png';
import Seaweed from '../components/images/Seaweed.png';
import Web3 from 'web3';


const Login2 = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [feedback, setFeedback] = useState(``);
  const [feedback2, setFeedback2] = useState(``);
  const [balance, setBalance] = useState(0);
  const [balance2, setBalance2] = useState(0);
  const Address1 = '0x6Ed54FE36B6c9afB0A91F9452c92ED8b813F62F5';
  const Address2 = "0xf5c2C88D0275612D6e02f2C594C17a0B7527C501";
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

  const getBalance = async () => {
    try {
      const web3 = new Web3(`https://api.sepolia.kroma.network/`);
      const balanceWei = await web3.eth.getBalance(Address1);
      setBalance(balanceWei);
    } catch (err) {
      console.error('Error fetching balance:', err);
    }
  };

  const getBalance2 = async () => {
    try {
      const web3 = new Web3(`https://api.sepolia.kroma.network/`);
      const balanceWei = await web3.eth.getBalance(Address2);
      setBalance2(balanceWei);
    } catch (err) {
      console.error('Error fetching balance:', err);
    }
  };

  const withdraw = () => {
    let gasLimit = 285000;
    let totalGasLimit = String(gasLimit);
    setFeedback(`Claiming, plx wait...`);
    blockchain.smartContract.methods
      .withdraw()
      .send({
        gasLimit: String(totalGasLimit),
        from: blockchain.account,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback(`Sorry, something went wrong, plx try again`);
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
        <button style={{padding: 5, paddingLeft: 20, paddingRight: 20}} onClick={() => {dispatch(connect())}}>Connect your Wallet to Login</button>
        ) : (
          <>
        <p><b style={{color: "red"}}>Login Successful!!</b></p>
        Your Address:
        <br></br>
        <b>{blockchain.account}</b>
        <br></br>
        <section id ="hook">
          <div class="thick">
          <img src={Original} style={{width: "50%"}}/>
          <br></br>
          <br></br>
          <b>Original</b>
          <br></br>
          <br></br>
          <button style={{padding: 5, paddingLeft: 20, paddingRight: 20}} onClick={getBalance}>View Performance</button>
          <br></br>
          <br></br>
          {balance !== 0 && <p> <b>Sales Volume: </b><b style={{color: "red"}}>{balance} wei</b></p>}
          <button style={{padding: 5, paddingLeft: 20, paddingRight: 20}} onClick={() => {dispatch(withdraw)}}>Claim Earnings</button>
          <br></br>
          <b style={{color: "red"}}>{feedback}</b>
          <br></br>
          <button style={{padding: 5, paddingLeft: 20, paddingRight: 20}}>Edit Product</button>
          <br></br>
          <br></br>
          <button style={{padding: 5, paddingLeft: 20, paddingRight: 20}}>Delete Product</button>
          </div>
          <div class="thick">
          <img src={Seaweed} style={{width: "50%"}}/>
          <br></br>
          <br></br>
          <b>Seaweed</b>
          <br></br>
          <br></br>
          <button style={{padding: 5, paddingLeft: 20, paddingRight: 20}} onClick={getBalance2}>View Performance</button>
          <br></br>
          <br></br>
          {balance2 !== 0 && <p> <b>Sales Volume: </b><b style={{color: "red"}}>{balance2} wei</b></p>}
          <button style={{padding: 5, paddingLeft: 20, paddingRight: 20}} onClick={() => {dispatch(withdraw)}}>Claim Earnings</button>
          <br></br>
          <b style={{color: "red"}}>{feedback2}</b>
          <br></br>
          <button style={{padding: 5, paddingLeft: 20, paddingRight: 20}}>Edit Product</button>
          <br></br>
          <br></br>
          <button style={{padding: 5, paddingLeft: 20, paddingRight: 20}}>Delete Product</button>
          </div>
        </section>
        </>
    )}

      </div>
  );
}

export default Login2;