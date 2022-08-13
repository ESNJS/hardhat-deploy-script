require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-solhint");
require('dotenv').config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000
      },
    },
  },
  networks: {
    mainnet: {
      url: `RPC`,
      accounts: [`${PRIVATE_KEY}`]
    }
  }
};