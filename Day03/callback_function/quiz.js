// makeCoffee 함수 만들기 [커피준비 - 커피완료]
// americano, latte, vanilla 함수 만들기

const makeCoffee = (v) => {
  console.log("커피 준비 ☕");
  v();
  console.log("커피 완료 🤩");
};

const americano = () => {
  console.log("1. 원두 갈기");
  console.log("원두 추출");
  console.log("잔에 물넣기");
  console.log("잔에 커피원액 넣기");
};

const latte = () => {
  console.log("2. 원두 갈기🥛");
  console.log("원두 추출");
  console.log("잔에 커피 원액 넣기");
  console.log("잔에 우유 넣기");
  console.log("라떼 위에 커피 아트 넣기");
};

const vanilla = () => {
  console.log("3.원두 갈기🍵");
  console.log("원두 추출");
  console.log("잔에 우유 넣기");
  console.log("잔에 커피 원액 넣기");
  console.log("잔에 바닐라 시럽 넣기");
};

makeCoffee(americano);
makeCoffee(latte);
makeCoffee(vanilla);
makeCoffee(() => {
  console.log("원두 추출");
  console.log("잔에 물넣기");
  console.log("잔에 커피원액 넣기");
  console.log("망고 넣기~"); // 아망추 만들기
});
