let str = "ABC";

//split('') 문자열 쪼개서 배열로 '' 공백을 넣어서 다 쪼개서 넣어줌
str = str.split("");
console.log(str); // ['A','B','C']

//reverse() 베열을 뒤집어줌
str = str.reverse();
console.log(str); // [ 'C', 'B', 'A' ]

//join('') 배열을 쪼개서 문자열로 만들어줌 '' 공백을 넣어서 다 쪼개서 넣어줌
str = str.join("");
console.log(str); // CBA

//
//
//
//

let num = 8.2;

//Math.fllor(num) 주어진 값보다 이하의 가장 큰 정수를 반환해줌.
num = Math.floor(num);
console.log(num); // 8

let num2 = ["2", "6"];

//Math.pow(a, b) a를 b만큼 제곱해줌
num2 = Math.pow(num2[0], num2[1]);
console.log(num2); // 64

//set 이란 중복되지 않는 데이터를 저장하는 데이터 구조

const list = [1, 2, 2, 3, 4, 5, 5, 5, 6];

let setVal = new Set(list);
console.log(setVal); // Set(6) { 1, 2, 3, 4, 5, 6 }
