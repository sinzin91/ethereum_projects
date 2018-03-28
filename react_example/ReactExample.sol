pragma solidity ^0.4.11;

contract ReactExample {
  address private owner;
  string public you_awesome;
  string private secret;
  function ReactExample () public {
    owner = msg.sender;
    you_awesome = "You're awesome";
    secret = "secret data";
  }

  function getSecret () public view returns (string) {
    return secret;
  }

  function kill () public {
    require (msg.sender == owner);
    selfdestruct (owner);
  }

  function () public payable {
    revert ();
  }
}
