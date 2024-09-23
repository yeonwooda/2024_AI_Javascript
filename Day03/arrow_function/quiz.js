// 1. [1,2,3,4,5] -> 두배 해주기
const num = [1, 2, 3, 4, 5].map((x) => {
  return x * 2;
});

// 2. [1,2,3,4,5] -> 홀수면 두배 짝수면 세배
const num1 = [1, 2, 3, 4, 5].map((x) => {
  return x % 2 == 1 ? x * 2 : x * 3;
});

// 3. [1,2,3,4,5] -> 3이하면 🍒 아니면 🍉
const num2 = [1, 2, 3, 4, 5].map((x) => {
  return x <= 3 ? "🍒" : "🍉";
});

// console.log(num);
// console.log(num1);
// console.log(num2);

const fruitArray = [
  "Watermelon",
  "cherry",
  "banana",
  "avocado",
  "apple",
  "orange",
  "pineapple",
  "strawberrty",
];

// 1. 문자의 길이가 7글자 이상이면 대문자화 아니면 소문자화

const word = fruitArray.map((x) => {
  return x.length >= 7 ? x.toUpperCase() : x.toLowerCase();
});

// 2. 알파벳 a가 들어가면 대문자화 아니면 소문자화
const alphabet = fruitArray.map((x) => {
  return x.includes("a") ? x.toUpperCase() : x.toLowerCase();
});

// 3. 단어 안에 있는 알파벳 a를 체리로 바꾸기
const change = fruitArray.map((x) => {
  return x.replace("a", "🍒");
});

// console.log(word);
// console.log(alphabet);
// console.log(change);

const starbucks = [
  { name: "americano", price: 4500, shots: 2, ingredients: ["water", "beans"] },
  { name: "latte", price: 6000, shots: 2, ingredients: ["milk", "beans"] },
  {
    name: "java chip",
    price: 6500,
    shots: 2,
    ingredients: ["milk", "beans", "wheat"],
  },
  {
    name: "honey black tea",
    price: 5700,
    shots: 0,
    ingredients: ["grapefruit", "water", "source"],
  },
];

// 1. 가을시즌 이벤트 -> 모든 가격을 10% 할인한 가격으로 바꿔주셈
const autumn = starbucks.map((x) => {
  return x.price * 0.9;
}); // 숫자

// 2. 두유시즌 이벤트 -> 성분에 두유 강제 추가
const soyMilk = starbucks.map((x) => {
  x.ingredients.push("soybean");
  return x;
}); // []

//3. 스타벅스 아아 기념 -> 이름이 아메리카노면 2000원 할인된 가격으로 바꿔주고 샷 하나 더 올려주기
const ice = starbucks.map((x) => {
  if (x.name == "americano") {
    x.price = x.price * 0.8;
    x.shots = x.shots + 1;
    return x;
  } else {
    return x;
  }
});

// 4. 인플레이션시즌 이벤트 모든 가격 20% 떡상한 가격으로 바꿔주
const inplationEvent = starbucks.map((x) => {
  x.price = x.price * 1.2; // 숫자
  return x;
});
console.log(autumn);
console.log(soyMilk);
console.log(ice);
