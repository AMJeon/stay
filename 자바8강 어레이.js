'use strict';
// Array 🎆

// 1.Declaration
const arr1 = new Array();
const arr2 = [1,2];

//2. Index position
const fruits = ['🍕','🍔'];
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
fruits.push('🍟','🌭');
console.log(fruits);
fruits.pop('🍕')
console.log(fruits);

fruits.unshift('🍈','🍉')
console.log(fruits);

fruits.push('🥨','🍤','🍳');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);

const fruits2 = ['🍜','🥗']
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5.Searching
// find the index
console.clear();
console.log(fruits.indexOf('🍤'))

console.log(fruits.includes('🍙'))

//last of index: 두 개 이상의 같은 물체가 있을 때


console.clear()
console.log(fruits.join('-'))