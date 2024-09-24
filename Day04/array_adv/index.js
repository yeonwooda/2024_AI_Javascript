// arr 함수들
// filter : 걸러줘(조건에 맞는 친구들) / 어떠한 조건에 부합하는 요소만 남겨줘

[10, 20, 30, 40, 50].filter((x) => {
  return 30 > x; // 10,20
});

[10, 20, 30, 40, 50].filter((x) => {
  return x == 20 || x == 40;
}); // x가 20이거나 40만 살려줘

// every : 어떠한 조건에 모든 요소가 부합하니? (return Boolean)
[10, 20, 30, 40, 50].every((v) => {
  return x > 10; // true
});

// some : 어떠한 조건에 하나 요소가 부합하니? (return Boolean)
[10, 20, 30, 40, 50].some((v) => {
  return x > 60; // false
});

// 배열만들기
// 10칸 만들기
Array(100)
  .fill(1)
  .map((x) => {
    return x + 1;
  });

Array(10).fill(10);

Array(100)
  .fill(1)
  .map((v, i) => {
    return i + 1;
  });

Array(20)
  .fill(0)
  .map((v, i) => {
    return i;
  });

const add = (x, y) => x + y;
const sub = (x, y) => x - y;

const mul = (x, y) => {
  const a = "123";
  return x * y;
};
