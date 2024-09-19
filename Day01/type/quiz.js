// prompr 첫번째, 두번쨰 숫자 입력
// 콘솔로 두 수의 합은 ~~ 입니다. 만들기

// const num = prompt("첫번째 숫자 입력");
// const num2 = prompt("두번째 숫자 입력");
// console.log(`두 수의 합은 ${Number(num) + Number(num2)}입니다`);

// 한변의 길이를 물어보고 정사각형의 넓이와 둘레 알려주기
// const side = Number(prompt("1. 한변의 길이를 알려주세요"));
// const sum = side * side;
// console.log(`정사각형의 넓이는 ${sum}`);
// console.log(`정사각형의 둘레는 ${side * 4}`);

// 밑변 높이 물어보고, 정삼각형의 넓이 구하기
// const triangle = Number(prompt("2.정삼각형의 밑변을 알려주세요"));
// const triangle2 = Number(prompt("2. 정삼각형의 높이을 알려주세요"));
// const sum1 = (triangle * triangle2) / 2;
// console.log(`정삼각각형의 넓이는 ${sum1}`);

// 반지름 물어보고, 원의 넓이와 둘레 구하기
// const circle = Number(prompt("3. 반지름을 알려주세요"));
// const circlesum = circle * circle * 3.14;
// console.log(`원의 면적은 ${circlesum}`);

// 출생년도를 물어보고 나이를 나타내기

// const year = Number(prompt("4. 출생년도를 알려주세요"));
// const yearsum = 2024 - year;
// console.log(`당신의 나이는 ${yearsum}`);

// 일본여행 갈건데 100만원 환전하면 현재 환율로 엔화 나타내기

// 10000 * x = 1076(그때의 환율)
// 1076 하여튼 이렇게 해서 저렇게 곱해야함
const japan = Number(prompt("5. 환전할 금액을 알려주세요"));
const japansum = japan * 0.1075;
console.log(`환율 금액 : ${japansum}`);
