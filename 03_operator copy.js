// 1. String concatenation
// + 를 통해 문자열과 문자열을 합해서 새로운 문자를 만드는 것.
console.log('my' + 'cat');
console.log('1' + 2); // 문자열에 숫자를 더하게 되면 숫자가 문자열로 변환되어 합해짐 
console.log(`string literals: 
'''' 
1 + 2 = ${1 + 2}`);
// String concatenation은 이렇게 특수기호, 엔터 막 써도 그대로 적용됨

console.log("dahye\'s \nbook"); // 원래는 특수문자열을 활용해야 됩니다.


// 2. Numeric operators
// 숫자를 연산하는 것. 
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide 
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation



// 3. Increment and decrement operators
// 변수 앞에 ++기호를 붙여주게되면 바로 preIncrement하게 된다.
let counter = 2;
const preIncrement = ++counter;
// => counter = counter + 1; 카운터에 1을 더해서
// => preIncrement = counter; preIncrement에 카운터의 값을 할당.
// 여기에서는, 2에 1을 더해서 할당했으니 3이 출력되겠죠!  
console.log( `preIncrement: ${preIncrement}, counter: ${counter}`);

// 3-2. postIncrement
// 변수 다음에 ++ 기호를 붙이게 되면 먼저 변수의 값을 postIncrement에 할당한 다음에 그 뒤에 카운터의 값을 1 증가시킨다. 
const postIncrement = counter++;
// postIncrement = counter++; postIncrement는 카운터에 1을 더한 값
// counter = counter + 1; 그 값에 1을 더하라 
// => 카운터에 1을 더하고, 그 다음에 1을 더했으니 4가 됨. 
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

// 3-3. preDecrement, postDecrement
const preDecrement = --counter;
// --가 앞에 있으면 바로 업데이트 되어 -1 할당이 되고
console.log(`preDecremnet: ${preDecrement}, counter: ${counter}`);
const postDecrement = counter--;
// 뒤에 붙이면 할당을 해놓고 업데이트는 그 뒤에 한다
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);


// 4. Assigment operators 
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;


// 5. Conperison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than 
console.log(10 >= 6); // greater than or equal 


// 6. Logical operators; || (or) , && (and) , ! (not)
const value1 = false;
const value2 = 4 < 2; // 4가 2보다 작니? ㄴㄴ > false 

// 6-1. || (or) , finds the first truthy value 
// 세개 중에 하나라도 t면 t로 계산.
console.log(`or: ${value1 || value2 || check()}`)
// => or는 첫번째로 등장한 값이 true면 더 이상 작동하지 않는다. 어차피 하나만 true여도 ㅇㅋ니까~
// value1이 false인 현재, '꺄악'이 출력 됨. But true였다면? -> t로 출력됐을 것.  
// -> 그러므로! 연산을 많이 하는 함수는 뒤로 배치합시다. 주니어가 많이 하는 실수 중 하나! 앞2개가 f f일때 마지못해 호출하는 것이 가장 좋다. 

// 6-2. && (and), finds the first falsy value
// 3개가 전부 다 t여야 t로 계산
console.log(`and: ${value1 && value2 && check()}`);
// => 첫번째로 등장한 값이 false면 더 이상 작동하지 않는다. 어차피 하나만 false여도 얘는 true가 아니니까.
// -> 역시! 무거운 함수일수록 뒤로 배치합시다. 

// often used to compress long if-statement 
// nullanleObject && nullableObeject.something
// => nullanleObject가 null이 아닐 때만 .something을 받아와 
// => if (nullableObject != null) {
//     nullableObject.something;
// }

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('꺄악');
    }
    return true;
}

// 6-3. ! (not)
// 값을 반대로 바꿔줍니다.
console.log(!value1);


// 7. Equality 
const stringFive = '5';
const numberFive = 5;

// 7-2. == loose equality
// with type conversion 타입 상관 안하고 비교해 
console.log(stringFive == numberFive); // 같은 모양이네? 똑같음
console.log(stringFive != numberFive); 

