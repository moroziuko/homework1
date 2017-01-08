"use strict";

function checkNameAvailability() {
    var namesArr = [prompt("Enter name 1: "), prompt("Enter name 2: "), prompt("Enter name 3: "), prompt("Enter name 4: "), prompt("Enter name 5: ")]
    var userName = prompt("Enter user Name: ");
    var isArrContainsUserName = false;

    for (var index = 0; index < namesArr.length; index++) {
        if (namesArr[index] == userName) {
            isArrContainsUserName = true;
            break;
        }
    }

    if (isArrContainsUserName) {
        alert(userName + ", you are successfully logged in.");
    } else {
        alert(userName + " name was not found.");
    }
}

console.log(checkNameAvailability());
