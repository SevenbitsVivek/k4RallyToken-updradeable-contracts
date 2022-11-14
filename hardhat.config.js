require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
require('hardhat-contract-sizer');

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/681d784bc2db408b8aa49ec6b887d47a`,
      accounts: ['9549755e8d90d277f1e2494b7de07dcad85241eacf7d769b7b983992bce14542'],
    },
    // testnet: {
    //   url: "https://data-seed-prebsc-2-s3.binance.org:8545/",
    //   chainId: 97,
    //   gasPrice: 20000000000,
    //   accounts: ['9549755e8d90d277f1e2494b7de07dcad85241eacf7d769b7b983992bce14542']
    // },
    // ganache: {
    //   url: "HTTP://127.0.0.1:7545",
    //   accounts: ["0f3de935eb8fcfb801f6320b440995494decb031c5134834a4c831e380f84a82"]
    // }
  },
  etherscan: {
    apiKey: "S37N5UE2RIEDN4UXG2QQHBI7S4IE4N3T7V",
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
      details: { yul: false },
    },
  },
};
