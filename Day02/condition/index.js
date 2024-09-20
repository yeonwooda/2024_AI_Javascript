// 조건문 (조건에 맞으면 코드 실행한다는 뜻)
// if-else문

// const num = Number(prompt("숫자입력"));

// if (num > 0) {
//   console.log("입력한 값은 양수");
// } else if (num == 0) {
//   console.log("0임");
// } else {
//   console.log("입력한 값은 음수");
// }

// console.log("프로그램 끝");

// 수학 시험 점수 프로그램
// 90 A 80 B 70 C 60 D 그 외는 수강철회

// const math = Number(prompt("수학점수 입력"));
// if (math >= 90) {
//   console.log("A");
// } else if (math >= 80) {
//   console.log("B");
// } else if (math >= 70) {
//   console.log("C");
// } else if (math >= 60) {
//   console.log("D");
// } else {
//   console.log("수강철회");
// }

// 숫자를 입력해서, 양의 홀수 ,양의 짝수, 0 , 음의 홀수, 음의 짝수 알려주기
// ex) -3 ->음의홀수, -4 -> 음의  짝수
const num = Number(prompt("숫자 입력"));

// if (num % 2 == 0 > 0) {
//   console.log("양의 짝수");
// } else if (num % 1 > 0) {
//   console.log("양의 홀수");
// } else if (num == 0) {
//   console.log(0);
// } else if (num % 2 < 0) {
//   console.log("음의 짝수");
// } else if (num % 1 < 0) {
//   console.log("음의 홀수");
// } else {
//   console.log("끝");
// }
const isPositive = num > 0;
const isNegative = num < 0;
const isOdd = num % 2 == 1;
const isEven = num % 2 == 0;

if (isPositive > 0 && isOdd % 2 == 1) {
  console.log("양의 홀수");
} else if (isPositive && isEven) {
  console.log("양의 짝수");
} else if (isNegative && isOdd) {
  console.log("음 의 홀수");
} else if (isNegative && isEven) {
  console.log("음의 짝수");
} else {
  console.log("0");
}
