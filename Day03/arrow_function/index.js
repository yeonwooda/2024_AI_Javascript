// Arrow Function
// 일반 함수 General Function [구 문법]
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

// Arrow Function [신 문법]
const add1 = (v, i) => {
  return v + i;
};

const subtract1 = (v, i) => {
  return v - i;
};

// ~ 과일 넣으면 ~맛 아이스크림 돌려주는 함수
const fruit = (x) => {
  return `${x}맛 아이스크림`;
};
// 문자 3개 넣으면 배열로 돌려주는 함수
const word = (x, v, i) => {
  return [x, v, i];
};
// 숫자 넣으면 홀수인지 짝수인지 알려주는 함수
const num = (v) => {
  return v % 2 == 0 ? "홀수" : "짝수";
};
