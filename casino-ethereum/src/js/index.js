import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'web3'
import './../css/index.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      lastWinner = 0,
      timer: 0
    }
  }

  voteNumber(number){
    console.log(number)
  }

  render(){
    return (
      <div className="main-container">
        <h1>Bet for your best number and win huge amounts of Ether</h1>

        <div className="block">
          <h4>Timer:</h4> &nbsp;
          <span ref="last-winner">{this.state.lastWinner}</span>
        </div>

        <hr/>

        <h2>Vote for what you think will be the next number</h2>
          <ul>
            <li onClick={(1) => {this.voteNumber(1)}}></li>
            <li onclick={(2) => {this.voteNumber(2)}}></li>
            <li onclick={(3) => {this.voteNumber(3)}}></li>
            <li onclick={(4) => {this.voteNumber(4)}}></li>
            <li onclick={(5) => {this.voteNumber(5)}}></li>
            <li onclick={(6) => {this.voteNumber(6)}}></li>
            <li onclick={(7) => {this.voteNumber(7)}}></li>
            <li onclick={(8) => {this.voteNumber(8)}}></li>
            <li onclick={(9) => {this.voteNumber(9)}}></li>
            <li onclick={(10) => {this.voteNumber(10)}}></li>
          </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
