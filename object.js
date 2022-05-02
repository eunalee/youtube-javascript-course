'use strict';

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instance of Object
// object = { key : value };

// 1. Literals and properties
const obj1 = {};            // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const euna = { name: 'euna', age: 4 };
print(euna);

// with JavaScript magic (dynamically typed language)
// can add properties later
euna.hasJob = true;
console.log(euna.hasJob);

// can delete properties later
delete euna.hasJob;
console.log(euna.hasJob);

// 2. Computed properties
// key should be always string
console.log(euna.name);
console.log(euna['name']);
euna['hasJob'] = true;
console.log(euna.hasJob);

function printValue(obj, key) {
    // console.log(obj.key);
    console.log(obj[key]);
}
printValue(euna, 'name');

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('euna', 30);
console.log(person4);

// 4. Constructor Function
function Person(name, age) {
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in euna);
console.log('age' in euna);
console.log('random' in euna);
console.log(euna.random);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in euna) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for (value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'euna', age: '20' };
const user2 = user;
// user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);
console.log(user);

const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);