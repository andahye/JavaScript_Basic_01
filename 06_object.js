// Objects
// one of ths JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Objects. 
// object = { key : value }; Object는 key와 value의 집합체이다
// => Object = 우리가 접근할 수 있는 변수(property) : 변수가 가지고 있는 값(value)

// 'use strict';

// const name = 'dahye';
// const age = 20;
// print(name, age);
// function print(name, age) {
//     console.log(name);
//     console.log(age)
// } 주소, 풀네임 등 인자가 많아지면 추가해야할 것들이 굉장히 많아진다. 
// > 관리 하기도 힘들고, logical한 사고로 구조를 짜기에도 힘들어진다. 
// > 그래서, Object가 등장한 것. 

// 1. Literals and properties
// Object를 생성하는 방법
const obj1 = {}; // 'Object literal' syntax
const obj2 = new Object(); // 'Object constrctor' syntax 

function print(person) { //object를 설정하여 관리한다. 
    console.log(person.name); 
    console.log(person.age)
} 
const dahye = {name: 'dahye', age: 20}; // Object 이름이 없어도 괄호로 바로 생성 가능 
//dahye라는 Object = name과 age라는 Key : dahye와 20이라는 value.
print(dahye);

// with JavaScript magic (dynamically typed language)
// can add properties later 뒤늦게 하나의 property를 추가할 수 있다!
dahye.hasJob = true;
console.log(dahye.hasJob); 
// => 가능은 하지만, 이런 식으로 하면 나중에 유지보수 하기도 힘들고 에러가 발생할 수 있으므로 웬만하면 하지 마세요.

delete dahye.hasJob;
console.log(dahye.hasJob); 
// => 삭제도 가능;


// 2. Computed properties 계산된 변수
// Key should be always string 키는 항상 string 타입으로 지정해서 받아야 한다. 

console.log(dahye.name); // 코딩하는 그 순간 키에 해당하는 값을 받아오고 싶을 때 쓴다. = 평상시. 
console.log(dahye['name']); // [] 정확하게 어떤 키가 필요한지 모를 때, 즉 런타임에서 결정될 때 쓴다. 
dahye['hasJob'] = true; //dahye라는 object에 hasJob을 true할당
console.log(dahye.hasJob); 

function printValue(obj, key) { //Object와 Key를 받아서
    // console.log(obj.key); Key에 상응하는 Value를 출력 But 어떤 Key를 받을지 코딩하는 시점에서는 모르는 상황. > undefined로 출력(key라는 변수가 들어있니? 없잖아.)
    console.log(obj[key]); // -> 이럴 때, []를 사용하는 것. 동적으로 Key에 대한 value를 받아올 때 유용.
}
printValue(dahye, 'name');
printValue(dahye, 'age');


// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 }; 
const person4 = new Person('dahye', 30);
console.log(person4);


// 4. Constructor Function
function Person(name, age) { // makePerson은 클래스 같은, 즉 템플렛 같은 아이군요! -> 그래서 클래스가 없을 때는 이런 식으로 많이 썼었다. 계산을 하지 않고 순수한 Object를 생성하는 함수들은 대문자로 시작하도록 함수를 만든다. 
    //return{
        // name: name,
        // age: age,
        //name,
        //age,
        // => key와 value의 이름이 동일하다면 생략할 수 있다. 
    //};
    // this = {}; <- 새로운 오브젝트를 만들어서 this에 name이라는 새로운 함수를 넣고
    this.name = name;
    this.age = age;
    // return을 사용하지 않고 this를 사용한다.
    // return this; this를 return하는 함수.
}


// 5. in operator: property existence check (key in obj)
// in : 해당하는 Object에 key가 있는지 없는지 확인
console.log('name' in dahye); // true
console.log('age' in dahye); // true
console.log('random' in dahye); // false
console.log(dahye.random); // 정의하지 않았던 아이를 불러옴 > undefined


// 6. for..in vs for..of
// for (key in obj)
// console.clear(); clear(); 이전 결과값을 모두 지움
for (key in dahye) { //dahye가 가지고 있는 key들이 블럭을 돌 때마다 key라는 지역 변수에 할당
    console.log(key); //모든 key 출력
} // => 모든 Key를 받아와서 처리하고 싶을 때 사용 

// 6-2. for (value of iterable) 배열, 리스트 등 순차적으로 iterable한 애들을 쓴다. 
const array = [1, 2, 4, 5];
// for(let i = 0; i < array.length ; i ++) { = array의 length만큼, 삥글삥글 돌면서 ; i를 순차적으로 늘려서 찍는다
//     console.log(array[i]);
// }
for(value of array) { //array에 있는 모든 값들이 할당되면서
    console.log(value); //블럭 안에서 순차적으로 출력하거나 값을 계산한다.
}


// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'dahye', age: '20' };
const user2 = user;
//user2.name = 'coder';
console.log(user);

// old way > for...in 사용
const user3 = {}; //비어져있는 object를 먼저 만들고
for (key in user) { //user 안에 있는 key를 빙글빙글 돌면서 > 첫번째 key는 name, 두번째 key는 age. 
    user3[key] = user[key]; //user3의 key를 출력할건데, 그 값은 user에 할당된다. 
}
console.log(user3);

// another example > Object.assign 사용
// assign<Target 복사하고자 하는 타겟, source 복사하려고 하는 소스 전달> 
// return값은 T&U;

//const user4 = {}; 타겟을 만들면 비어져있는 것을 정의한 다음
//Object.assign(user4, user); 전달해서, 복사하고자 하는 object를 전달
//console.log(user4);

const user4 = Object.assign({}, user); //전달하는 object는 비어져있고 return값을 받아와서 한줄로 작성해도 OK.
console.log(user4);

// 여러개 사용도 가능
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue <- 뒷순서에 있는 것이 출력
console.log(mixed.size); // big <- 어차피 fruit2만 지정했었으므로 