// async & await  개념 설명
// promise을 더 간편하고 간결하게, 동기적으로 실행되는 것처럼 보이게 만들어주는 아이. 
// promise chaining을 하다보면 코드가 난잡해질 수 있는데 여기에 보다 간편한 API인 async, await를 사용하면 동기식으로 코드를 순서대로 작성하는 것처럼 간편하게 작성할 수 있게 도와준다. 
// 기존의 Promise 위에 조금 더 간편한 API를 제공한 것. 이렇게 기존에 존재한 것 위에 또는 기존에 존재하던 것을 감싸서 보다 간편하게 쓸 수 있는 API를 제공하는 것을 syntactic sugar라고 한다.

// 무조건 async&await를 쓰는 것이 좋은게 아님. 필요에 따라 promise를 써야할 때도, async&await를 써야할 때도 있다. 이건 프로젝트를 하며 터득해야 하는 것. 

// 1. async
// function fetchUser() { 2. 이 함수의 블럭 실행
  // do network reqeust in 10 secs... 10초 후에 실행되는 코드가 있다고 가정 -> 3. 10초동안 머무르고 있다가 데이터를 받아오는 것에 성공하면 
  // return 'dahye'; 'dahye' 반환
// }

// const user = fetchUser(); 1. fetchUser가 선언이 되었네? 
// -> 5. 반환된 코드가 넘어오고 
// console.log(user); -> 6. dahye 출력 
// => 뒤에 UI를 표시하는 기능을 수행하는 코드들이 있다면 이 코드가 끝나는 동안(10초 동안) UI가 표시되지 않기 때문에 사용자는 10초 정도 비어있는 웹 페이지만 보게 된다. 
// -> 이렇게 오래 걸리는 애들은 비동기적으로 처리할 수 있게 해줘야 한다. 이걸 가능하게 하는 것이 Promise 였죠! 

// function fetchUser() {
  // return new Promise((resolve, reject) => {
  // do network reqeust in 10 secs... 
  // resolve('dahye');
// })
// }
// -> 그런데 promise를 쓰지 않아도 간편하게 만들어주는 것이 async! 

async function fetchUser() {
  // do network reqeust in 10 secs...
return 'dahye';
}
// => async라는 키워드를 앞에 쓰면 {}이 바로 promise가 됩니다! 

const user = fetchUser();
user.then(console.log);
console.log(user);


// 2. await 기다려!
// await은 async가 붙은 함수 안에서만 쓸 수 있다. 
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
} // = delay라는 함수는 promise를 반환하는데, 정해진 ms가 지나면 resolve를 호출한다. 

async function getApple() {
  await delay(2000); //delay를 쓰면 2초가 끝날 때까지 기다려준다.
  // throw 'error'; throw를 이용하여 error 처리 가능
  return '사과';
} // => 2초 후 사과를 반환하는 Promise

// function pickFruits() {
//   return getApple()
//   .then(apple => {
//     return getBanana()
//     .then(banana => `${apple} + ${banana}`);
//   });
// } -> 이런 식으로 chaining을 하는 것보다 밑의 예시처럼 동기적으로 만들게 되면 더 쉽게 이해할 수 있다. 

async function getBanana() {
  await delay(1000);
  return '바나나';
} // => 1초 후 바나나를 반환하는 Promise 


// function pickFruits() {
//   return getApple().then(apple => {
//     return getBanana().then(banana => `${apple} + ${banana}`);
//   });
// } -> 이렇게 promise도 중첩적으로 chaining하면 콜백지옥과 비슷한 문제점이 발생.

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  // -> promise를 만드는 순간 코드가 바로 실행되는 것을 이용, 
  const apple = await applePromise; //1초가 지나고
  const banana = await bananaPromise; //1초가 또 소요된다. 
  // 바나나와 사과는 서로 연관이 되어있지 않기 때문에 서로 기다릴 필요가 전혀 없음. 
  // -> await를 이용하여 동기화. -> 1초만에 병렬적으로 실행
  return `${apple} + ${banana}`;
}
// -> 이렇게 동시다발적으로 수행이 가능한 경우, 사실 이렇게 코드를 작성하지 않는다!! 3번으로 넘어가자.

pickFruits().then(console.log);


// 3. useful Promise APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
  .then(fruits => fruits.join(' + ')
  );
}
pickAllFruits().then(console.log);
// Promise.all: promise배열을 전달하게 되면 모든 promise들이 병렬적으로 다 받을 때까지 모아주는 아이

function pickOnlyOne(){
  return Promise.race([getApple(), getBanana()]
  );
}
pickOnlyOne().then(console.log);
// Promise.race: 배열에 전달된 promise 중 가장 먼저 값을 반환하는 아이만 전달 