// 7-3. === strict equality
// no type conversion 타입이 다르면 너넨 달라 
console.log(stringFive === numberFive); // 타입이 다르잖아! 달라. 
console.log(stringFive !== numberFive);
// -> 웬만하면 ===로 검사하세요. 

// 7-4. object equality by reference 
// equality를 공부할 때는 object를 신경쓰세요.
const dahye1 = { name: 'dahye' };
const dahye2 = { name: 'dahye' };
// -> 똑같은 메모리가 들어가있지만 실제로는 각각 다른 레퍼가 들어있음. 
const dahye3 = dahye1;
console.log(dahye1 == dahye2); // 레퍼런스 타입이 다르므로 f
console.log(dahye1 === dahye2); // 레퍼런스값이 다르므로 f
console.log(dahye1 === dahye3); // 1이 가진 것을 3이 할당했으므로 t 

// 7-5. equality 퀴즈 
console.log(0 == false); // true
console.log(0 === false); // 불리한 타입이 아니므로 f
console.log('' == false); // t 
console.log('' === false); // 불리한 타입이 아니므로 f 
console.log(null == undefined); // 같은 것으로 간주 t
console.log(null === undefined); // 다른 타입 f 


// 8. Contitional operator: if 
// if, else if, else 
const name = 'dahye';
if (name === 'dahye') { //만약 name이 dahye면 작동할거야
    console.log('welcome, Dahye!'); //이렇게 
} else if (name === 'coder') { //만약 name이 coder면 작동할거야
    console.log('You are amazing coder'); //이렇게
} else { //둘다 아니면 작동할거야
    console.log('unkwnon'); //이렇게 
}


// 9. Ternary operator: ? 
// if를 좀 더 간단하게 쓸 수 있는 operator.  
// condition? value1 : value2;
console.log(name === 'dahye' ? 'yes' : 'no'); 
// => 'dahye'니? 맞으면 'yes' :아니면 'no'
// 간단한 출력에 주로 씁니다. 계속 묶고묶고 하지말고 간단하게만 쓰세요!


// 10. Switch statement 
// use for muliple if checks
// use for enum-like value check
// use for muliple type checks in TS
const browser = 'IE';
switch (browser) {
    case 'IE': // 'IE'면 작동할거야 
        console.log('go away!'); // 이렇게
        break; // 그 다음에 멈추고
    case 'Chrome':
    case 'Firefox': // 'Chrome'이랑 'Firefox'면 작동할거야
        console.log('love you!'); // 이렇게
        break; // 그 다음에 멈추고
    default: 
        console.log('same all!');
        break;
}
// 여러개를 쓸 때 활용하면 좋음. 


// 11. Loops 
// while loop, while the condition is truthy, 
// body code is exeuted.
let i = 3;
while (i > 0) { // while (조건) 조건이 f가 될때까지 무한반복한다
    // => i가 0보다 작아질때까지 무한반복한다 
    console.log(`while: ${i}`);
    i--; // i를 1 감소시킨다 
}

// 11-2. do while loop. body code is exected first,
// then check the condition.
do { // 블럭을 먼저 실행한 다음에
    console.log(`do while: ${i}`);
    i--;
} while (i > 0); // i가 0인지 아닌지 검사해서 이때 멈추게 되는 것 
// => 블럭을 먼저 실행하고 싶다면 do while, 조건문이 맞을 때만 블럭을 실행하고 싶다면 while을 써야 한다. 

// 11-3. for loop. for(begin; condition; step)
// for(블럭을 시작하고; 맞는지 검사하고; 안맞을때까지 실행한다)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}
for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration 
    console.log(`inline variable for: ${i}`);
}

// 11-4. nested loops 
for (let i =0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
} // 되도록 쓰지 않는 것이 좋음


// Q. 완전히 멈추는 것은 break, 일단 스킵하고 다음 스텝으로 넘어가는 것은 continue. continue를 이용하여 0부터 10가지 짝수만을 출력해라.
for (let i = 0; i < 11; i++) {
    if ( i % 2 !== 0) {
        continue;
    }
    console.log(`q1. ${i}`);
}

// Q. 0부터 10까지 출력하되, 8보다 크면 멈추도록 하라.
for (let i = 0; i < 11; i++) {
    if (i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}
