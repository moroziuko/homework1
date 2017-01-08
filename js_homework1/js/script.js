"use strict";

function customPow() {
    do {
        var number = Number(prompt("Please enter a Number. Only integer digits are allowed: "));
        var isNumberInteger = (typeof number === 'number') && (number % 1 === 0);
    } while (!isNumberInteger)
    do {
        var exponent = Number(prompt("Please enter an Exponent. Only integer digits are allowed: "));
        var isExponentInteger = (typeof exponent === 'number') && (exponent % 1 === 0);
    } while (!isExponentInteger)

    if (number === 0 || exponent === 0) {
        console.log("Result:" + 0);
    } else {
        var result = number;
        for (var index = 0; index < exponent - 1; index++) {
            result = result * number;
        }
    }
    console.log("Result:" + result);
}

console.log(customPow());



