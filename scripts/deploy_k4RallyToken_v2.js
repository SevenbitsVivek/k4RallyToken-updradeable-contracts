// scripts/upgrade_box.js
const { ethers, upgrades } = require("hardhat");

const PROXY = "0x59348937dcc0e2e76f879eB701D1155c18a0F522";

async function main() {
    const K4RallyTokenV2 = await ethers.getContractFactory("K4RallyTokenV2");
    console.log("Upgrading K4RallyTokenV1...");
    await upgrades.upgradeProxy(PROXY, K4RallyTokenV2);
    console.log("K4RallyTokenV1 upgraded");
}

main();
