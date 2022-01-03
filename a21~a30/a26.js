/*
문제26: 행성 문제2

우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturm, Uranus, Neptune입니다.

행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.
*/

let iGoo = "지구";

let goo = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];
let EngGoo = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturm",
  "Uranus",
  "Neptune",
];

for (let i = 0; i < goo.length; i++) {
  if (iGoo === goo[i]) {
    console.log(EngGoo[i]);
  }
}
