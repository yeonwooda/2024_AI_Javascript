// 1. 어떤 숫자를 넣으면 홀수인지 짝수인지 돌려주는 함수 만들기

const num = Number(prompt("숫자를 입력하시오"));

if (num % 2 == 1) {
  console.log("홀수입니다");
} else {
  console.log("짝수입니다.");
}

// == 강사 코드
function oddEven(x) {
  return x % 1 == 1 ? "홀수" : "짝수";
}

// 2. 어떤 숫자를 넣으면 5의 배수이면 5의 배수 아니면 5의 배수가 아님을 함수 만들기

const num2 = Number(prompt("숫자를 입력하시오"));

if (num2 % 5 === 0) {
  console.log("5의 배수");
} else {
  console.log("5의 배수가 아님");
}

// 강사 코드
function isFiveTime(x) {
  return x % 5 == 0 ? "5의 배수" : "5의 배수 아님";
}

// 3. 어떤 숫자를 넣으면 1 - 일반 팝콘, 2 - 카라멜 팝콘, 3 - 치즈 팝콘, 그 외는 그런거 없음  돌려주는 함수

const num3 = Number(prompt("숫자를 입력하시오"));

// output이 없는 근데 출력까지 하는
// 이 함수는 순수성에 의배 (출력까지 해버리는), 함수는 자기 역할만
if (num3 === 1) {
  console.log("일반 팝콘");
} else if (num3 === 2) {
  console.log("카라멜 팝콘");
} else if (num3 === 3) {
  console.log("치즈 팝콘");
} else {
  console.log("그런거 없음");
}

// == 강사 코드
//  output이 있는(String)
function popcorn(x) {
  if (x == 1) {
    return "일반 팝콘";
  } else if (x == 2) {
    return "캬라멜 팝콘";
  } else {
    return "그런 팝콘 없음";
  }
}

function popconrn2(x) {
  return `${x} 팝콘`;
}

// 4. 어떤한 문자열 3개 넣으면 배열로 돌려주는 함수 ex) 사탕, 떡볶이, 멜론 => [사탕, 떡볶이, 멜론]

const num4 = prompt("단어 3개를 입력하시오");

console.log([num4]);

// == 강사 코드
function stringToArray(a, b, c) {
  return [a, b, c];
}

// 어떠한 과일이름을 넣으면  ~~맛 아이스크림을 돌려주는 함수
function fruit(x) {
  return `${x}맛 아이스크림`;
}

const a = fruit("민트");
console.log(a);

// 배열을 돌려주는 함수
function fruitArray(a, b, c) {
  return [a, b, c];
}

function oddEven1(x) {
  if (x % 2 == 1) {
    return true;
  } else {
    return false;
  }
}

// 요약
function oddEven2(x) {
  return x % 2 == 1;
}
