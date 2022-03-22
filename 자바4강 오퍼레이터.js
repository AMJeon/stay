console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

//2.
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

//6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4<2;

console.log(`or: ${value1 || value2 || check()}`)

function check() {
    for (let i = 0; i < 10; i++) {
        console.log('!');
    }
    return true;
}

//7. Equality
const stringFive = '5';
const numberFive = 5;

//== loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

//===strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//8. Conditional operators: if
// if, else if, else
const name = 'ellie';
if (name === 'ellie') {
    console.log('Welcome, Ellie!');
}   else if (name === 'coder') {
    console.log('You are amazing coder');
}
    else {
        console.log('unknown')

}

//9. Ternary operator: ?
//condition ? value1 : vlaue2;
console.group(name === 'ellie' ? 'yes' : 'no')

//10. Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
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

//11. Loopse
//while loop, while the condition is truthy,
//body code is executed
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

do {
    console.log(`do while: ${i}`);
    i--;

} while (i>0);


//for loop, for(begin; condition; step)
for (i=3; i>0; i--) {
    console.log(`for :${i}`);
}

for (let i = 3; i>0; i=i-2) {
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

//nested loops
for (let i = 0; i<10; i++) {
    for (let j = 0; j<10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

for(let i = 0; i <11; i++) {
    if (i %2 == 0) {
        console.log(i)
    }

}

for (let i=0; i<11; i++) {
    console.log(i)
    if (i==8) {
        break
    }
}