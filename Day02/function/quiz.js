// // 1. para: x return: hello x님!
function hello(x) {
  return `hello ${x}님`;
}

// // 2. para: x return: ~핑!
function ping(x) {
  return `${x}핑!`;
}

// 3. para: x return: ~~이라니 러키비키잖아!

function luck(x) {
  return `${x} 럭키비키잖아`;
}

// // 4. 두 숫자를 주면 제곱을 돌려주는 함수

function sum(v, i) {
  return v ** i;
}

// 5. 년도, 월, 일을 넣으면 오늘은 ~년도 ~월 ~일
function today(year, month, day) {
  return `오늘은 ${year}년도 ${month}월 ${day}일`;
}

// 6. mbti (ei,sn,tf,jp)를 넣으면 외향적/내향적, 감각적/직관적,이상적/감성적, 계획적/즉흥적

// const first = window.prompt("E OR I ");
// const second = window.prompt("N OR S");
// const third = window.prompt("T OR F");
// const fourth = window.prompt("J OR P");

// const mbti = {
//   e: "외향적",
//   i: "내향적",
//   s: "감각적",
//   n: "직관적",
//   t: "이상적",
//   f: "감성적",
//   j: "계획적",
//   p: "즉흥적",
// };

// console.log(
//   `당신은 ${mbti[first]} ${mbti[second]} ${mbti[third]} ${mbti[fourth]}`
// );

function mbti(a, b, c, d) {
  const mbtiMap = {
    e: "외향적",
    i: "내향적",
    s: "감각적",
    n: "직관적",
    t: "이상적",
    f: "감성적",
    j: "계획적",
    p: "즉흥적",
  };
  return `${mbtiMap[a]}  ${mbtiMap[b]} ${mbtiMap[c]} ${mbtiMap[d]}`;
}

// 7. zodica 태어난년도를 넣으면 띠 돌려주기
const year = Number(prompt("태어난 년도를 알려주세요"));

const zodica = year % 12;

const animal = {
  0: "원숭이",
  1: "닭",
  2: "개",
  3: "돼지",
  4: "쥐",
  5: "소",
  6: "호랑이",
  7: "토끼",
  8: "용",
  9: "뱀",
  10: "말",
  11: "양",
};

console.log(`${animal[zodica]}`);

function zodica1(year) {
  const target = year % 12;
  const animal1 = {
    0: "원숭이",
    1: "닭",
    2: "개",
    3: "돼지",
    4: "쥐",
    5: "소",
    6: "호랑이",
    7: "토끼",
    8: "용",
    9: "뱀",
    10: "말",
    11: "양",
  };
  return `${animal1[target]}띠`;
}
