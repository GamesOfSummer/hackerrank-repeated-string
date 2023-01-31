"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        input.concat(input[stringIndex]);
        i++;
    }
}
consoleStart();
validateTestCase(repeatedString('aba', 10), 7);
consoleEnd();
consoleBuffer();
//# sourceMappingURL=index.js.map