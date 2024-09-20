const pt1 = prompt("첫 번째 운동 순서를 알려주세요");
const pt2 = prompt("두 번째 운동 순서를 알려주세요");
const pt3 = prompt("세 번째 운동 순서를 알려주세요");
console.log(
  `첫 번째 운동은 ${pt1}이고 두 번째 운동은 ${pt2}이며 마지막 운동은 ${pt3}입니다`
);

const price = Number(prompt("커피 한 잔 가격은 얼마인가요?"));
const count = Number(prompt("커피의 수량을 알려주세요"));
console.log(`커피 한 잔 가격과 수량을 합친 가격은 총 ${price * count}원입니다`);

const year = Number(prompt("태어난 년도를 알려주세요"));
console.log(`당신은 ${2025 - year}살이군요!`);
