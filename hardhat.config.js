require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
require('hardhat-contract-sizer');

module.exports = {
  solidity: "0.8.10",
  networks: {
    // goerli: {
    //   url: `https://goerli.infura.io/v3/681d784bc2db408b8aa49ec6b887d47a`,
    //   accounts: ['9549755e8d90d277f1e2494b7de07dcad85241eacf7d769b7b983992bce14542'],
    // },
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97,
      gasPrice: 20000000000,
      accounts: ['c244b6e8ae351e71fa353515c55a4e0be82fb5bf7186c18419f89421805f74b7']
    },
    // ganache: {
    //   url: "HTTP://127.0.0.1:7545",
    //   accounts: ["0f3de935eb8fcfb801f6320b440995494decb031c5134834a4c831e380f84a82"]
    // }
  },
  etherscan: {
    apiKey: {
        bscTestnet:"7FH7WAR3SHRS7UDI2YZQWVR5F1SJ3PJBI2",
    }
  },
  // etherscan: {
  //   apiKey: {
  //       goerli:"8Y3TGUES269EJTED9362YDMZYE2K2KK9PH",
  //   }
  // },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
      details: { yul: false },
    },
  },
};
