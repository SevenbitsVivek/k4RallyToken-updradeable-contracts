// scripts/deploy_upgradeable_box.js
const { ethers, upgrades } = require("hardhat");

async function main() {
    const K4RallyTokenV1 = await ethers.getContractFactory("K4RallyTokenV1");
    console.log("Deploying K4RallyToken...");
    const k4RallyTokenV1 = await upgrades.deployProxy(K4RallyTokenV1, ["0xF645f9A3980CEc8D7BE11763e2F9eA6CbF33b862", 100], {
        initializer: "initialize",
    });
    await k4RallyTokenV1.deployed();
    console.log("K4RallyToken1 deployed to:", k4RallyTokenV1.address);
}

main();
