// 01. make a string out of an array
// = 주어진 배열을 string으로 반환하라 
{
const fruits = ['apple', 'banana', 'orange']; 
const result = fruits.join('|');
console.log(result);
}
// join(separator?: string): string;
// *?: 전달해도 되고, 전달하지 않아도 된다. 
// = join('문자열); 
// Adds all the elements of an array into a string, separated by the specified separator string.
// = 배열에 있는 모든 아이를 전달해준 separator이라는 문자열을 통해서 각각 구분자를 넣어 string으로 반환한다. 

// 02. make an array out of a string
// = 주어진 string을 array로 반환하라. 
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',', 2);
  console.log(result);
}
// split(separator: string | RegExp, limit?: number): string[];
// = split('문자열', 반환할 갯수_앞에서부터 출력)
// Split a string into substrings using the specified separator and return them as an array.
// = string을 전달된 string이거나 RegExp이어야하는 separator를 받아와서 여러가지 문자열로 잘게 나누어 반환한다.  


// 03. make this array look like this: [5, 4, 3, 2, 1]
// 주어진 배열의 순서를 거꾸로 반환하라. 
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);
}
// reverse(): T[];
// Reverses the elements in an array in place.
// = 주어진 배열 자체를 거꾸로 만들어 반환시킴. 


// 04. make new array without the first two elements
// = 주어진 배열에서 첫번째와 두번째 엘리먼트를 제외한 새로운 배열을 만들어라.
{
  const array = [1, 2, 3, 4, 5];
  // const result = array.splice(0, 2);
  // console.log(result); 삭제된 1,2 출력
  // console.log(array); 1,2가 삭제된 3,4,5 출력
  const result = array.slice(2, 5); 
  console.log(result); //새로 만들어진 배열인 3,4,5 출력
  console.log(array); // 여전히 동일한 1,2,3,4,5 출력 
}
// splice(start: number, deleteCount?: number): T[];
// = 배열에서 어디에서부터 몇개를 지울건지 얘기하면 그 부분을 삭제해주는 API. 

// slice(start?: number, end?: number): T[];
// = slice(배열의 시작하는 인덱스, 어디까지 할 건지 지정하는 인덱스)
// 배열에서 원하는 부분만 반환하는 API. start와 end라는 것을 이용하여 지정. 
// @param end The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. 
// = 0부터 2까지라고 지정하게 되면, 마지막은 배제가 되어 0과 1까지만 전달되는 것.8


class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88)
];

// 05. find a student with the score 90 
{
  // const result = students.find(function (student, index) {
  //   return student.score === 90;
  // });
  const result = students.find((student) => student.score === 90);
  console.log(result);
}
// find<S extends T>(predicate: (this: void, value: T, index: number, obj: T[]) => value is S, thisArg?: any): S | undefined;
// = find((obj) => obj.index === 조건);
// Returns the value of the first element in the array where predicate is true, and undefined
// = 첫번째로 찾아진 요소를 반환한다. 전달된 콜백함수가 참일 때 반환하며, 찾지 못할 경우 undefined을 반환한다. 


// 06. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}
// filter<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any): S[];
// filter((콜백함수) => 함수.조건); 
// Returns the elements of an array that meet the condition specified in a callback function.
// = 콜백 함수를 전달해서 참인 아이들만 새로운 배열을 반환하는 API. 


// 07. make an array containing only the students' scores result should be: [45, 80, 90, 66, 88]; 
{
  const result = students.map((student) => student.score);
  console.log(result);
}
// map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
// map((콜백함수) => 함수.조건)
// Calls a defined callback function on each element of an array, and returns an array that contains the results.
// = 배열 안에 들어있는 모든 요소에 콜백 함수를 호출하여 각각의 요소들을 함수를 거친 새로운 값으로 변환해주는 것. 
// *콜백함수는 최대한 이해하기 쉽게 쓰는 것이 중요! 


// 08. check if there is a student with the score lower than 50 
{
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = students.every((student) => student.score < 50);
  console.log(result2); 
}
// some(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
// some((콜백함수) => 함수.조건); 
// 배열의 요소 중 콜백함수의 반환이 참인 아이가 있는지 없는지를 확인. 있으면 true  

// every(predicate: (value: T, index: number, array: T[]) => unknown, thisArg?: any): boolean;
// 모든 요소들이 조건을 충족해야지만 true. 


// 09. compute students 평균 점수를 구하라.
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
} 
// reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
// = 콜백함수를 전달하고 또는 이니셜 밸류를 전달할 수도 있다. 
// reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue: T): T;
// *previousValue: 이전에 콜백함수에서 리턴된 값이 전달된다.
// *currentValue: 배열의 아이템을 순차적으로 전달받는다. 
// Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
// 콜백함수는 배열 안에 들어있는 모든 요소마다 호출이 된다. 리턴되는 값은 함께 누적된 결과값을 반환한다. 
// reduceRight. 배열의 끝에서부터 들어있는 모든 요소마다 콜백함수 호출.


// 10. make a string containing all the scores result shold be: '45, 80, 90, 66, 88'
{
  const result = students
  .map(student => student.score)
  .filter(score => score >= 50)
  .join();
  console.log(result);
}
// API를 섞어서도 사용 가능하다. 


// Bonus. do Q10 sorted in ascending order result should be: '45, 66, 80, 88, 90'
{
  const result = students.map(student => student.score)
  .sort((a, b) => a - b)
  .join();
  console.log(result);
}
// sort(compareFn?: (a: T, b: T) => number): this;
// 콜백 함수에는 이전값과 현재값이 전달이 되는데, 만약 -값을 리턴하게 되면 첫번째 값이 두번째 값보다 작다고 간주되어 전달이 된다.  