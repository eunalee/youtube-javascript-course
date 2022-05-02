'use strict';

// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello');
log(1234);      

// 2. Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const euna = { name: 'euna' };
changeName(euna);
console.log(euna);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    /*if (from === undefined) {
        from = 'unknown';
    }*/
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
    /*for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }*/

    /*for (const arg of args) {
        console.log(arg);
    }*/

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'euna');

// 5. Local scope
let globalMessage = 'global';   // global variable
function printMessage() {
    let message = 'hello';      // local variable
    console.log(message);
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }

    //console.log(childMessage);
}
printMessage();
//console.log(message);

// 6. Return a value
console.log(`sum: ${sum(2, 3)}`);
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);   // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assinged as a value to variable
// can be passed as an argument to ohter functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
//print();
const print = function () {     // anonymous function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}

// anonymous function
const printYes = function () {
   console.log('yes!');
}

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
    console.log('no!');
    //print();
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
/*const simplePrint = function () {
    console.log('simplePrint!');
}*/

const simplePrint = () => console.log('simplePrint!');

/*const add = function (a, b) {
    return a + b;
}*/
const add = (a, b) => a + b;

const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
}

// IIFE: Immediately Invoked Function Expression
/*function hello() {
    console.log('IFFE');
}
hello();*/

(function hello() {
   console.log('IFFE');
})();
// Fun quiz time
// function calculate(command, a, b)
// command : add, substract, divide, multiply, remainder
/*function calcluate(command, a, b) {
    let result = 0;
    switch (command) {
        default:
        case 'add':
            result = a + b;
            break;
        case 'substract':
            result = a - b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            result = a / b;
            break;
        case 'remainder':
            result = a % b;
            break;
    }
    return result;
}
console.log(calcluate('' , 1, 2));*/

const calc = function (command, a, b) {
    let result = 0;
    switch (command) {
        default:
        case 'add':
            result = a + b;
            break;
        case 'substract':
            result = a - b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            result = a / b;
            break;
        case 'remainder':
            result = a % b;
            break;
    }
    return result;
}
console.log(calc('substract', 5, 6));

const cal = (command, a, b) => {
    let result = 0;
    switch (command) {
        default:
        case 'add':
            result = a + b;
            break;
        case 'substract':
            result = a - b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            result = a / b;
            break;
        case 'remainder':
            result = a % b;
            break;
    }
    return result;
}
console.log(cal('remainder', 4, 3));

function calcluate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            return  a / b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}
console.log(calcluate('divide', 20, 4));
console.log(calcluate('', 10, 19));