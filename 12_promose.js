'use strict'; 

// Promise 개념 
// 비동기를 간편하게 처리할 수 있도록 도와주는 Obj. 
// 정해진 장시간의 기능을 수행하고 나서 정상적으로 기능이 수행이 되어졌다면 성공의 메시지와 처리된 결과값을 보여주고, 처리하다가 예상치 못한 문제가 발생했다면 Error를 전달한다. 
// ex) 강의가 오픈되면 메일로 보내주는 시스템이 있다고 하자.
// A는 오픈 전 등록했다.(Promise에 등록했다) > 시간이 지나고 오픈되면 메일이 보내진다.(Promise가 성공적으로 값을 전달함)
// B는 이미 오픈된 후 뒤늦게 등록을 했다.(이미 성공적으로 처리된 Promise) > 바로 메일이 보내진다. 

// Promise is a JavaScript object for asynchronous operation. 
// = Promise는 비동기적인 것을 수행할 때 콜백함수 대신 유용하게 쓸 수 있는, 자스 안에 내장되어 있는 Obj.

// 공부 Point.
// 1. state: pending -> fulfilled or rejected 
// = Process가 무거운 operation을 수행하고 있는 중인지, 아니면 기능 수행이 완료가 되어서 성공했는지, 실패했는지.  
// = state 상태에 대한 이해.
// 2. producer vs consumer: 정보를 제공하는 producer과 정보를 소비하는 consumer의 차이점을 이해하자.
// = 원하는 기능을 수행해서 해당하는 데이터를 만들어내는 producer(=Promise)와 원하는 데이터를 소비하는 consumer로 나뉜다.


// 1. Producer. 
// when new Promise is created, the excutor runs automatically.
// = 새로운 Promise가 만들어질 때는 전달한 excutor 콜백 함수가 자동적으로 바로 실행된다!  
const promise = new Promise((resolve, reject) => { // 기능을 정상적으로 수행해서 최종 데이터를 전달하는 resolve 콜백 함수, 기능을 수행하다가 문제가 생기면 호출하는 reject 콜백 함수.  
    // doing some heavy work (network, read files) 시간이 걸리는 데이터를 동기적 요소로 처리하면 페이지 로딩이 길어지기 때문에, 시간이 걸리는 일은 Promise로 만들어서 비동기적으로 처리하는 것이 좋다! 
    console.log('doing something...'); //Promise가 만들어지는 순간 콜백 함수 수행!
    setTimeout(() => {
        resolve('dahye'); //데이터를 받아왔는데 사용자이름은 dahye였어. 성공적으로 네트워크에서 받아온or파일에서 읽어온 데이터를 resolve라는 콜백 함수를 통해 전달
        // reject(new Error('no network')); 잡히지 않은 에러가 발생 -> 정상적으로 수행했을 때만을 가정한 then만 지정했기 떄문 -> catch로 에러 발생을 가정했다면? Error 메시지 정상적으로 노출. 
         //*Error: 자스에서 제공하는 Obj. 무언가 Error가 발생했다는 것을 나타내는 Obj. Error Obj에는 어떤 Error가 발생했는지 이유를 잘 적어둬야.
    }, 2000);
});


// 2. Promise 사용하기 - Cosumers: then, catch, finally
promise //값이 정상적으로 수행이 된다면
    .then(  //값을 받아올거야
        value => { //resolve를 통해 정상적으로 들어온 dahye가 들어오게 됨 
        console.log(value);
    })
    // => then: promise가 정상적으로 잘 수행이 되어서 최종적으로 resolve라는 콜백함수를 통해 전달한 값이 value의 파라미터로 전달. 
    .catch(error => { //catcj를 통해 error가 발생하면 어떻게 처리할건지 콜백함수 등록.
        console.log(error);
    })
    // => then을 호출하게 되면 Promise가 리턴되고, return된 promise에 catch를 등록하는 것. 
    .finally(() => { //성공, 실패 여부와 상관 없이 무조건 마지막에 호출
        console.log('finally');
    });
    // => 성공했다면 then 함수가, 실패했다면 catch함수가 실행된 후 마지막에 finally 실행 


    // 3. Promise chaining = Promise 연결하기 
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000); //1초 있다가 숫자 1 전달 
});

fetchNumber
.then(num => num * 2) //전달된 숫자에 2를 곱하고 -> 2
.then(num => num * 3) //그 숫자에 3을 곱하고 -> 6
.then(num => { //그 숫자를 다른 서버에 보내서 다른 숫자로 변환된 값을 받는다 
    return new Promise((resolve, reject) => { //새로운 Promise를 return한다. 이 Promise는 다른 서버와 통신한다
        setTimeout(() => resolve(num - 1), 1000); //숫자에 1을 뺀 값을 다시 resolve를 통해 전달 -> 5
    });
})
// => then은 값을 바로 전달할 수도 있고, promise를 전달할 수도 있다. 
// => then을 묶어서 비동기적인 아이를 처리할 수도 있다. 
.then(num => console.log(num)); //5 -> 2초 뒤에 출력 


// 4. Error Handling
// 다음은 총 3가지의 Promise를 반환하는 함수이다.
const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('닭'), 1000);
    }); // => 1초 있다가 닭을 반환 
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${hen} => 달걀`), 1000);
        //setTimeout(() => reject(new Error (`error! ${hen} => 달걀`)), 1000); 
    }); // => 닭을 받아와서 그 닭으로부터 달걀을 반환 
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => 달걀프라이`), 1000);
    }); // => 달걀을 받아와서 그 달걀으로 달걀 프라이를 반환

getHen() //
//.then(hen => getEgg(hen)) 콜백함수를 전달할 때 받아오는 value를 다른 함수로 호출하는 경우, 생략이 가능하다.  = 한가지만 받아서 그대로 전달하는 경우 생략이 가능. 
.then(getEgg) //then에서 받아오는 value를 바로 getEgg에 전달
.catch(error => { //전달되어진 error를 잘 처리해서
    return '빵'; //빵으로 대체해서 반환
}) // => getEgg에 문제가 생겨도 전체적인 promise에 문제가 생기지 않도록 처리
//.then(egg => cook(egg))
.then(cook)
//.then(meal => console.log(meal))
.then(console.log)
.catch(console.log); //error가 발생했을 때 catch 실행 