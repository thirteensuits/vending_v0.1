import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect3 } from "../redux/blockchain/blockchainActions3";
import demo from '../components/images/demo.png';
import Web3 from 'web3';


const LoginManage = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const [feedback, setFeedback] = useState(``);
  const [feedback2, setFeedback2] = useState(``);
  const [balance, setBalance] = useState(0);
  const [balance2, setBalance2] = useState(0);
  const [contract, setContract] = useState(['']);
  const [name, setName] = useState(['']);
  const [cost, setCost] = useState(['']);
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

  const getContract = async () => {
    try {
      const web3 = new Web3(`https://api.sepolia.kroma.network/`);
      const contractAddress = '0x0d8fADf81217d8d8F65409aC2168927537d1B520';
      const contractABI = [	{
        "inputs": [
          {
            "internalType": "address",
            "name": "deployer",
            "type": "address"
          }
        ],
        "name": "getSBTsByDeployer",
        "outputs": [
          {
            "internalType": "address[]",
            "name": "",
            "type": "address[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },]; 
      const contract = new web3.eth.Contract(contractABI, contractAddress);
      const balanceWei = await contract.methods.getSBTsByDeployer(blockchain.account).call();
      setContract(balanceWei);
      return Promise.resolve(); // Return a resolved Promise
    } catch (err) {
      console.error('Error fetching data:', err);
      return Promise.reject(err); // Return a rejected Promise
    }
  };

  const getName = async () => {
    try {
      const web3 = new Web3(`https://api.sepolia.kroma.network/`);
      const contractAddress2 = contract[0];
      const contractABI2 = [		{
        "inputs": [],
        "name": "_name",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },]; 
      const contract2 = new web3.eth.Contract(contractABI2, contractAddress2);
      const balanceWei2 = await contract2.methods._name().call();
      setName(balanceWei2);
      return Promise.resolve(); // Return a resolved Promise
    } catch (err) {
      console.error('Error fetching balance:', err);
    }
  };

  const getCost = async () => {
    try {
      const web3 = new Web3(`https://api.sepolia.kroma.network/`);
      const contractAddress2 = contract[0];
      const contractABI2 = [	{
        "inputs": [],
        "name": "cost",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },]; 
      const contract2 = new web3.eth.Contract(contractABI2, contractAddress2);
      const balanceWei2 = await contract2.methods.cost().call();
      setCost(balanceWei2);
      return Promise.resolve(); // Return a resolved Promise
    } catch (err) {
      console.error('Error fetching balance:', err);
    }
  };

  const fetchData = async () => {
    try {
      const contractData = await Promise.all([getContract(), getName(), getCost()]);
      // Contract data has been fetched and set
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  const getBalance = async () => {
    try {
      const web3 = new Web3(`https://api.sepolia.kroma.network/`);
      const balanceWei = await web3.eth.getBalance(contract[0]);
      setBalance(balanceWei);
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
        <button style={{padding: 5, paddingLeft: 20, paddingRight: 20}} onClick={() => {dispatch(connect3())}}>Connect your Wallet to Login</button>
        ) : (
          <>
        <p><b style={{color: "red"}}>Login Successful!!</b></p>
        Your Address:
        <br></br>
        <b>{blockchain.account}</b>
        <br></br>
        <br></br>
        <button style={{padding: 5, paddingLeft: 20, paddingRight: 20}} onClick={fetchData}>See Products</button>
        <br></br>
        <br></br>
        {contract[0] && ( // Check if contract[0] exists before rendering
          <>
            Product #1:
            <br></br>
            <b>{contract[0]}</b>
            <br></br>
            <br></br>
            Name:
            <br></br>
            <b>{name}</b> {/* You should replace this with the actual name */}
            <br></br>
            <br></br>
            Product Image:
            <br></br>
            <img src={demo} style={{width: "25%"}}/>
            <br></br>
            <br></br>
            Cost:
            <br></br>
            <b>{cost} wei</b> {/* You should replace this with the actual cost */}
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
            <br></br>
            <br></br>
          </>
                  )}

      </>
    )}
  </div>
);
}

export default LoginManage;