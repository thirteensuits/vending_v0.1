//SPDX-License-Identifier: MIT

pragma solidity ^0.8.19;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/IERC721Enumerable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/utils/Strings.sol";

contract ProductSBT is ERC721Enumerable {

    using Strings for uint256;
    string public baseURI;
    string public baseExtension = ".json";
    uint256 public cost;
    bool public paused = false;
    string public _name;
    string public _symbol;
    address public controller = msg.sender;
    address public _master;

    constructor(
        string memory _initName,
        string memory _initSymbol,
        string memory _initBaseURI,
        uint256 _cost,
        address _initMaster
    ) 
    ERC721(_name, _symbol) {
        setCost(_cost);
        setBaseURI(_initBaseURI);
        _master = _initMaster;
        _name = _initName;
        _symbol = _initSymbol;
    }

    modifier onlyOwner() {
        require(msg.sender == controller || msg.sender == _master, "You are not the owner");
        _;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    function mint() public payable {
        uint256 supply = totalSupply();
        require(!paused);
        require(msg.value >= cost);
            _safeMint(msg.sender, supply + 1);
    }

    function walletOfOwner(address _owner)
        public
        view
        returns (uint256[] memory)
    {
        uint256 ownerTokenCount = balanceOf(_owner);
        uint256[] memory tokenIds = new uint256[](ownerTokenCount);
        for (uint256 i; i < ownerTokenCount; i++) {
            tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokenIds;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        string memory currentBaseURI = _baseURI();
        return
            bytes(currentBaseURI).length > 0
                ? string(
                    abi.encodePacked(
                        currentBaseURI,
                        tokenId.toString(),
                        baseExtension
                    )
                )
                : "";
    }

    //only owner
    function setCost(uint256 _newCost) public onlyOwner {
        cost = _newCost;
    }

    function setName(string memory newName) public onlyOwner {
        _name = newName;
    }

    function setSymbol(string memory newSymbol) public onlyOwner {
        _symbol = newSymbol;
    }

    function name() public view override returns (string memory) {
        return _name;
    }

    function symbol() public view override returns (string memory) {
        return _symbol;
    }

    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public onlyOwner override(ERC721, IERC721) {
        _transfer(from, to, tokenId);
    }

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory data
    ) public onlyOwner override(ERC721, IERC721) {
        _safeTransfer(from, to, tokenId, data);
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function setBaseExtension(string memory _newBaseExtension)
        public
        onlyOwner
    {
        baseExtension = _newBaseExtension;
    }

    function pause() public onlyOwner {
        paused = true;
    }

    function unpause() public onlyOwner {
        paused = false;
    }

    function withdraw() public payable onlyOwner {
        (bool success, ) = payable(msg.sender).call{
            value: address(this).balance
        }("");
        require(success);
    }
}
