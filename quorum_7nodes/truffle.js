// File: `truffle.js` (edited for 7nodes example)
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    // use first of 7 nodes as "our" node
    development: {
      host: "127.0.0.1",
      port: 22001, // was 8545
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000
    },
    nodeFour: {
      host: "127.0.0.1",
      port: 22004,
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000
    },
    nodeSeven: {
      host: "127.0.0.1",
      port: 22007,
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000
    }
  }
};
