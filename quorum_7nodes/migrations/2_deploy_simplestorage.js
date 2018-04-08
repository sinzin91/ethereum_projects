// File: `./migrations/2_deploy_simplestorage.js`

var SimpleStorage = artifacts.require("SimpleStorage");

module.exports = function(deployer) {
  // Pass 42 to the contract as the first constructor parameter
  // pass node 7's public key to privateFor
  deployer.deploy(SimpleStorage, 42, {privateFor: ["N64l3FsQG0a15CImiWhwbMmML4qp2+gJn1B1yt6eFms="]})
};
