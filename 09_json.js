// 브라우저 위에서 동작하고 있는 웹 사이트나 웹 어플리케이션과 같은 Client들이 어떻게 서버와 통신할 수 있는지를 정의한 것이 HTTP(Hypertext Transfer Protocal=어떻게 Hypertext를 Transfer할지 규약한 프로토콜의 하나.)
// Client - request -> Server
//        <- response -  
// > HTTP를 이용해서 서버에게 데이터를 요청해서 받아올 수 있는 방법으로 AJAX(Asynchronous JavaScript And XML)를 썼었다. 이중 하나는 XHR(XML Http Request)
// Client <-      XHR    ->  Server
//        <- fetch() API ->
// > 불필요한 태그가 많고, 가독성이 좋지 않아 XML은 거의 쓰지 않고, JSON(JavaScript Object Notation)을 많이 사용한다. 
// 자바스크립트 Object처럼 {key: value}로 이루어져 있다. 
// 데이터를 주고 받을 때 쓸 수 있는 가장 간단한 포맷
// 텍스트를 기반으로 하여 가벼움
// 가독성이 좋음
// key와 value로 이루어짐
// 데이터를 서버와 주고 받을 때 직렬화를 위하여 쓴다. 
// 프로그래밍 언어, 플랫폼에 상관없이 쓸 수 있다! > C언어, C#, JAVA 등에 상관 없이 거의 대부분의 언어들을 JSON의 언어로 직렬화한다.
// rabbit Client - rabbit{key: value} ->  Server
//              <- rabbit{key: value} -
// => 공부 포인트: Object를 어떻게 serialize, 즉 직렬화하여 변환할지,
// 직렬화된 JSON을 어떻게 deserialize해서 Object로 어떻게 다시 변환할건지!! 

// *오버로딩(Overloading): 함수의 이름은 동일하지만 어떤 파라미터를 전달하냐, 몇 개의 파라미터를 전달하냐에 따라서 각각 다른 방식으로 호출이 가능.  

// 01. Object to JSON
// stringify(obj)
// stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
// = 어떤 타입의 obj를 받아와서 string으로 변환해준다. 조금 더 세밀하게 통제하고 싶다면 콜백 함수 replacer를 전달하면 조금 더 통제하며 string을 만들 수 있다. 

let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json); // ["apple", "banana"]

const rabbit = { // -> rabbit라는 JSON을 Obj로 변환할 때는 함수가 포함되지 않았다. 
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  // Symbol: Symbol("id"), 자스에만 있는 date도 포함되지X 
  jump: () => {
    console.log(`${this.name} can jump!`);
  }, // json에 포함되지 않음. <- obj에 있는 date가 아니기 때문에!
};

json = JSON.stringify(rabbit); // JSON을 Obj로 변환 -> Jump라는 메소드는 포함X
console.log(json);

json = JSON.stringify(rabbit, ["name"]);
console.log(json); // {"name":"tori"} => 내가 원하는 prompoty만 골라서 정의하면 해당 date만 전환된다. 

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'dahye': value;
  // key에 이름이 들어오면 dahye로 설정하고, 아니면 오리지널 value를 써야지! -> 이처럼 콜백 함수를 통해 더 자세하게 통제 가능. 
});
console.log(json);


// 02. JSON to Object 
// parse(json)
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
  // = key가 birthDate면 Date라는 obj를 만들거고, 만약 아니면 원래 value를 쓸거야. 
});
console.log(json);
rabbit.jump();
// obj.jump(); -> 그래서, Obj의 jump를 소환하면 에러가 나는 것. 

console.log(rabbit.birthDate.getDate()); // rabbit JSON의 birthDate 함수를 실행시키면 -> 출력됨. 
// console.log(obj.birthDate.getDate()); But JSON으로부터 만든 Obj의 birthDate 함수를 실행시키면 -> error! birthDate는 String이기 때문. JSON으로 만든 데이터 그 자체에 있는 string이 Obj에 할당된 것. 
// -> 이것을 세밀하게 Obj로 변환하고 싶을 때? 콜백함수를 이용하자!  
console.log(obj.birthDate.getDate()); 

// parse(text: string, reviver?: (this: any, key: string, value: any) => any): any;
// = JSON의 string data를 넣으면 어떤 type의 obj로 변환이 되고, optional type의 콜백 함수 reviver가 있는데, 이것은 결과값을 변형한다. 
// => string을 obj로 변환할 때 obj가 만들어지는 과정을 조금 더 세밀하게 조정하고 싶다면 reviver 함수를 이용하면 된다.  


// 유용한 사이트들
// JSON Diff: 첫번째로 받아온 데이터와 두번째로 받아온 데이터를 비교할 때 좋음. 문제를 디버깅할 때 유용.
// JSON Beautifier:  복붙한 코드가 망가졌을 때 포멧 정리.
// JSON Parser: JSON type을 obj로 표기해줌
// JSON Validator: JSON이 이상할 때 오류를 확인하는 용도로 유용. 

