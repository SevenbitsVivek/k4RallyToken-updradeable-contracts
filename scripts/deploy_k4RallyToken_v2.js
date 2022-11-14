// scripts/upgrade_box.js
const { ethers, upgrades } = require("hardhat");

const PROXY = "0x8a849Fc155c0646A1885F15113dD548C3A768A79";

async function main() {
    const K4RallyTokenV2 = await ethers.getContractFactory("K4RallyTokenV2");
    console.log("Upgrading K4RallyTokenV1...");
    await upgrades.upgradeProxy(PROXY, K4RallyTokenV2);
    console.log("K4RallyTokenV1 upgraded");
}

main();
