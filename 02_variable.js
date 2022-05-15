// 1. Use strict 
// added in ES 5 
// use this for Valina Javascript 
// => 스트립트 파일 앞에는 use strict을 선언해주세요!
// 바닐라 자스에서는 '말도 안되는' 선언문이 나올 수도 있는데, 이를 방지해주는 것이 use strict
'use strict';


// 2. Variable = 변수 = 변경될 수 있는 값
// let (added in ES6) ES6 이전의 버전은 거의 쓰지X 

let globalName = 'global name';
console.log(globalName);
// 괄호 없이도 동작하는 글로벌 변수.
// 클래스, 함수, if 등 필요한 부분에만 최소한으로 쓰는 것이 좋다. 


    let name = 'dahye';
    console.log(name);
    name = 'hello';
    console.log(name);


// var (don't ever use this!) 쓰지 마세요!
// var *hoisting (move declaration from bottom to top)
// *어디에 선언했냐에 상관없이 항상 제일 위로 선언을 끌어올려주는 것. 

// has no block scope 블럭을 무시한다. 
// 초기에는 이런 유연성으로 어플을 만들었지만 규모가 커진 어플에서는 변수 동작이 꼬이게 된다! 
{
    age = 4;
    var age;
}
console.log(age);


// 3. Contants
// favor immutable data type always for a few reasons;
// => 웬만하면 immutable(지정값이 변하지 않는) 타입을 써라. 
// - security: 해커들이 지정된 값을 변경하는 것을 방지
// - thread safety: 함수-지정된 값이 동시에 스레드 출력되는데, 값이 동시에 변할 수 있다는 것은 리스크가 있음. 
// - reduce homan mistakes: 협업하는 개발자와의 실수 방지
const dayInWeek = 7;
const maxNumber = 5;

// => 선언에는 mmutable 타입의 let, immustable 타입의 const가 있습니다. 


// 4. Variable types 
// primitive: single item(number, string, boolean, null, underfiedn, symbol)
// = 더 이상의 단위로 쪼개지지 않는 싱글 아이템
// object: box container = 싱글 아이템을 묶어서 관리하게 해주는 것.
// function: first-class function = function도 변수에 할당 가능, 인자 전달 가능, 리턴 가능.

const count = 17; // integer 
const size = 17.1; // decimal nember 
console.log(`value: ${count}, type: $(typeof count}`);
console.log(`value: ${size}, type: $(typeof size}`);

// number - speicla numeric values: infinity, -infinity, Nan
// 연살할 때 그 값이 valed한 값인지 확인하고 연산을 하는 것이 중요! 에러의 원인이 됩니다. 
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a numeber' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
// => 큰~ 숫자 끝에 n만 추가하면 bigInt라고 출력. 최근 업데이트된 것으로, 흔하게 쓰여지지는 않을 것이라고 예상.
const bigInt = 123456789412345678941234567897n; //over (-2**53) ~ 2*53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string 
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);

const helloBob = `hq ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);
// `을 이용하면 하나하나 지정해줘야 하는 불편함 없이 효율적인 코딩 가능. 

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false 
console.log(`value: $ {canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null 
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined 
let x = undefined;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique indentifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id'); 
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true;
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure 
const dahye = { name: 'dahye', age: 20 };
dahye.age = 21;

// 5. Dynamic typing: dynamically typed language 
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);