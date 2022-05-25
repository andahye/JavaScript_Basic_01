// 토끼와 당근이 있다고 가정해보자. 
// 데이터의 속성(동물, 귀가 두개, 먹는다... / 주황색, 비타민C, 채소...)을 묶어두는 것이 Object. 
// 비슷한 타입, Object를 묶어놓는 것이 array(토끼/당근)
// 다른 언어에서는 같은 Data만 묶을 수 있으나, 자스는 뭐다? 동적 언어다. 그래서 다른 것들을 마구 담은 미친 바구니를 만드는 것도 가능하지만... 하지 마세요! 
// Array의 포인트는 Index. Index는 0부터 시작합니다. 

'use strict';

// 1. Declaration Array 선언
const arr1 = new Array(); //new라는 키워드 사용
const arr2 = [1, 2]; //대괄호 안에 데이터를 넣어서 만듦. 더 흔한 방법! 


// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits); 
console.log(fruits.length); 
console.log(fruits[0]); //사과
console.log(fruits[1]); //바나나
console.log(fruits[2]); //정의하지 않았기 때문에 undefined
console.log(fruits[fruits.length - 1]); // 배열의 가장 첫번째는 0, 마지막은 배열의 -1. 배열은 0부터 시작하므로, 총 길이의 -1를 하면 마지막 Index를 받아올 수 있기 때문.


// 3. Looping over an array
// print all fruits 모든 배열을 출력하는 방법
// a. for 
for (let i = 0; i < fruits.length; i++) { //i를 0부터 시작해서; i를 fruits의 length 이전까지 빙글빙글 돌면서; i를 계속 증가시킨다
  console.log(fruits[i]);  //i가 loop하며 출력
}

// b. for of
for (let fruit of fruits) { //배열 안에 들어있는 데이터를 순차적으로 할당하며 실행
  console.log(fruit);
}

// c. forEach
// Performs the specified action for each element in an array.
// = Array에 들어있는 값마다 정해진 액션(콜백함수)을 수행하는 함수. 
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void; 
// = 첫번째로 수행하는 것은 콜백 함수=전달한 함수를 value 하나하나마다 호출.
// 콜백 함수에는 3가지 인자가 들어옵니다(value=배열에 있는 값, 값이 있는 Index, array=전체적인 배열)

// fruits.forEach(function (fruit, index, array) {
// console.log(fruit, index, array);
//});
// 🍎 🍌, 0 1, ['🍎', '🍌'] 
// But 보통은 array는 잘 안 받아온다. 굳이 세 개 다 안 쓰고 출력하고자 하는 것만 쓰면 됨. 
// 이름 없는 function은 Arrow function(=>) 사용 가능, 세미콜론 생략 가능, 한 줄로 깔끔하게! 
fruits.forEach((fruit) => console.log(fruit));
// => forEach는 배열 안에 있는 vlaue들마다 전달한 함수를 출력! 


// 4. Addtion, deletion, copy 넣고 빼고 복사하기
// 4-1. push: add an item to the end 뒤에서부터 추가하기
fruits.push('🍓','🍑'); //끝에 하나씩 추가됨
console.log(fruits);

// 4-2. pop: remove an item from the end 뒤에서부터 빼기 
fruits.pop(); //끝에 있는 것이 하나 빠짐
fruits.pop(); //한번 더 하면? 그 다음 끝이 빠짐
console.log(fruits);

// 4-3. unshift: add an item to the benigging 앞에서부터 추가하기 
fruits.unshift('🍓', '🍋'); //앞에 하나씩 추가됨 
console.log(fruits);

// 4-4. shift: remove an item from the benigging 앞에서부터 빼기
fruits.shift(); //앞에 있는 것이 하나 빠짐 
fruits.shift(); //한번 더 하면? 그 다음 앞에 있는 것이 빠짐
console.log(fruits);

// note!! shift, unshift are slower than pop, push 
// = shift와 unshift는 pop과 push보다 정말 느림!! 
// 앞에 있는 것이 빠질 경우, 빼고 > 재배열하는 시간이 걸린다. 

// 4-5. splice: remove an item by index position 원하는 Index의 value를 빼거나 더하기
fruits.push('🍓', '🍑', '🍋');
console.log(fruits);
// fruits.splice(1); 지정한 Index부터 싹 다 지워버림. 🍌부터 다 지워졌으므로 🍎만 남는다.
fruits.splice(1,1); //시작하는 Index, 거기에서부터 몇개를 지울건지. 🍌부터 1개 지우기로 했으므로 🍌만 지워진다.
console.log(fruits);
fruits.splice(1,1,'🍏','🍉'); //1부터 시작하는 첫번째를 지우고 그 자리에 청사과와 수박을 넣어 > 현재 1인 🍓가 지워진 자리에 🍏와 🍉이 들어온다. 
console.log(fruits);

// 4-6. concat: combine two arrays 두 가지 배열을 묶다 
// concat은 새로운 배열들을 받는다(concat을 호출하는 배열+새로 전달된 배열)을 합해서: 새로운 배열을 return 
const fruits2 = ['🍐', '🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);


// 5. Searching
// 5-1. indexOf: find the index 몇번째에 있는지 
console.log(fruits);
console.log(fruits.indexOf('🍎')); //몇번째에 있는지 > 0
console.log(fruits.indexOf('🍉')); //몇번째에 있는지 > 2
console.log(fruits.indexOf('🥥')); //없는데? > -1 

// 5-2. includes 포함이 되어있는지 
console.log(fruits.includes('🍉')); //있는지없는지 > true 
console.log(fruits.includes('🥥')); //있는지없는지 > false 

// 5-3. lastIndexOf
// = 중복되는 data가 있을 때 마지막 data의 순서를 알려준다.
fruits.push('🍎'); //사과를 한 번 더 넣었는데 
console.log(fruits);
console.log(fruits.indexOf('🍎')); //사과의 순서를 알려달라고 하면? > 첫번째로 해당하는 사과의 순서를 return합니다. 
console.log(fruits.lastIndexOf('🍎')); //마지막으로 해당하는 사과의 순서를 return합니다. 
