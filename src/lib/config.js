export const CONTRACT_ADDRESS = "0x0328B84759D148eAcc0912D5Da049E008C4fC7B8";
export const ABI = [
    {
        inputs: [
            {
                internalType: "address",
                name: "wallet",
                type: "address",
            },
        ],
        name: "addAuthArray",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
            {
                internalType: "string",
                name: "date",
                type: "string",
            },
            {
                internalType: "string",
                name: "depart",
                type: "string",
            },
            {
                internalType: "string",
                name: "fname",
                type: "string",
            },
            {
                internalType: "string",
                name: "fpath",
                type: "string",
            },
        ],
        name: "makeBlock",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "previousOwner",
                type: "address",
            },
            {
                indexed: true,
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "OwnershipTransferred",
        type: "event",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_ad",
                type: "address",
            },
        ],
        name: "remove",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "newOwner",
                type: "address",
            },
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
    {
        inputs: [],
        name: "agreeLogin",
        outputs: [
            {
                internalType: "bool",
                name: "check",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "date",
                type: "string",
            },
        ],
        name: "getBlock_date",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "no",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "name",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "date",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "depart",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "fileName",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "filePath",
                        type: "string",
                    },
                    {
                        internalType: "address",
                        name: "writerAddr",
                        type: "address",
                    },
                ],
                internalType: "struct WDI.SignBlock[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "depart",
                type: "string",
            },
        ],
        name: "getBlock_depart",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "no",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "name",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "date",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "depart",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "fileName",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "filePath",
                        type: "string",
                    },
                    {
                        internalType: "address",
                        name: "writerAddr",
                        type: "address",
                    },
                ],
                internalType: "struct WDI.SignBlock[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "fname",
                type: "string",
            },
        ],
        name: "getBlock_fname",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "no",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "name",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "date",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "depart",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "fileName",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "filePath",
                        type: "string",
                    },
                    {
                        internalType: "address",
                        name: "writerAddr",
                        type: "address",
                    },
                ],
                internalType: "struct WDI.SignBlock[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "string",
                name: "name",
                type: "string",
            },
        ],
        name: "getBlock_name",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "no",
                        type: "uint256",
                    },
                    {
                        internalType: "string",
                        name: "name",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "date",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "depart",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "fileName",
                        type: "string",
                    },
                    {
                        internalType: "string",
                        name: "filePath",
                        type: "string",
                    },
                    {
                        internalType: "address",
                        name: "writerAddr",
                        type: "address",
                    },
                ],
                internalType: "struct WDI.SignBlock[]",
                name: "",
                type: "tuple[]",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_ad",
                type: "address",
            },
        ],
        name: "getId",
        outputs: [
            {
                internalType: "uint256",
                name: "ID",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_ad",
                type: "address",
            },
        ],
        name: "isEnroll",
        outputs: [
            {
                internalType: "bool",
                name: "check",
                type: "bool",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
];
