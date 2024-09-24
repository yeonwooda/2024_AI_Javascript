// const div = document.createElement("div");
// div.innerText = "샤브샤브";
// div.style.color = "red";
// document.body.appendChild(div);

// 버튼 태그 3개 만들기 [아메리카노][에이드][라떼]

// ["아메리카노", "에이드", "라떼"].forEach((v) => {
//   const btn1 = document.createElement("button");
//   btn1.innerText = v;
//   btn1.style.backgroundColor = "skyblue";
//   btn1.style.color = "white";
//   document.body.appendChild(btn1);
// });

// [
//   { name: "아메리카노", backgroundColor: "yellow", color: "black" },
//   { name: "에이드", backgroundColor: "pink", color: "white" },
//   { name: "라떼", backgroundColor: "skyblue", color: "orange" },
// ].forEach((v) => {
//   const button = document.createElement("button");
//   button.innerText = v.name;
//   button.style.backgroundColor = v.backgroundColor;
//   button.style.color = v.color;
//   document.body.appendChild(button);
// });

const container = document.createElement("div");
container.classList.add("container");

const box = document.createElement("div");
box.classList.add("box");
box.style.backgroundColor = "red";
container.appendChild(box);

const box1 = document.createElement("div");
box1.classList.add("box");
box1.style.backgroundColor = "yellow";
container.appendChild(box1);

document.body.appendChild(container);
