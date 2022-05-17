export const mailContract = {
	"contractName": "Mail",
	"abi": [
		{
			"inputs": [],
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "accountAddress",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "keyCID",
					"type": "string"
				}
			],
			"name": "AccountCreated",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "string",
					"name": "keyCID",
					"type": "string"
				}
			],
			"name": "createAccount",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"name": "deprecateContract",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": false,
					"internalType": "address",
					"name": "from",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"indexed": false,
					"internalType": "string",
					"name": "keyCID",
					"type": "string"
				}
			],
			"name": "mailSent",
			"type": "event"
		},
		{
			"inputs": [
				{
					"internalType": "address",
					"name": "to",
					"type": "address"
				},
				{
					"internalType": "string",
					"name": "keyCID",
					"type": "string"
				}
			],
			"name": "sendMail",
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
			"name": "updateOwner",
			"outputs": [],
			"stateMutability": "nonpayable",
			"type": "function"
		}
	],
  "networks": {
    "4": {
      "events": {},
      "links": {},
      "address": "0x04CF013029f717E6e9Ce35c5d0196e3e883A0d63"
    },
    "80001": {
      "events": {},
      "links": {},
      "address": "0x7daD87C073407d4cc84e31B6F57b588BcF25Eb39"
    }
  }
};