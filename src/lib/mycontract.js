import Web3 from "web3";
export const web3 = new Web3(
    new Web3.providers.WebsocketProvider(
        "wss://sepolia.infura.io/ws/v3/068c8d5618704eeab1c8d5d6c920b8a2"
    )
);
// 지갑 등록
web3.eth.accounts.wallet.add("5982cfeafdae69a24051998df779b346505dadf2d09bf82d73cb1f37bb3bd4a7");
export const CONTRACT_ADDRESS = "0x890119753d7B2cBEde8E17090314028Ce8B9787d";
export const ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "wallet",
				"type": "address"
			}
		],
		"name": "addAuthArray",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "date",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "depart",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "fname",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "fpath",
				"type": "string"
			}
		],
		"name": "makeBlock",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_ad",
				"type": "address"
			}
		],
		"name": "remove",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "agreeLogin",
		"outputs": [
			{
				"internalType": "bool",
				"name": "check",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "getBlock_addr",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "no",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "date",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "depart",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "fileName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "filePath",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "writerAddr",
						"type": "address"
					}
				],
				"internalType": "struct WDI.SignBlock[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "date",
				"type": "string"
			}
		],
		"name": "getBlock_date",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "no",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "date",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "depart",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "fileName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "filePath",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "writerAddr",
						"type": "address"
					}
				],
				"internalType": "struct WDI.SignBlock[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "depart",
				"type": "string"
			}
		],
		"name": "getBlock_depart",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "no",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "date",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "depart",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "fileName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "filePath",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "writerAddr",
						"type": "address"
					}
				],
				"internalType": "struct WDI.SignBlock[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "fname",
				"type": "string"
			}
		],
		"name": "getBlock_fname",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "no",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "date",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "depart",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "fileName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "filePath",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "writerAddr",
						"type": "address"
					}
				],
				"internalType": "struct WDI.SignBlock[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			}
		],
		"name": "getBlock_name",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "no",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "date",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "depart",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "fileName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "filePath",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "writerAddr",
						"type": "address"
					}
				],
				"internalType": "struct WDI.SignBlock[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_ad",
				"type": "address"
			}
		],
		"name": "getId",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "ID",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_ad",
				"type": "address"
			}
		],
		"name": "isEnroll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "check",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
export const Mycontract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
