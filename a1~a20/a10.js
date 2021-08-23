/* 문제10 : 별 찍기

입력 5

출력
    *
   ***
  *****
 *******
*********

*/

const level = 10;

for (let i = 1; i <= level; i++) {
  let tree = "";
  for (let k = 1; k < level - i + 1; k++) {
    tree = tree + " ";
  }
  for (let j = 1; j <= i * 2 - 1; j++) {
    tree = tree + "*";
  }
  console.log(tree);
}

// 1111*
// 111*
// 11*
// 1*
// *
// 1
// 3
// 5
// 7
// 9
