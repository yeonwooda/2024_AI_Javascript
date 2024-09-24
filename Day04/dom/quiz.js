const color = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];

const container = document.createElement("div");
container.className = "container";

Array(2001)
  .fill(0)
  .forEach((v, i) => {
    const box = document.createElement("div");
    box.className = "box";
    box.style.backgroundColor = color[i % color.length];
    container.appendChild(box);
  });

document.body.appendChild(container);
