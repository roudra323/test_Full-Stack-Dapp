// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Counter {
    address public owner;
    int count;

    constructor() {
        owner = msg.sender;
    }

    function inc() external {
        count += 1;
    }

    function dec() external {
        require(count >= 0, "count is negtive");
        count -= 1;
    }

    function prcount() external view returns (int) {
        return count;
    }
}
