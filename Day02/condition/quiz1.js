//버스 종류
// 마을 버스, 시내 버스, 고속 버스, 심야 버스
// 1500, 2000, 8000, 10000

// 경기권, 충천권, 강원권, 제주권
// +2000   +3000   +3000  +10000

// 좌석
// 일반석, 프리미엄석, 넷플석,
// +1000   +3000     +4000

// 나이 13세 이하면 20% 할인 65세 이상이면 50%할인

const bus = {
  type: [
    { name: "마을 버스", price: 1500 },
    { name: "시내 버스", price: 2000 },
    { name: "고속 버스", price: 8000 },
    { name: "심야 버스", price: 10000 },
  ],
  zone: [
    { name: "경기권", price: 2000 },
    { name: "충천권", price: 3000 },
    { name: "강원권", price: 3000 },
    { name: "제주권", price: 10000 },
  ],
};

const seats = {
  seat: [
    {
      name: "Economy",
      price: 1000,
    },
    {
      name: "Premium",
      price: 1000,
    },
    {
      name: "Netflix",
      price: 1000,
    },
  ],
};

const busChoose = Number(
  prompt(
    `${bus.type[0].name} ${bus.type[1].name} ${bus.type[2].name} ${bus.type[3].name}중에 고르세요`
  )
);
const zoneChoose = Number(
  prompt(
    `${bus.zone[0].name} ${bus.zone[1].name}  ${bus.zone[2].name} ${bus.zone[3].name} 중에 고르세요`
  )
);
const seatsChoose = Number(
  prompt(
    `${seats.seat[0].name} ${seats.seat[1].name}  ${seats.seat[2].name}중에 고르세요`
  )
);

const msg = `${bus.type[busChoose].name}, ${bus.zone[zoneChoose].name}, ${seats.seat[seatsChoose].name}`;

const age = Number(prompt("나이를 알려주세요"));

if (age <= 13) {
  const total =
    (bus.type[busChoose].price +
      bus.zone[zoneChoose].price +
      seats.seat[seatsChoose].price) *
    0.8;
  console.log(`${msg} 총 금액 ${total}`);
} else if (age >= 65) {
  const total =
    (bus.type[busChoose].price +
      bus.zone[zoneChoose].price +
      seats.seat[seatsChoose].price) *
    0.5;
  console.log(`${msg} 총 금액 ${total}`);
} else {
  const total =
    bus.type[busChoose].price +
    bus.zone[zoneChoose].price +
    seats.seat[seatsChoose].price;
  console.log(`${msg} 총 금액 ${total}`);
}
