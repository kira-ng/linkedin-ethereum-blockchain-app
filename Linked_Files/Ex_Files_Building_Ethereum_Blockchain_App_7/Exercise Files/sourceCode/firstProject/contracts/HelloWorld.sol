pragma solidity ^0.5.0;  // ^0.4.24; 

contract HelloWorld {
    string private helloMessage = "Hello world";

    function getHelloMessage() public view returns (string memory) {
        return helloMessage;
    }
}