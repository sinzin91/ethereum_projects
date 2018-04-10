pragma solidity ^0.4.17;

contract SimpleStorage {
  uint myVariable;

  event Odd();

  event Even();

  function set(uint x) public {
    myVariable = x;
    if (x % 2 == 0) {
      Odd();
    } else {
      Even();
    }
  }

  function get() public constant returns (uint) {
    return myVariable;
  }
}
