
//CallBack Hell Handling

class UserStorage {
    loginUser(id, password) { //실행이 됐을때, 안됐을때를 따로 콜백함수로 지정할 필요가 없다.
        return new Promise((resolve, reject) => { //Promise를 반환하는데 
            setTimeout(() => { //로그인이 실행된다
                if (
                    (id === 'dahye' && password === 'dream') || //id가 dahye이고 password가 dream이거나
                    (id === 'coder' && password === 'academy') //id가 coder이고 password가 academy라면 
                ) {
                    resolve(id); //로그인이 잘 된다면 resolve를 부르고
                } else { //실패를 한다면
                    reject(new Error('not found')); //reject를 이용해서 eroor를 전해준다
                }
            }, 2000); //2초 뒤에
        });
    }
    getRoles(user) { 
        return new Promise((resolve, reject) => {
            setTimeout(() => { //이 코드 블럭이 실행되는데
                if (user === 'dahye') { //user가 dahye라면
                    resolve({ name: 'dahye', role: 'admin'}); //resolve를 호출하면서 name이 dahye이고 role은 admin인 obj 전달
                } else { //아니라면
                    reject(new Error('no access')); //reject를 불러오는데, Error라는 Obj를 만들어 'no access'를 전달한다.
                }
            }, 1000); //1초뒤에
        })
    }
}

const userStorage = new UserStorage(); //class니까 new를 이용하여 생성 
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage
.loginUser(id, password) //userStorage의.loginUser를 호출해서 (id와 password)를 호출하고 
.then(userStorage.getRoles) //잘 되면 userStorage안에 있는 getRoles를 호출하게 되고
.then(user => alert ()`Hello ${user.name}, you have a ${user.role} role`) //모든게 성공한다면 최종적으로 받아오는 user를 이용해서 alert창으로 출력
.catch(console.log); //문제가 생기면 console에 출력 
