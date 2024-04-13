//SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.7;

contract Transactions {

    //Address --> Contract -- deposit
    function deposit() external payable {
    }

    //Contract --> Address  -- withdrawal
    function withdraw(address payable _to, uint _amount) external {
        _to.transfer(_amount);
    }

    function getBalance() external view returns(uint) {
        return address(this).balance;
    }

    function getAddress() external view returns(address) {
        return address(this);
    }

    struct MenuItem {
        string name;
        uint price;
    }
    
    MenuItem[] public menu;

    // Add a new menu item
    function addMenuItem(string memory _name, uint _price) external {
        menu.push(MenuItem(_name, _price));
    }

    // Get the number of items in the menu
    function getMenuLength() external view returns(uint) {
        return menu.length;
    }

}

