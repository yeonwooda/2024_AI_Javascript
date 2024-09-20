// 참조 타입

// Array(배열):[]
// 시작은 0번째부터
const paik = ["아메리카노", "라떼", "모카", "바닐라"];
console.log(paik);
console.log(paik[2]);

// 서브웨이
// 빵 메뉴 고르기 [플랫, 화이트, 위트]
// 치즈 메뉴 고르기 [슈레드, 모짜렐라, 아메리칸치즈]
// 소스 메뉴 고르기 [머스타드, 핫칠리, 소금, 후추, 스언, 홀레]
// 쿠키 메뉴 고르기[화이트, 초콜릿, 아몬드]
// 음료 메뉴 고르기 [콜라, 제로콜라, 스프라이트, 커피]
// 최종메뉴는 플랫- 모짜렐라-소금-아몬드쿠키-콜라

const bread1 = ["플랫", "화이트", "위트"];
const cheese1 = ["슈레드", "모짜렐라", "아메리칸치즈"];
const sauce1 = ["머스타드", "핫칠리", "소금", "후추", "스언", "홀레"];
const cookie1 = ["화이트", "초콜릿", "아몬드"];
const drink1 = ["콜라", "제로콜라", "스프라이드", "커피"];

const bread = prompt("플랫 화이트 위트");
const cheese = prompt("슈레드 모짜렐라 아메리칸치즈");
const sauce = prompt("머스타드 핫칠리 소금 후추 스언 홀레");
const cookie = prompt("화이트 초콜릿 아몬드");
const drink = prompt("콜라 제로콜라 스프라이드 커피");

console.log(
  `최종메뉴는 ${bread1[bread]} ${cheese1[cheese]} - ${sauce1[sauce]} - ${cookie1[cookie]} - ${drink1[drink]}`
);
//
