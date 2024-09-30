'use strict';

// First Exercise

const inc1 = (n) => n + 1;

const inc2 = (num) => ++num.n;

// Test 1
const a = 5;
const b = inc1(a);

console.dir({ a, b });

// Test 2
const obj = { n: 5 };
inc2(obj);

console.log(obj);

// Second Exercise

// Test 1
const array = new Array(true, 'hello', 5, 12, -200, false, false, 'word', 'apple', 1, 'lemon', -48, true, false, 0, 'peach', 16, false, true);
const hash = { number: 0, string: 0, boolean: 0 };

for (const element of array) {
    hash[typeof element] += 1;
};
console.dir(hash);

// Test 2
const array2 = new Array(true, 'hello', 5, 12, -200, false, false, 'word', 'apple', 1, 'lemon', -48, true, false, 0, 'peach', 16, false, true);
const hash2 = {};

for (const element2 of array2) {
    if (Object.getOwnPropertyNames(hash2).includes(typeof element2)) {
        hash2[typeof element2] += 1;
    }
    else {
        hash2[typeof element2] = 1;
    }
}
console.dir(hash2);