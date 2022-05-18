// Function
// - fundemental building block in the program 프로그램을 구성하는 기본적인 빌딩 블럭
// - subprogram can ne used multiple times subprogram이라고도 불리며, 여러번 재사용이 가능
// - performs a task or calculates a value 한가지 테스크or어떤 값을 계산하기 위해 쓰임

// 1. Function declaration 정의
// function name(param1, param2) { body... return; }
// = function 이름설정(파라미터 나열) { 함수 안의 기본적인 비즈니스 작성, return}
// one function === one thing 하나의 함수는 한가지 일만 해야하도록 지정해야한다!
// naming: doSomething, commend, verb 동작하는 것이므로, 함수의 이름은 doSomething, commend, 동사 형태로 지정해야한다!
// e.g. createCardAndPoint -> createCard, createPoint 함수 이름 짓기가 너무 어렵고 길어진다면? 함수 안에서 너무 많은 일을 하고 있는 것은 아닌지, 두개로 나눌 수 있는지 생각해보자.
// function is object in JS 오브젝트로 간주. 변수에 할당, 파라미터로 전달, 함수를 리턴할 수도 있다.

function printHello() {
    console.log('Hello');
}
printHello();
// => 근데 이건 hello 밖에 출력을 못해. 더 유용하게는 못할까?
function log(message) { //파라미터로 메시지 전달
    console.log(message); //전달된 메시지를 출력
}
log('Hello@');
log(1234);
// 자스에서는 타입이 없다. 함수 자체만 봤을 때 string인지, 숫자도 전달되는지 명확하게 전달되지 않는다ㅠ
// 이러한 난해함을 보완한 것이 타입스크립트. 현업에서 큰 프로젝트를 할시, 타입스크립트로! 꼭 배워보세요!!


// 2. Parameters
// premitive parameters : passed by value 
// premitive parameters : 메모리에 밸류가 그대로 저장 > 밸류 전달 
// object parameters : passed by reference 
// object parameters : 메모리에 레퍼런스 저장 > 레퍼런스 전달 

function chanegeName(obj) { //chanegeName이라는 펑션은 전달된 오브젝트의
    obj.name = 'coder'; // 이름을 코더로 바꾸는 함수
}
const dahye = { name : 'dahye' }; //dahye라는 const 정의 > dahye라는 오브젝트 만들어 할당
chanegeName(dahye); //전달된 'dahye'를 코더로 변경
console.log(dahye);


// 3. Default parameters (added on ES6)
// from = '지정 '원하는 디폴트값 지정 -> 간편하게 디폴트값 지정이 가능합니다

// function showMessage(message, from) from을 정의되어져 있지 않기 때문에 by defined로 출력됨.
//  if(from === undefined) 원래는 if를 이용하여 from이 정해져있지 않다면
//  from = 'unkown' 으로 출력하자. 라고 지정을 했어야 했는데
function showMessage(message, from = 'unkonwn') {
    // = '지정'하면 쉽게 from 지정이 가능해졌습니다! 
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');


// 4. Rest parameters (added in ES6)
/// ... = 배열형태로 전달

function printAll(...args) { //3개의 값이 담겨져있는 배열
    for (let i = 0; i < args.length; i++) { //처음부터; arg의 갯수만큼; 삥글삥글 돌아)
        console.log(args[i]); 
    }
    for (const arg of args) { //arg of args = args에 있는 값들이 하나하나씩 지정되며 
        console.log(arg); //출력 => for loop보다 간단한 코딩 가능
    }
}
printAll('dream', 'coding', 'dahye');


// 5. Local scope 지역 변수 = 블럭 안에서 지정된 변수
// 밖에서는 {안}이 보이지 않고 {안}에서만 밖을 볼 수 있다!!

let globalMessage = 'global'; // global variable

function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); 이렇게 하면 에러남 
}
printMessage();


// 6. Return a value
// 파라미터를 값들을 전달 받아서 계산된 값을 return할 수 있다. 
// return이 없는 함수? return undefined 이 들어가 있는 것과 같다.

function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); //3
console.log(`sum: ${sum(1,2)}`);


// 7. Early return, early exit 

// bad 
function upgradeUser(user) {
    if (user.point > 10) { //만약에 이게 맞으면~
    //else { // 이게 아니면~ }
    // => long upgrade logic...블럭 안에서 로직을 많이 작성하게 되면 가독성이 떨어진다. 
    }
} 

// good (if와 else를 번갈아서 쓰는 것보다 이렇게)
function upgradeUser(user) {
    if (user.point <= 10) { //조건이 맞지 않을 때는
        return; //빨리 리턴해!(멈춰!)
    }
    //long upgrade logic... 
    // => 조건이 아닌 것을 빨리 멈추게 하고 다음 블럭에서 조건에 맞을 때 블럭을 실행하도록 하는 것이 더 좋다! 
}


// First-class function
// functions are treated like any variable 펑션은 다른 변수와 마찬가지로
// can be assigned as a value to variable  변수에 할당되고
// can be passed as an argument to other functions. 펑션에 파라미터로 전달되며
// can be returned by another function 리턴값으로 리턴이 된다

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hosisted)
// 함수가 선언되기 이전에도 호출이 가능하다
// a functiob expressin is created when the excution reaches it. 

const print = function () { // anonymous function 이름이 없는 함수
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));


// 2. Callback fucntion using function expression 
function randomQuiz(answer, printYes, printNo) { // 정답, 정답이 맞으면 호출, 정답이 틀리면 호출
    if(answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log('yes!');
};
// named function
// better debugging in debugger's stack trass 디버깅 할 때 디버깅 스택에 함수 이름이 나오게 하기 위해 쓴다 
// recursions
const printNo = function print() {
    console.log('no!');
    //print(); 또는 함수 안에 또 다른 함수를 호출하기 위해 하는건데... 하지마세요... 
}
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);


// 3. Arrow function 함수를 간결하게 만들어주는 아주 좋은 아이 ~ 
// always anonymous 항상 anonymous function입니다. 

// const simplePrint = function () {
//     console.log('simplePrint!');
// };
const simplePrint = () => console.log('simplePrint!');

// const add = functiob (a, b) {
//  return a + b;
// };
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};


// 4. IIEE : Immediately Invoked Function Expression
// (이렇게 괄호를 넣어주면) 선언함과 동시에 호출됩니다. 

function hello () {
    console.log('IIEE');
}
hello();

(function hello() {
    console.log('IIEE');
})();


// Quiz 
// function calculate(command, a, b)
// command: add, substrack, divide, multiply, remainder 

function calculat(command, a, b){
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'devide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unkonwn command');
    }
}
console.log(calculat('add', 2, 3));