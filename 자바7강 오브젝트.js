// Objects = {key:vlaue}

// 오브젝트를 만드는 두 가지 방법
// 1번 중괄호를 사용
// 2번 new Class 를 사용

// 1. Literals and properties
const obj1 = {}; 
const obj2 = new Object(); 

const ellie = {name: 'ellie', age: 30}
ellie.hasjob = true
//  2. Computed properties
// key should be always string!
console.log(ellie.name);
console.log(ellie['name']); //key가 무엇인지 아직 정해지지 않았을 때
ellie['hasJob'] = true;

// 3.Property value shorthand
const person1 = {name: 'bob', age: 2}
const person2 = {name: 'steve', age: 3}
const person3 = {name: 'dave', age: 4}
const person4 = new Person('ellie',30)
console.log(person4)

// 4. Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
    // 생략된 부분
    // this = {}
    // return this;
} 

// 순수하게 오브젝트를 만들기 위한 함수는 그 이름을 대문자로 시작하고
//this를 사용해 value를 분배하고
//클래스를 사용하듯이 new Class로 오브젝트를 만든다

// 5. in operator: property existence check
console.log('name' in ellie);

// 6.for..in vs for..of
console.clear();
for (key in ellie) {
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (value of array) {
    console.log(value);
}

// 7.Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way of cloning
const user3 = {};
for (key in user) {
    user3[key] = user[key];
}

//cloning
const user4 = {}
Object.assign(user4, user);
console.log(user4)
