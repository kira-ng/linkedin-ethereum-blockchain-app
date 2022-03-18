const erc20Token = artifacts.require("./erc20Token.sol");
const SupplyChain = artifacts.require("./SupplyChain.sol");

module.exports = function(deployer) {
    deployer.deploy(erc20Token, 1000000, "NewIT Coin", 18, "NIT");
    deployer.deploy(SupplyChain);
};