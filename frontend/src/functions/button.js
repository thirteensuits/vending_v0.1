import React, { useEffect, useState } from "react";
import Web3 from "web3";
import img from '../components/images/algebra_logo.png';
import { useDispatch, useSelector } from "react-redux";

const MintNFTButton = () => {
  const [feedback, setFeedback] = useState(``);
  const contractAddress = '0x6Ed54FE36B6c9afB0A91F9452c92ED8b813F62F5';
  const privateKey = 'cff4eca2752c7a4d65f0d011f2527662780aaf85616a30451fa380bc903031d2';

  const [showButton, setShowButton] = useState(false);

  const ABI = [{
		"inputs": [
			{
				"internalType": "address",
				"name": "_to",
				"type": "address"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	}];

  const handleMintNFT = async () => {
    // Create a new web3 instance with a provider (e.g., MetaMask)
    const web3 = new Web3(`https://api.sepolia.kroma.network/`);
    const account = web3.eth.accounts.privateKeyToAccount(privateKey).address;
    const contract = new web3.eth.Contract(ABI, contractAddress);

    try {

    // Prepare the transaction data
    const txCount = await web3.eth.getTransactionCount(account);
    setFeedback(
      `Processing, plx wait...`
    );
    const txObject = {
      from: account,
      to: contractAddress,
      value: web3.utils.toHex(10),
      gasLimit: web3.utils.toHex(285000),
      gasPrice: web3.utils.toHex(await web3.eth.getGasPrice()),
      nonce: web3.utils.toHex(txCount),
      data: contract.methods.mint(account).encodeABI(),
    };
    

      // Sign the transaction using the private key
      const signedTx = await web3.eth.accounts.signTransaction(txObject, privateKey);

      // Send the signed transaction to the Ethereum network
      const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

      console.log("Transaction successful:", receipt);
      setFeedback(
        `WOW, you got it`
      );
      setShowButton(true);
    } catch (error) {
      console.error("Error signing or sending transaction:", error);
      setFeedback("Sorry, something went wrong, plx try again...");
    }
  };


  return (
    <div>
      <button className="lognBtn" style={{paddingLeft: 20, paddingRight: 20}}onClick={handleMintNFT}>Submit</button>&nbsp;&nbsp; <img src={img} width="125px" />
      <br></br>
        <br></br>
        <b style={{color: "red"}}>{feedback}</b>
    </div>
  );
};

export default MintNFTButton;