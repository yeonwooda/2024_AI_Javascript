//f(g(x)) : 마술상자 않에 마술상자 넣음
// callback: 함수 안에 함수 넣기
const cook = (x) => {
  console.log("요리 시작");
  x();
  console.log("요리 끝");
};
const maratang = () => {
  console.log("마라탕 만들기");
};
const taco = () => {
  console.log("타코 만들기");
};

const kimbab = () => {
  console.log("김밥 만들기");
};

cook(maratang);
cook(taco);
cook(kimbab);

const taco1 = () => {
  console.log("살사소스 준비");
  console.log("나초칩");
  console.log("난 준비");
  console.log("고기 올리기");
  console.log("타코 완성");
};

const ramen = () => {
  console.log("물 끓이기");
  console.log("면 넣기");
  console.log("스프 넣기");
  console.log("계란 넣기");
};

cook(ramen);

const skill = (magic) => {
  console.log("스킬 사용");
  magic();
  console.log("스킬 완료");
};

const fire = () => {
  console.log("불 마법 사요 ㅇ");
};

const ice = () => {
  console.log("얼음 마법 사용");
};

const tree = () => {
  console.log("나무로 변하기");
};
