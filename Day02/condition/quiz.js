// CGV 프로그램

// 1. 영화 고르기 - ["베테랑2", "에일리언","사랑의하츄핑"]
// 2. 좌석 등급 고르기 - standard[10000], couple[20000], premium[15000], economy[8000]
// 3. 팝콘 고르기 - 일반[6000], 캬라멜[6500], 치즈[6500], 반반[7000]
// 4. 음료 고르기 - 탄산[2000], 에이드[3000], 커피[3000]
// 5. 나이 입력 - 13세 이하면 30% 할인 60세 이상은 20% 할인

// 콘솔로 - 영화, 좌석, 팝콘, 음료, 총 금액은: --- 입니다

// const movie = ["베테랑2", "에일리언", "사랑의하츄핑"];
// const seat = ["standard", "couple", "premium", "economy"];
// const popcon = ["일반", "카라멜", "치즈", "반반"];
// const drink = ["탄산", "에이드", "커피"];

// const chooseMovie = Number(prompt("베테랑2 에일리언 사랑의하츄핑"));
// const chooseSeat = Number(prompt("standard couple premium economy"));
// const choosePopcon = Number(prompt("일반 카라멜 치즈 반반"));
// const chooseDrink = Number(prompt("탄산 에이드 커피"));
// const age = Number(prompt("나이를 입력해주세요"));

// if (age <= 13) {
//   seat * 0.7;
// } else if (age >= 60) {
//   seat * 0.8;
// }

// const price =

// const seatPrice = [10000, 20000, 15000, 8000];
// const age = Number(prompt("나이를 입력해주세요"));

// if (age <= 13) {
//   console.log(seatPrice * 0.7);
// } else if (age >= 60) {
//   console.log(seatPrice * 0.8);
// } else {
//   seatPrice;
// }

// console.log(
//   `${movie[chooseMovie]} ${seat[chooseSeat]} ${popcon[choosePopcon]} ${drink[chooseDrink]} 총 금액 : ${price}`
// );

///==============

const movie = {
  name: ["베테랑2", "에일리언", "사랑의하츄핑"],
  seat: [
    { name: "Standard", price: 10000 },
    { name: "Couple", price: 20000 },
    { name: "Premium", price: 15000 },
    { name: "Economy", price: 8000 },
  ],
};

const shop = {
  popcorn: [
    { name: "일반", price: 6000 },
    { name: "캬라멜", price: 6500 },
    { name: "치즈", price: 6500 },
    { name: "반반", price: 7000 },
  ],
  beverage: [
    { name: "탄산", price: 2000 },
    { name: "에이드", price: 3000 },
    { name: "커피", price: 3000 },
  ],
  지역,
};

const movieChoose = Number(prompt(`${movie.name}중 고르세요`));
const seatChoose = Number(
  prompt(
    `${movie.seat[0].name} ${movie.seat[1].name} ${movie.seat[2].name} ${movie.seat[3].name} 중에 고르세요`
  )
);
const popcornChoose = Number(
  prompt(
    `${movie.popcorn[0].name} ${movie.popcorn[1].name} ${movie.popcorn[2].name} ${movie.popcorn[3].name} 중에 고르세요`
  )
);
const beverageChoose = Number(
  prompt(
    `${movie.beverage[0].name} ${movie.beverage[1].name} ${movie.beverage[2].name}  중에 고르세요`
  )
);

const age = Number(prompt("나이를 알려주세요"));

const msg = `${movie.name[movieChoose]}, ${movie.seat[seatChoose].name}, ${shop.popcorn[popcornChoose].name}, ${shop.beverage[beverageChoose].name}`;

if (age <= 13) {
  const total =
    movie.seat[seatChoose].price * 0.7 +
    shop.popcorn[popcornChoose].price +
    shop.beverage[beverageChoose].price;
  console.log(`${msg} 총 금액 ${total} 입니다.`);
} else if (age >= 60) {
  const total =
    movie.seat[seatChoose].price * 0.8 +
    shop.popcorn[popcornChoose].price +
    shop.beverage[beverageChoose].price;
  console.log(`${msg} 총 금액 ${total} 입니다.`);
} else {
  const total =
    movie.seat[seatChoose].price * 1 +
    shop.popcorn[popcornChoose].price +
    shop.beverage[beverageChoose].price;
  console.log(`${msg} 총 금액 ${total} 입니다.`);
}
