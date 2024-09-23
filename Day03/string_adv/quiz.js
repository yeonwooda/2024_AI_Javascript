// 유저에게 비밀번호 설정을 물어보고,
// 비밀번호가 it, IT를 포함하면 비밀번호 설정 완료! 아니면 비밀번호 설정 오류!

// const password = prompt("비밀번호를 설정해주세요");
// function user(password) {
//   return password.includes("IT") || password.includes("it")
//     ? "비밀번호 설정 완료"
//     : "비밀번호 설정 오류";
// }

// == 강사코드
// const password = prompt("비밀번호를 설정해주세요");
// const isPass = password.includes("IT") || password.includes("it");
// const msg = isPass ? "비밀번호 설정 완료" : "비밀번호 설정 오류";
// alert(msg);

// 1. 유저에게 좋아하는 음식을 입력받고 그 음식을 5번 출력하는 프로그램
// const food = prompt("좋아하는 음식을 입력해주세요");
// food.repeat(5);

// 2. 유저에게 좋아하는 음식과 횟수를 입력 받고 그 음식을 횟수번 만큼 출력하는 프로그램
// const food1 = prompt("좋아하는 음식과 횟수를 입력해주세요");

// const msg = food1.split("");
// console.log(msg);

// 강사코드
// const foodCount = prompt("좋아하는 음식과 횟수를 입력해주세요"); // 떡볶이 5
// const arr = foodCount.split(" "); // split 배열화가 돼
// const myfood = arr[0]; // 떡볶이
// const count = Number(arr[1]); // 숫자가 문자여서 num화
// alert(myfood.repeat(count));

// 3. 유저에게 알파벳 단어를 입력 받고, 6글자보다 작으면 소문자화 하고, 크면 대문자화해서 출력
// const alphabet = prompt("알파벳 단어를 입력해주세요");
// const result =
//   alphabet.length < 6 ? alphabet.toLowerCase() : alphabet.toUpperCase();
// alert(result);

// 뉴스기사 스크랩해서 배열화 하려면
// const news = `Left-leaning politician Anura Kumara Dissanayake has won Sri Lanka’s presidential election after a historic second round of counting.
// No candidate won more than 50% of the total votes in the first round, where Dissanayake got 42.31% while his closest rival, opposition leader Sajith Premadasa, got 32.76%.
// But Dissanayake, who promised voters good governance and tough anti-corruption measures, emerged as winner after the second count, which tallied voters' second and third choice candidates.
// The election on Saturday was the first to be held since mass protests unseated the country's leader, Gotabaya Rajapaksa, in 2022 after Sri Lanka suffered its worst economic crisis.`;

// alert(news.split("")); // 단어별 배열

// 1. 유저에게 단어를 입력받고, 소문자이면 대문자로, 대문자이면 소문자로
// ex) happy -> HAPPY / SAD -> sad

// const word = prompt("단어를 입력해주세요");

// word.toUpperCase() || word.toLowerCase();

// 강사 코드
const word = prompt("단어 입력"); // happy 넣었을 때

const result =
  word == word.toUpperCase() ? word.toLowerCase() : word.toUpperCase();
alert(result);

// 2. 유저에게 비밀번호 설정을 물어보고
// -1. 길이가 8~20가 아니면 비밀번호 길이 오류!
// -2. 시작이 it,IT로 시작안하면 비밀번호 시작은 it, IT로 시작해야함
// -3. 특수문자 &#@!중에 하나라도 없으면 비밀번호에 반드시 특수문자 넣어야함
// 위에 조건이 모두 통과되면 비밀번호 설정 완료

// const user = prompt("비밀번호 설정");
// if (user.length == 8 || user.length == 20) {
//   alert("비밀번호 길이 오류");
// } else if (user.startsWith("IT") || user.startsWith("it")) {
//   alert("비밀번호 시작은 it or IT로 시작해야합니다.");
// } else if (user.includes("&#@!")) {
//   alert("비밀번호에 &#@! 특수문자가 포함되어야 합니다.");
// } else {
//   alert("비밀번호 설정 완료");
// }

const pw = prompt("비밀번호 설정");
const isLengthValid = 8 <= pw.length && pw.length <= 20;
const isStartIt = pw.startsWith("it") || pw.startsWith("IT");
const hasSpecialChar =
  pw.includes("&") || pw.includes("#") || pw.includes("!") || pw.includes("@");

if (!isLengthValid) {
  // isLengthValid가 아니면~
  alert("비밀번호 길이 오류");
} else if (!isStartIt) {
  alert("비밀번호 시작은 it or IT로 시작해야합니다.");
} else if (!hasSpecialChar) {
  alert("비밀번호에 &#@! 특수문자가 포함되어야 합니다.");
} else {
  alert("비밀번호 설정 완료");
}
