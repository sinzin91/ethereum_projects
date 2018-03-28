import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    const MyContract = window.web3.eth.contract([
      {
        "constant": false,
        "inputs": [],
        "name": "kill",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "constant": false,
        "inputs": [
          {
            "name": "newState",
            "type": "string"
          }
        ],
        "name": "setState",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
      },
      {
        "inputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "constructor"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getSecret",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "getState",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
      {
        "constant": true,
        "inputs": [],
        "name": "you_awesome",
        "outputs": [
          {
            "name": "",
            "type": "string"
          }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    ]);

    this.state = {
      ContractInstance: MyContract.at('0x78602db2670a01c7b80c2a96135607a4ce320031')
    }

    this.querySecret = this.querySecret.bind(this);

    this.queryContractState = this.queryContractState.bind(this);

  }

  querySecret(){
    const { getSecret } = this.state.ContractInstance;

    getSecret ((err, secret) => {
      if(err) console.error('An error occurred::::', err);
      console.log('This is our contract\'s secret::::', secret);
    })
  }

  queryContractState(){
    const { getState } = this.state.ContractInstance;

    getState  ((err, state) => {
      if(err) console.err('An error occurred::::', err);
      console.log('This is our contract\'s state::::', state);
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <h1 className="App-title"> React & Ethereum Simple Application </h1>
        </header>

        <br />
        <br />
        <button onClick={ this.querySecret }> Query Smart Contract's Secret </button>
        <br />
        <br />
        <button onClick={ this.queryContractState }> Query Smart Contract's State </button>
        <br />
        <br />
      </div>
    );
  }
}

export default App;
