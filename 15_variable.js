
// 변수(variable)
// 처리해야 하는 데이터를 담을 수 있도록 도와주는 아이. 즉, 데이터를 담고 있는 아이. 
// -> 변수를 통해 데이터에 접근하고 업데이트할 수 있다. 

// 변수의 생성: let 변수이름
// 변수이름은 자유이나, 로직과 연관된 의미있는 이름을 지정하는 것이 좋다.
let num = 2;
let stringNum = '2';
// => 이와 같이 가장 작은 단위의 데이터가 primitive 데이터 타입. 
// 가장 작은 데이터? number, string, boolean, null, undefined + symbol

let number = 3;
// 변수를 선언하는 동시에 메모리에 변수를 위한 공간이 생기고, 그 공간 안에 데이터가 적재된다. 
let number2 = number;
// number2는 number에 있는 데이터를 그대로 복사해서 할당하게 된다. 
console.log(number);
console.log(number2);

number2 = 4; 
// number2에 4를 업데이트 -> number2를 위한 공간에 숫자 3 대신 4가 업데이트 됨. 
console.log(number); //3
console.log(number2); //4


// 2. Object
// '가장 작은 데이터'를 제외한 모~든 데이터 타입: array, list, function...  
// 다양한 데이터를 한군데에 묶어놓은 아이. 
// 적어도 한두가지의 큰 데이터가 들어있기 때문에 단순히 변수를 선언하는 공간에 담아놓을 수 없다. 
// -> Obj를 담는 별도의 공간이 있고, obj를 선언하게 되면 obj에는 이 공간을 가르키는 주소가 적재된다. 

let obj = { //obj라는 오브젝트에는
    name: 'dahye', //name이라는 변수에는 dahye라는 value가 들어가있고
    age: 5, //age라는 변수에는 5라는 value가 들어가있다
};
//메모리에 obj를 위한 공간이 생기고, 그 공간안에 obj를 가르키는 주소(reference)가 적재된다.
console.log(obj.name);

let obj2 = obj; //obj가 '가르키고 있는 주소'가 obj2에 복사됨  
console.log(obj2.name); //obj가 가지고 있는 것을 출력하게 됨 
// 변수는 '데이터' 자체를 복사하지만, Obj는 '가르키고 있는 주소'가 복사된다. 

obj.name = 'james'; //obj의 name을 james로 업데이트 -> obj의 reference 속 데이터가 업데이트
console.log('-----'); 
console.log(obj.name); //james
console.log(obj2.name); //james
// => obj, obj2 결국 가르키고 있는 obj가 동일하기 때문에, 어떤 곳을 통해서 변경해도 둘 다 변경된 것이 보인다! 


// 총정리
// Obj처럼 뚱뚱한 아이는 들어올 수 없기 때문에, 할당된 Obj를 가르키는 주소(reference)
// primitive 데이터 타입의 변수는 데이터 자체가 복사되지만, Obj는 reference만 복사된다.
// -> let으로 선언한 primitive 변수의 데이터를 업데이트하면 '데이터 자체'가 업데이트 된다. 
// -> Obj를 통해서 데이터를 변경하면 Obj가 가르키고 있는 reference 속 데이터가 변경된다. 

// But, Obj는 const로 지정했는데도 obj.name = 'james';으로 하면 왜 변해요? const는 절대 변할 수 없다면서요!
const objA = {
    name: 'dahye',
    age: 5,
}; // const로 obj를 선언하면 obj를 위한 공간이 잠기게 되기 때문에, obj 변수에는 다른 값이 할당이 되지 않는다. 
// objA = {
//     name: 'james',
//     age: 7;
// } -> 그래서, 이렇게 직접 변수를 업데이트하면 에러가 출력된다. 
obj.name = 'James'; 
// 그러나! obj에는 reference가 들어있기 때문에, 다른 obj로 변경은 불가하지만 reference가 가르키고 있는 안의 내용은 변경이 가능하다! 