// 1. 출생년도 물어보고 05년 이하면 성인입니다, 아니면 미성년자 입니다.

// const year = prompt("출생년도를 입력하세요");
// const adult = year <= 2005 ? "성인입니다" : "미성년자입니다";
// console.log(adult);

// 2. 놀이기구 타려고 키를 물었음 150cm 이하면 탈 수 없습니다. 아니면 탈 수 있습니다
// const hight = prompt("키를 알려주세요");
// const hight2 = hight >= 150 ? "탈 수 있습니다." : "탈 수 없습니다.";
// console.log(hight2);

// 3. 사용자로 부터 10000 부터 99,999 사이의 정수를 입력받아,
//    각 자리수를 분리하여 출력하는 프로그램을 작성하세요
//    예를 들어, 입력 값이 12345라면,
//    각 자리수 1만 2천 3백 4십 5를 출력해야합니다.

// const int = Number(prompt("정수 입력"));
// const million = int;

// 4. 양의 정수를 입력받고, 분 초를 바꾸는 프로그램
//    ex) 76, 201

const positive = Number(prompt("정수 입력"));
const sec = positive % 60; // 16초
const minute = parseInt(positive / 60); // 3분
console.log(`${minute}분 ${sec}초`);
