pragma solidity 0.4.20;

contract Casino {
  address public owner;
  uint256 public minimumBet;
  uint256 public totalBet;
  uint256 public numberOfBets;
  uint256 public maxAmountOfBets = 100;
  address[] public players;

  struct Player {
    uint256 amountBet;
    uint256 numberSelected;
  }

  // The address of the player and the => the user info
  mapping(address => Player) public playerInfo;

  // Fallback function in case someone sends ether to the contract so it
  // doesn't get lost and to increase the treasury of this contract that will
  // be distributed in each game
  function() public payable {}

  function Casino(uint256 _minimumBet) public {
    owner = msg.sender;
    if(_minimumBet != 0) minimumBet = _minimumBet;
  }

  function kill() public {
    if(msg.sender == owner) selfdestruct(owner);
  }

  function checkPlayerExists(address player) public constant returns(bool) {
    for(uint256 i = 0; i < players.length; i++) {
      if(players[i] == player) return true;
    }
    return false;
  }

  function bet(uint256 numberSelected) public payable {
    require(!checkPlayerExists(msg.sender));
    require(numberSelected >= 1 && numberSelected <= 10);
    require(msg.value >= minimumBet);

    playerInfo[msg.sender].amountBet = msg.value;
    playerInfo[msg.sender].numberSelected = numberSelected;
    numberOfBets++;
    players.push(msg.sender);
    totalBet += msg.value;

    if(numberOfBets >= maxAmountOfBets) generateNumberWinner();
  }

  function generateNumberWinner() public {
    uint256 numberGenerated = block.number % 10 + 1; // This isn't secure
    distributePrizes(numberGenerated);
  }

  // Sends the corresponding ether to each winner depending on the total bets
  function distributePrizes(uint256 numberWinner) public {
    // We have to create an temporary in memory array with fixed size
    address[100] memory winners;
    uint256 count = 0; // This is the count for the array of winners

    for(uint256 i = 0; i < players.length; i++) {
      address playerAddress = players[i];
      if(playerInfo[playerAddress].numberSelected == numberWinner){
        winners[count] = playerAddress;
        count++;
      }
      delete playerInfo[playerAddress]; // Delete all the players
    }

    players.length = 0; // Delete all the players array

    // How much each winner gets
    uint256 winnerEtherAmount = totalBet / winners.length; 

    for(uint256 j = 0; j < count; j++){
      // Check that the address in this fixed array is not empty
      if(winners[j] != address(0)) {
        winners[j].transfer(winnerEtherAmount);
      }
    }
  }
}
