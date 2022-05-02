'use strict';

// 1. String concatenation
console.log('my' + 'cat') ;
console.log('1' + 2) ;
console.log(`string literals: 1 + 2 = ${1 + 2}`);

// '' 로 문자를 만들게 되면 중간에 ' 나 특수기호가 인식이 되지 X
// \' : '
// \n : enter
// \t : tab
console.log("euna\'s book");

// 2. Numeric operators
console.log(1 + 1);     // add
console.log(1 - 1);     // substract
console.log(1 / 1);     // divide
console.log(1 * 1);     // multiply
console.log(5 % 2);     // remainder
console.log(2 ** 3);    // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

const preDecrement = --counter;
// counter = counter - 1;
// preIncrement = counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);

const postDecrement = counter--;
// postDecrement = counter;
// counter = counter - 1;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;     // x = x + y;
x -= y;     // x = x - y;
x *= y;     // x = x * y;
x /= y;     // x = x / y;

// 5. Comparison operators
console.log(10 < 6);    // less then
console.log(10 <= 6);   // less then or equal
console.log(10 > 6);    // greater then
console.log(10 >= 6);   // greater then or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or), finds the first truthy value
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
/*if(nullableObject != null) {
    nullableObject.something;
}*/

function check() {
    for(let i=0; i<10; i++) {
        // wasting time
        console.log('NO');
    }
    return true;
}

// ! (not)
console.log(!value1);

// 7. Equality operators
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const euna1 = { name: 'euna' };
const euna2 = { name: 'euna' };
const euna3 = euna1;
console.log(euna1 == euna2);
console.log(euna1 === euna2);
console.log(euna1 === euna3);

// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// 8. Conditional operators: if
// if, else if, else
const name = 'euna';
if(name === 'euna') {
    console.log('Welcome Euna!');
} else if(name == 'coder') {
    console.log('You are amazing coder');
} else {
    console.log('unknown');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'euna' ? 'yes' : 'no');

// 10. Switch statment
// use for multiple if checks
// use for enum-like value check
// use for multiple type check in TS
const browser = 'IE';
switch(browser) {
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while(i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while(i > 0);

// for loop, for(begin; condition; step)
for(i=3; i>0; i--) {
    console.log(`for: ${i}`);
}

for(let i=3; i>0; i=i-2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loop
for(let i=0; i<10; i++) {
    for(let j=0; j<10; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// break, continue
// Q1. iterate form 0 to 10 and print only even numbers
// (use continue)
/*let k = 0;
while(k < 10) {
    k += 1;
    if(k%2 === 1) continue;
    console.log(k);
}

for(let k=0; k<=10; k++) {
    if(k === 0 || k%2 === 1) continue;
    console.log(k);
}

for(let k=0; k<11; k++) {
    if(k%2 !== 0) continue;
    console.log(k);
}

for(let k=0; k<11; k++) {
    if(k%2 === 0) {
        console.log(k);
    }
}*/

// Q2. iterate from 0 to 10 and print numbers until
// reaching 8 (use break)
/*let k = 0;
while(k < 10) {
    if(k === 8) break;
    console.log(k);
    k += 1;
}

for(let k=0; k<=10; k++) {
    if(k === 8) break;
    console.log(k);
}

for(let k=0; k<11; k++) {
    if(k > 8) break;
    console.log(k);
}*/