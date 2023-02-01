"use strict";
exports.__esModule = true;
var consoleStart = function () {
    console.log('\x1b[33m', 'Running test cases...');
    console.log('');
};
var consoleEnd = function () {
    console.log('\x1b[33m', 'End of test cases...');
    console.log('\x1b[37m', '');
    console.log('');
};
var consoleBuffer = function () {
    console.log('--------------------------');
    console.log('--------------------------');
    console.log('\n');
};
var validateTestCase = function (fxn, answer) {
    var output = fxn;
    console.log('\x1b[36m%s\x1b[0m', 'Testing function...');
    if (output === answer) {
        console.log('\x1b[32m', 'CORRECT :: ' + output + ' === ' + answer);
    }
    else {
        console.log('\x1b[31m', 'WRONG -> Output was ' + output + ', expected ' + answer);
    }
    console.log();
};
function repeatedString(input, stringLength) {
    var i = 0;
    var stringIndex = 0;
    var originalInput = input;
    while (i < stringLength) {
        stringIndex++;
        if (stringIndex > originalInput.length) {
            stringIndex = 0;
        }
        input = input.concat(input[stringIndex]);
        i++;
    }
    var aCounter = 0;
    for (var i_1 = 0; i_1 < input.length; i_1++) {
        if (input[i_1] === 'a') {
            aCounter++;
        }
    }
    return aCounter;
}
function repeatedStringRedo(input, stringLength) {
    // problem - a * 1000000 breaks
    var i = 0;
    var stringIndex = 0;
    var originalInput = input;
    // orginal count
    var aCounter = 0;
    for (var i_2 = 0; i_2 < input.length; i_2++) {
        if (input[i_2] === 'a') {
            aCounter++;
        }
    }
    var aInStringTotal = Math.floor(stringLength / input.length);
    aCounter = aCounter * aInStringTotal;
    // while (i < stringLength) {
    //     stringIndex++;
    //     if (stringIndex > originalInput.length) {
    //         stringIndex = 0;
    //     }
    //     input = input.concat(input[stringIndex]);
    //     i++;
    // }
    // let aCounter = 0;
    // for (let i = 0; i < input.length; i++) {
    //     if (input[i] === 'a') {
    //         aCounter++;
    //     }
    // }
    return aCounter;
}
consoleStart();
validateTestCase(repeatedString('aba', 10), 7);
validateTestCase(repeatedStringRedo('aba', 10), 7);
consoleEnd();
consoleBuffer();
