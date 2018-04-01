var HamburgerCoin = artifacts.require("./HamburgerCoin.sol");

module.exports = function(deployer) {
  deployer.deploy(HamburgerCoin);
};
