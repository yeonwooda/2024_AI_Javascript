// 1. 아메리카노 주문 버튼 태그 만들고 누르면 주문완료!로 바뀌는 버튼 만들기

const btn = document.createElement("button");
btn.className = "btn";
btn.innerText = "아메리카노 주문";
btn.addEventListener("click", () => {
  btn.innerText = "주문완료!";
});
document.body.appendChild(btn);

// 2. 배경색이 하늘색 버튼 태그 만들고 누르면 핑크색으로 바뀌는 태그 만들기
const btn1 = document.createElement("button");
btn1.className = "btn1";
btn1.innerText = "핑크색";
btn1.style.backgroundColor = "skyblue";

btn1.addEventListener("click", () => {
  btn1.style.backgroundColor = "pink";
});

document.body.appendChild(btn1);

// 3. 다른 색상의 버튼 5개 만들고 버튼내용은 색상의 이름 넣어야하고 버튼을 누르면 아래에 박스에 색상이 바뀌어야함

// const btn2 = document.createElement("button");
// const btn3 = document.createElement("button");
// const btn4 = document.createElement("button");
// const btn5 = document.createElement("button");
// const btn6 = document.createElement("button");

// btn2.className = "btn2";
// btn3.className = "btn3";
// btn4.className = "btn4";
// btn5.className = "btn5";
// btn6.className = "btn6";

// btn2.innerText = "red";
// btn3.innerText = "blue";
// btn4.innerText = "yellow";
// btn5.innerText = "skyblue";
// btn6.innerText = "pink";

// btn2.addEventListener("click", () => {
//   div.style.backgroundColor = "red";
// });
// btn3.addEventListener("click", () => {
//   div.style.backgroundColor = "blue";
// });
// btn4.addEventListener("click", () => {
//   div.style.backgroundColor = "yellow";
// });
// btn5.addEventListener("click", () => {
//   div.style.backgroundColor = "skyblue";
// });
// btn6.addEventListener("click", () => {
//   div.style.backgroundColor = "pink";
// });

// document.body.appendChild(btn2);
// document.body.appendChild(btn3);
// document.body.appendChild(btn4);
// document.body.appendChild(btn5);
// document.body.appendChild(btn6);

// const div = document.createElement("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.border = "1px solid black";
// document.body.appendChild(div);

// const arr = ["red", "blue", "yellow", "skyblue", "pink"];

// arr.forEach((v) => {
//   const button = document.createElement("button");
//   button.innerText = v;
//   button.addEventListener("click", () => {
//     div.style.backgroundColor = v;
//   });
//   document.body.appendChild(button);
// });

const div = document.createElement("div");
div.style.width = "100px";
div.style.height = "100px";
div.style.border = "1px solid black";

["red", "blue", "yellow", "skyblue", "pink"].forEach((v) => {
  const button = document.createElement("button");
  button.innerText = v;
  button.addEventListener("click", () => {
    div.style.backgroundColor = v;
  });
  document.body.appendChild(button);
});

// ["둥글게", "네모"].forEach((v) => {
//   const button1 = document.createElement("button");
//   button1.className = "button";
//   button1.innerText = v;
//   button1.borderRadius = v[0]."20px";
//   button1.addEventListener("click", () => {
//     button1.borderRadius = "0xp";
//   });
//   document.body.appendChild(button1);
// });

// const btn2 = document.createElement("button");
// const btn3 = document.createElement("button");

// btn2.className = "btn2";
// btn3.className = "btn3";

// btn2.innerText = "둥글게";
// btn3.innerText = "네모";

// btn2.addEventListener("click", () => {
//   div.style.borderRadius = "9999px";
// });
// btn3.addEventListener("click", () => {
//   div.style.borderRadius = "0px";
// });

// document.body.appendChild(btn2);
// document.body.appendChild(btn3);

[
  { name: "네모", radius: "0px" },
  { name: "둥글게", radius: "9999px" },
].forEach((v) => {
  const button5 = document.createElement("button");
  button5.innerText = v.name;
  button5.addEventListener("click", () => {
    div.style.borderRadius = v.radius;
  });
  document.body.appendChild(button5);
});
document.body.appendChild(div);
