// 1. [10,20,30,40,50] 30이하면 100더하기 아니면 200더하기
const arr = [10, 20, 30, 40, 50];

const plus = arr.map((x) => (x <= 30 ? x + 100 : x + 200));

console.log(plus);
// 2. ["americano", "latte","vanilla","mocha","mint","tea"]
// -1 5글자 이하면 대문자화 아니면 ☕로 바꾸기

const coffee = ["americano", "latte", "vanilla", "mocha", "mint", "tea"];

const upper = coffee.map((x) => (x.length <= 5 ? x.toUpperCase() : "☕"));

console.log(upper);
