'use strict';
// Array π

// 1.Declaration
const arr1 = new Array();
const arr2 = [1,2];

//2. Index position
const fruits = ['π','π'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[-1]);

// 3.Looping
for (let fruit of fruits) {
    console.log(fruit);
}

//for Each
fruits.forEach((fruit, index)=>console.log(fruit, index));

//4.Addition, deletion, copy
fruits.push('π','π­');
console.log(fruits);
fruits.pop('π')
console.log(fruits);

fruits.unshift('π','π')
console.log(fruits);

fruits.push('π₯¨','π€','π³');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);

const fruits2 = ['π','π₯']
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5.Searching
// find the index
console.clear();
console.log(fruits.indexOf('π€'))

console.log(fruits.includes('π'))

//last of index: λ κ° μ΄μμ κ°μ λ¬Όμ²΄κ° μμ λ


console.clear()
console.log(fruits.join('-'))