const consoleStart = () => {
    console.log('\x1b[33m', 'Running test cases...');
    console.log('');
};

const consoleEnd = () => {
    console.log('\x1b[33m', 'End of test cases...');
    console.log('\x1b[37m', '');
    console.log('');
};

const consoleBuffer = () => {
    console.log('--------------------------');
    console.log('--------------------------');
    console.log('\n');
};

const validateTestCase = (fxn: any, answer: any) => {
    const output = fxn;

    console.log('\x1b[36m%s\x1b[0m', 'Testing function...');

    if (output === answer) {
        console.log('\x1b[32m', 'CORRECT :: ' + output + ' === ' + answer);
    } else {
        console.log(
            '\x1b[31m',
            'WRONG -> Output was ' + output + ', expected ' + answer
        );
    }

    console.log();
};

function repeatedString(input: string, stringLength: number) {
    let i = 0;
    let stringIndex = 0;
    let originalInput = input;

    while (i < stringLength) {
        stringIndex++;
        if (stringIndex > originalInput.length) {
            stringIndex = 0;
        }

        input = input.concat(input[stringIndex]);
        i++;
    }

    let aCounter = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'a') {
            aCounter++;
        }
    }

    return aCounter;
}

function repeatedStringRedo(input: string, stringLength: number) {
    let i = 0;
    let stringIndex = 0;
    let originalInput = input;

    // original count
    let aCounter = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'a') {
            aCounter++;
        }
    }

    const aInStringTotal = Math.floor(stringLength / input.length);
    aCounter = aCounter * aInStringTotal;

    const aInStringTotalRemainder = stringLength % input.length;
    let aCounterRemainder = 0;
    if (aInStringTotalRemainder > 0) {
        for (let i = 0; i < aInStringTotalRemainder; i++) {
            if (input[i] === 'a') {
                aCounterRemainder++;
            }
        }
    }

    return aCounter + aCounterRemainder;
}

consoleStart();

validateTestCase(repeatedString('aba', 10), 7);
validateTestCase(repeatedStringRedo('aba', 10), 7);

consoleEnd();
consoleBuffer();

export {};
