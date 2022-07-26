let numerals = document.querySelectorAll('.numerals');
let operations = document.querySelectorAll('.operations');
let decimal = document.getElementById('decimal');
let ce = document.getElementById('ce');
let c = document.getElementById('c');
let result = document.getElementById('result');
let display = document.getElementById('display');
let currentNumberOnTheScreen = 0;
let enterNewNumber = false;
let performingMathOperation = '';



for(let i = 0; i < numerals.length; i++) {
    const numeral = numerals[i];
    numeral.addEventListener('click', function(e){
        pushNumber(e.target.textContent)
    })
};

for(let i = 0; i < operations.length; i++) {
    const operation = operations[i];
    operation.addEventListener('click', function(e){
        mathOperation(e.target.textContent)
    })
};

decimal.addEventListener('click', addDecimalPoint);

ce.addEventListener('click', clearTheLastNumber);

c.addEventListener('click', clearField);

result.addEventListener('click', mathResult);



function pushNumber(numeral) {
    if(enterNewNumber) {
        display.value = numeral;
        enterNewNumber = false;
    } else {
        if(display.value === "0") {
            display.value = numeral;
        } else {
            display.value += numeral;
        };
    };
};


function mathOperation(operation) {
    let rememberEnteredNumber = display.value;
    
    if(enterNewNumber && performingMathOperation !== "=") {
        display.value = currentNumberOnTheScreen;
    } else {
        enterNewNumber = true;
        if (performingMathOperation === "+") {
            currentNumberOnTheScreen += +rememberEnteredNumber;  
        } else if (performingMathOperation === "-") {
            currentNumberOnTheScreen -= +rememberEnteredNumber;  
        } else if (performingMathOperation === "*") {
            currentNumberOnTheScreen *= +rememberEnteredNumber;  
        } else if (performingMathOperation === "/") {
            currentNumberOnTheScreen /= +rememberEnteredNumber;  
        } else {
            currentNumberOnTheScreen = +rememberEnteredNumber;  
        }
        display.value = currentNumberOnTheScreen;
        performingMathOperation = operation;
    };
    
  };


function addDecimalPoint() {
    let rememberDecimaPoint = display.value;

    if ( enterNewNumber) {
        rememberDecimaPoint = '0.';
        rememberEnteredNumber = false;
    } else {
        if (rememberDecimaPoint.indexOf('.') === -1 ) {
            rememberDecimaPoint += '.';
        }
    }
    display.value = rememberDecimaPoint;
};


function clearTheLastNumber(id) {
    if (id = 'ce') {
        display.value = '0';
        rememberEnteredNumber = true;
        performingMathOperation = '';
    }
};


function clearField(id) {
    if (id = 'c' ) {
        display.value = '0';
        rememberEnteredNumber = true;
        currentNumberOnTheScreen = 0;
    }
};
