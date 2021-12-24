export const BUY_CONTRACT = [{
    "inputs": [{
        "internalType": "address",
        "name": "_hypeToken",
        "type": "address"
    }, {"internalType": "address", "name": "_usdToken", "type": "address"}, {
        "internalType": "uint256",
        "name": "_directRoundRate",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "_directRoundLimit", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "_orderLimit",
        "type": "uint256"
    }], "stateMutability": "nonpayable", "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "wallet", "type": "address"}, {
        "indexed": false,
        "internalType": "bytes32",
        "name": "promoCodeDigest",
        "type": "bytes32"
    }],
    "name": "NewAgent",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "indexed": true,
        "internalType": "bytes32",
        "name": "previousAdminRole",
        "type": "bytes32"
    }, {"indexed": true, "internalType": "bytes32", "name": "newAdminRole", "type": "bytes32"}],
    "name": "RoleAdminChanged",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "sender", "type": "address"}],
    "name": "RoleGranted",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "sender", "type": "address"}],
    "name": "RoleRevoked",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "spender", "type": "address"}, {
        "indexed": false,
        "internalType": "uint256",
        "name": "usdAmount",
        "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "hypeAmount", "type": "uint256"}],
    "name": "TokenExchanged",
    "type": "event"
}, {
    "inputs": [],
    "name": "ADMIN_ROLE",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "DEFAULT_ADMIN_ROLE",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "SERVICE_ROLE",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "name": "agents",
    "outputs": [{"internalType": "address", "name": "wallet", "type": "address"}, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "claimed", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "_to", "type": "address"}, {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
    }], "name": "claimUSD", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [],
    "name": "directRoundLimit",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "directRoundRate",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "factor",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "_promoCodeDigest", "type": "bytes32"}],
    "name": "getAgentInfo",
    "outputs": [{"internalType": "address", "name": "wallet_", "type": "address"}, {
        "internalType": "uint256",
        "name": "amount_",
        "type": "uint256"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}],
    "name": "getRoleAdmin",
    "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "internalType": "address",
        "name": "account",
        "type": "address"
    }], "name": "grantRole", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "internalType": "address",
        "name": "account",
        "type": "address"
    }],
    "name": "hasRole",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "hypeToken",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "_promoCodeDigest", "type": "bytes32"}, {
        "internalType": "address",
        "name": "_agent",
        "type": "address"
    }], "name": "initAgent", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [],
    "name": "orderLimit",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "ratesPrecision",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "internalType": "address",
        "name": "account",
        "type": "address"
    }], "name": "renounceRole", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "bytes32", "name": "role", "type": "bytes32"}, {
        "internalType": "address",
        "name": "account",
        "type": "address"
    }], "name": "revokeRole", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "bytes4", "name": "interfaceId", "type": "bytes4"}],
    "name": "supportsInterface",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_value", "type": "uint256"}, {
        "internalType": "bytes32",
        "name": "_promoCodeDigest",
        "type": "bytes32"
    }], "name": "swap", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [],
    "name": "totalSold",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_roundLimit", "type": "uint256"}],
    "name": "updateDirectLimit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_rate", "type": "uint256"}],
    "name": "updateDirectRoundRate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_orderLimit", "type": "uint256"}],
    "name": "updateOrderLimit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "_totalSold", "type": "uint256"}],
    "name": "updateTotalSold",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "usdToken",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}];
