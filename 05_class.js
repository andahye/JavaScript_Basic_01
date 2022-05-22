'use strict';
// Object-oriented programming

// class 
// class person { person이라는 class에는?
// name; age; => 속성(field) 
// speak(); => 행동(method)
//} => class = field + methods
// 간혹 field만 들어있는 경우도 있다 = data class
// * 만들어진 것들(모바일 앱, 쇼핑몰...)을 보며 어떻게 class를 지정할 수 있을지 생각해보는 훈련을 해봅시다.

// class : 붕어빵틀
// template
// declare once 이런 템플릿에는 이런이런것만 들어올 수 있어, 라고 정의해놓고 한번만 선언.
// no data in 

// object : 팥붕 슈붕 피붕
// instancs of a class 클래스의 새로운 instancs
// created many times object를 통해 많은 것들을 만들어낼 수 있다
// data in 실제로 데이터를 넣어 Object가 메모리에 들어가게 된다
// => 붕어빵이라는 class에 팥을 넣으면 팥붕object

// javaScript classes 
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance 기존의 prototype을 베이스로 하여 문법만 추가된 것=syntactical sugar. 문법상으로 달달한, 가짜의 편리함을 제공하는 것.


// 1. Class declarations 클래스 선언
class Person {
    // constructor 생성자
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const dahye = new Person('dahye', 20); 
//새로운 object를 만들때는 new
console.log(dahye.name);
console.log(dahye.age);
dahye.speak();



// 2. Getter and setters
// class = 커피 자판기, 커피 잔수 = 출력되는 결과
// 자판기에 동전을 넣어 커피를 n잔 뽑아야 한다. 그런데, 커피잔수를 -n으로 하는 것이 맞나?
// -> 그래서! Getter and setters가 있다. 사용자가 -n을 쓴다 해도 -n으로 출력되지 않도록.
// 그런데, 멋대로 바꾸면 사용자의 기분이 나쁘므로 Private하게 만드는 것. 이게 바로 캡슐화!

class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() { // get으로 getter를 설정하고
        //get을 설정하는 순간 this.age는 getter를 호출하게 된다. 
        return this._age;
    }

    set age(value) { // set으로 값을 설정하자. 단 값을 설정하는 것이므로 value를 받아와야 한다. 
        //setter를 정의하는 순간 =age;를 호출할 때, 즉 값을 할당 할때 setter를 호출하게 된다.
        // 이렇게 되면, set age(value)와 this.age = value가 계속 호출되며 반복된다. 
        // 이것을 방지하기 위해 getter와 setter 속 변수의 이름을 조금 다르게 만들어줘야 한다. 
        // 보통은 _.age 이런 식으로 기호를 이용하여 다르게 만들어줍니다. 

        // if (value < 0) {
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value; //value가 0보다 작다면 ? 0을 써주고 : 아니면 지정된 value를 쓸게.
    }
}

const user1 = new User('Steve', 'Job', -1); //앗, 사용자가 실수로 사람의 나이를 -n으로 써버렸다. 
console.log(user1.age); // _age로 지정했지만 age로도 호출할 수 있는 이유=get과 set으로 설정했기 때문


// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
class Experiment {
    publicField = 2; // 그냥 설정하면 public, 즉 외부에서 접근 가능 
    #privateField = 0; // #를 붙이면 privateField가 된다. class 내부에서만 값이 보이고 변경 가능.
}
const experiment = new Experiment();
console.log(experiment.publicField); //2로 출력
console.log(experiment.privateField); //undefined로 출력




// 4. Static properties and methods 
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber ; 
    }

    static printPublisher() {
        console.log(Article.publisher); 
    }
}
// static은 object마다 할당되는 것이 아니라, class자체에 붙어있다.
// static을 붙이면 object에 상관없이 class 자체에 연결된다.

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// => object, 즉 들어오는 데이터에 상관없이 공통적으로 클래스에서 쓸 수 있는 거라면 Static을 사용하는 것이 메모리의 사용을 조금 더 줄여줄 수 있다.


// 5. Inheritance 상속과 다양성
// s way for one class to extend another class. 
class Shape { //Shape라는 class에는
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    } //width, height, color라는 3개의 fields와

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    } //draw, getArea라는 총 2개의 methods가 있다. 
}

class Rectangle extends Shape {} //Rectangle이라는 class를 만들건데, 여기에 Shape를 연장할거야. 
// extends라는 키워드를 이용헤서 Shape를 연장한다! 즉, extends를 이용하면 Rectangle에 Shape가 포함된다.

class Triangle extends Shape {
    draw() {
        super.draw();
        //super.함수(); = 부모에 들어와라! = 이것도 호출하고 밑에 있는 것도 호출해
        console.log('▲'); //앗 근데 이것때문에 Shape draw가 호출이 안되네. 어떡하지? -> super를 지정하자!
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
    //앗 A에서는 이렇게 쓰이는데 B에서는 이렇게 쓰고 싶어용 -> B에서만 수정 가능 = overwriting
    toString() {
        return `Triangle: color: ${this.color}`;
    }
    //B에서는 새로운걸 추가하고 싶어용 -> 가능한! 
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea()); //rectangle의 getArea, 즉 넓이를 구해봐 = 400.
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea()); //triangle의 getArea를 구해봐. 엥 근데 삼각형은 구하는 방법이 다르잖아! 어떡하지? => overwriting하자!



// 6. Class checking: instanceOf 
// (왼쪽에있는object가 instanceof 오른쪽에있는클래스)에 instance인지 아닌지, 
// 즉 이 object가 이 class를 통해 만들어졌는지 아닌지 확인
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object); // 자스의 모든 object는 object에 상속된 것. = t
console.log(triangle.toString()); //trinagle의 toString을 하고 싶어. 그런데 object object로 뜨네. 어떡하지? -> overwriting로 toString을 지정해주자.