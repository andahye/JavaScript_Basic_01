'use srtict';

// JavaScript is synchronous. = 동기적인 아이다. 
// Excute the code block in order after hoistiong. = hoistiong이 된 이후부터 코드는 우리가 작성한 순서에 맞춰 하나하나 동기적으로 실행된다. 
// hoising: var, function declaration. var 변수나 함수 선언들은 자동적으로 가장 위로 선언된다.
console.log('1'); // 동기 -> 1번째 출력 
setTimeout(() => console.log('2'), 1000); // 비동기 -> 브라우저로 요청 -> 1초(=지정한 시간만큼) 뒤 실행 
// *setTimeout: 브라우저에서 제공되는 API. 지정한 시간이 지나면 전달한 콜백함수를 호출. 
// Timehandler라는 콜백함수를 전달해주고, timeout=어느 정도 시간을 timeout할 건지 시간을 지정해주는 인자가 있다.
// => 브라우저API네? 브라우저야, 너에게 요청이 왔어. 이 콜백함수 좀 실행해줘! = 무조건 브라우저에게 먼저 요청을 보낸다
// -> 어, 1초 지났어. 이 콜백함수 실행해! 하면 그때 2가 출력된다. 
// *Callback: 나중에 다시 불러줘(실행해줘)! 하는 함수들. Arrow function으로 간단하게 작성 가능. 
console.log('3'); // 동기 -> 2번째 출력 

// -> 그러면 콜백 함수는 비동기일 때만 쓰나요? NO! 콜백에도 동기, 비동기가 있다. 

// Synchronous callback 동기적으로, 즉 즉각적으로 실행되는 콜백. 
function printImmediately(print) { //printImmediately라는 함수를 만들어서 (print하는 콜백을 받아서)
    print(); //실행!
}
printImmediately(()=> console.log('hello')); // 동기 -> 3번째로 출력

// Asynchronous callback 비동기 콜백
function printWithDelay(print, timeout) { //(print와 얼마정도 timeout하고 싶은지에 대한 콜백)
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000); // 비동기 -> 2초 뒤 출력 
// = 함수의 선언을 hoising -> 1동기 출력 -> 2동기 출력 -> 3동기 출력 -> 1비동기 출력  -> 2비동기 출력


// Callback Hell example
// *콜백 지옥: 콜백 함수들을 계속해서 묶고 부르는 함수. 
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => { //이 코드 블럭이 실행되는데
            if (
                (id === 'dahye' && password === 'dream') || //id가 dahye이고 password가 dream이거나
                (id === 'coder' && password === 'academy') //id가 coder이고 password가 academy라면 
            ) {
                onSuccess(id); //onSuccess라는 콜백을 불러주는데, 이것은 id를 전달해준다.
            } else { //아니라면 
                onError(new Error('not found')); //onError라는 콜백을 불러주는데, Error라는 Obj를 만들어 'not found'를 전달한다 
            }
        }, 2000); //2초 뒤에
    }
    getRoles(user, onSuccess, onError) { //원래는! 백엔드영역이 맞습니다. 그러나 공부를 위한 예시로 생각합시다.
        setTimeout(() => { //이 코드 블럭이 실행되는데
            if (user === 'dahye') { //user가 dahye라면
                onSuccess({ name: 'dahye', role: 'admin'}); //onSuccess를 호출하면서 name이 dahye이고 role은 admin인 obj 전달
            } else { //아니라면
                onError(new Error('no access')); //onError라는 콜백을 불러주는데, Error라는 Obj를 만들어 'no access'를 전달한다.
            }
        }, 1000); //1초뒤에

    }
}

// 1. ID와 PASSWORD를 받아온다. 
// 2. 입력 받은 정보를 통해 서버에 로그인한다.
// 3. 로그인에 성공했다면 id를 다시 받아오고, 받아온 id를 이용해 role을 다시 요청해서 받아온다.
// 4. 역할이 받아와진다면 사용자의 Obj를 출력한다. 

const userStorage = new UserStorage(); //class니까 new를 이용하여 생성 
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password, 
    user => { //성공해서 user(의 아이디를) 받아올 때 처리해야 하는 코드 블럭 
        userStorage.getRoles( //userStorage(사용자)의 role을 받아온다 
            user,
            userWithRole => { //사용자의 role를 잘 받아왔을 때 실행 
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => { //role을 받아오지 못했을 때 실행 
                console.log(error);
            }
        );
    },
    error => { //사용자를 받아오는 것에 실패해서 error가 전달될 때 실행되는 코드 블럭 
        console.log(error);
    }
);

// 콜백 체인의 문제점
// 콜백 함수 안에서 다른 것을 호출하고, 그 안에서 또 다른 콜백을 전달하고, 호출하고, 전달하고... = 콜백 지옥! 
// 가독성이 떨어진다. 
// 비즈니스 로직을 이해하기 어렵다.
// 디버깅을 해야하는 경우 굉장히 어렵다. 
// 유지보수도 어렵다. 
