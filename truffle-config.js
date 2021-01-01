require('dotenv').config();
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const { ALCHEMY_MAIN_API_URL, MNEMONIC, INFURA_ROPSTEN_API_URL, ACCOUNT_ZERO, ETHERSCAN_API, INFURA_RINKEBY_API_URL, NODE_PATH } = process.env;
const web3 = createAlchemyWeb3(ALCHEMY_MAIN_API_URL);
const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require('fs');



module.exports = {
  ens: {
    enabled: true
  },
  api_keys: {
    etherscan: process.env.ETHERSCAN_API
  },
  build: "webpack",

  compilers: {
    solc: {
      version: "0.7.5",    // Fetch exact version from solc-bin (default: truffle's version)
      docker: false,
      parser: "solcjs",        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200,
        },
        evmVersion: "",
      },
    },
  },
  networks: {
    development: {
      host: "127.0.0.1",      //Localhost (default: none)
      port: "9545",            // Standard Ethereum port (default: none)
      network_id: "*"
    },     // Any network (default: none)

    "live": {
      //host: "127.0.0.1",
      //port: "8547"
      // url: ",
      provider: () => new HDWalletProvider([ACCOUNT_ZERO], ALCHEMY_MAIN_API_URL),
      network_id: 1,        // Custom network
      gas: "1260000",                                            // Gas sent with each transaction (default: ~6700000)
      gasPrice: "55000000000",
      confirmations: "1",
      timeoutBlocks: "200",                                   // 20 gwei (in wei) (default: 100 gwei)
      //from: "",        // Account to send txs from (default: accounts[0])
      websockets: true,
      setTimeout: "5000000000",
      ens: {
        registry: {
          address: "0x2f63f6fAC1397f48217c5de6d17A3d9D10d3B5FA"
        }
      }
      // Enable EventEmitter interface for web3 (default: false)    
    },
    ropsten: {
      //host: "",
      //port: "",
      provider: () => new HDWalletProvider([ACCOUNT_ZERO], INFURA_ROPSTEN_API_URL),
      //url: "wss://eth-ropsten.ws.alchemyapi.io/v2/",
      network_id: "3",                                                     // Ropsten's id
      gas: "4500000",
      gasPrice: "47000000000",        // Ropsten has a lower block limit than mainnet
      confirmations: "0",    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: "200",  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true,    // Skip dry run before migrations? (default: false for public nets )
      //from: "",
      websockets: true,
      setTimeout: "50000000000",
    },
  },
  plugins: ['truffle-plugin-verify'],
};