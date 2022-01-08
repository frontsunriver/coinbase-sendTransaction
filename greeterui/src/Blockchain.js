import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

const abi = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "_greeting",
          "type": "string"
        }
      ],
      "name": "setGreet",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function",
      "signature": "0x9698086b"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getGreet",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function",
      "signature": "0xd705a4b5"
    }
  ];

const blockAddresss = '0xb708924B9617d40329131a08DAF3e86BdCc96371';
const greetContract = web3.eth.contract(abi).at(blockAddresss);

export {greetContract};
