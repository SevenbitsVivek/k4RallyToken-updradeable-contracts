require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
require('hardhat-contract-sizer');

module.exports = {
  solidity: "0.8.10",
  networks: {
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: ['c244b6e8ae351e71fa353515c55a4e0be82fb5bf7186c18419f89421805f74b7']
    },
    // mainnet: {
    //   url: "https://bsc-dataseed1.defibit.io",
    //   chainId: 56,
    //   gasPrice: 20000000000,
    //   accounts: [ADD_PRIVATE_KEY]
    // },
  },
  etherscan: {
    apiKey: {
        bscTestnet:"7FH7WAR3SHRS7UDI2YZQWVR5F1SJ3PJBI2",
        bscMainnet: "7FH7WAR3SHRS7UDI2YZQWVR5F1SJ3PJBI2"
    }
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
      details: { yul: false },
    },
  },
};
