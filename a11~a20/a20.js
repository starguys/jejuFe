/*
문제20: 몫과 나머지

공백으로 구분하여 두 숫자가 주어집니다.
두번쨰 숫자로 첫번쨰 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

입출력

입력 : 10 2
출력 : 5 0

*/

const num = ["10", "2"];

let result = [];

result[0] = num[0] / num[1];
result[1] = num[0] % num[1];

console.log(result);
