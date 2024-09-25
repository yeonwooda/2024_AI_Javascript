// 좋아하는 색깔 5개 배열로 넣은 뒤에
// grid로 3열로 박스(100개)형태로 넣기

const color = ["pink", "red", "black", "blue", "yellow"];

const container = document.createElement("div");
container.className = "container";

Array(101)
  .fill(0)
  .forEach((v, i) => {
    const box = document.createElement("div");
    box.className = "box";
    box.style.display = "grid";
    box.style.gridTemplateColumns = "repeat(3,1fr)";
    box.style.background = color[i % color.length];
    container.appendChild(box);
  });

document.body.appendChild(container);
