async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const PolsStake = await ethers.getContractFactory("PolsStake");
    const polsStake = await PolsStake.deploy("0x59348937dcc0e2e76f879eB701D1155c18a0F522", 100);
  
    console.log("PolsStake address:", polsStake.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

// 0x1d7958CD9fEE109661C4a563848049F07d5A5194