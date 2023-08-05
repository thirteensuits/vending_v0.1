// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./NewProductSBT.sol";

contract ProductFactory {
    // Variables
    address public owner;
    address[] public deployedSBTs;
    mapping(address => uint256[]) public deployerToSBTs;

    // Events
    event SBTDeployed(address indexed deployer, address indexed nftAddress, uint256 indexed contractId);

    constructor() {
        owner = msg.sender;
    }

    // Modifier to ensure only the owner can access certain functions
    modifier onlyOwner() {
        require(msg.sender == owner, "You are not the owner");
        _;
    }

    function deploySBT(string memory name, string memory symbol, string memory BaseURI, uint256 cost, address master) external {
        ProductSBT nftContract = new ProductSBT(name, symbol, BaseURI, cost, master);
        deployedSBTs.push(address(nftContract));
        deployerToSBTs[msg.sender].push(deployedSBTs.length - 1);
        emit SBTDeployed(msg.sender, address(nftContract), deployedSBTs.length);
    }

    // Get the total number of deployed NFT contracts
    function getTotalDeployedSBTs() external view returns (uint256) {
        return deployedSBTs.length;
    }

    // Get the address of an NFT contract by its unique identifier
    function getSBTByIndex(uint256 index) external view returns (address) {
        require(index < deployedSBTs.length, "Invalid index");
        return deployedSBTs[index];
    }

        // Get the NFT addresses deployed by a specific deployer's address
    function getSBTsByDeployer(address deployer) external view returns (address[] memory) {
        uint256[] memory deployerSBTs = deployerToSBTs[deployer];
        address[] memory nftAddresses = new address[](deployerSBTs.length);
        for (uint256 i = 0; i < deployerSBTs.length; i++) {
            uint256 contractId = deployerSBTs[i];
            require(contractId < deployedSBTs.length, "Invalid contractId");
            nftAddresses[i] = deployedSBTs[contractId];
        }
        return nftAddresses;
    }

}
