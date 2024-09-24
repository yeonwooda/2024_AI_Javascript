// 1. [1,2,3,4,5,6,7,8,9,10] 중에 3의 배수만 살려줘
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const three = arr.filter((v) => {
  return v % 3 == 0;
});

// 2. [1,2,3,4,5,6,7,8,9,10] 4 이상 8이하만 살려줘
const num = arr.filter((v) => {
  return v >= 4 && v <= 8;
});

// 3. 알파벳 o가 들어있는 애들만 살려줘
const fruitArray = [
  "Watermelon",
  "cherry",
  "banana",
  "avocado",
  "apple",
  "orange",
  "pineapple",
  "strawberrty",
];

const alphabet = fruitArray.filter((v) => {
  return v.includes("o");
});

// 4. 문자 길이가 6글자 이상만 살려줘
const word = fruitArray.filter((v) => {
  return v.length >= 6;
});

// 5. 문자길이가 짝수인 애들만 살리고, 대문자화 시켜줘
// 메소드 체이닝(method chaining)
const wordLength = fruitArray
  .filter((v) => {
    return v.length % 2 == 0;
  })
  .map((v) => {
    return v.toUpperCase();
  });

// 유저에게 정수 n(최대숫자), k(배수)를 입력받으면
// n = 10 ,k = 3 -> [3,6,9]
// n = 15, k= 5 -> [5,10,15]
// 를 도출하는 함수를 만들기

// 10 3 넣엇다면
const test = (n, k) => {
  return Array(n)
    .fill(0) // [0,0,0,0,0,0,0]
    .map((v, i) => {
      return i + 1; // [1,2,3,4,5,6, ...]
    })
    .filter((x) => {
      return x % k == 0;
    }); // 3,6,9
};

// todoList = ["점심먹기", "복습하기","유튜브 보기","카톡하기"]
// finished = [false,false,true,true]
// newDoToList = ["점심먹기", "복습하기"]

const todoList = ["점심먹기", "복습하기", "유튜브 보기", "카톡하기"];
const finished = [false, false, true, true];

// 함수화[패턴화]
const newDoToList = (todoList, finished) => {
  return todoList.filter((v, i) => {
    return !finished[i];
  });
};

// x 기준으로 나눴을 때, 나눠진 문자열의 각 길이를 배열화 시킨거
// "xabcxdefxghi"
// ["o", "oo", "o", "o"]
// [1,2,1,0,1,0]

// 강사 코드
const str = "xabcxdefxghi";

const hasX = str.split("x").map((v) => {
  return v.length;
});

// == 강사 코드 패턴화
const test2 = (word) => word.split("x").map((v) => v.length);

// 모음 : a,e,i,o,u는 대문자로 바꾸기
// [mElOn]

//  "melon".split("").map((v) => {
//   return v == "a" || v == "e" || v == "i" || v == "o" || v == "u"
//     ? v.toUpperCase()
//     : v;
// }); 힌트

const fruits = ["melon", "kiwi", "apple", "banana", "orange"];

const a = fruits.filter((v) => {
  return v.split(" ").map((v) => {
    fruits.every((v) => {
      v;
    });
  });
});

// 강사 코드
const vowels = ["a", "e", "i", "o", "u"];

fruits.map((x) =>
  x.split("").map((y) => (vowels.some((v) => v == y) ? y.toUpperCase() : y))
);

// 1부터 100까지 만들고, 3 6 9 만들기 [1,2,👏]
// Array(101)
//   .fill(0)
//   .map((v, i) => {
//     return v % 3 == 0 ? "👏" : i + 1;
//   });

// 알고리즘 문제 풀때
// 해당 타입에 방법이 없으면 다른 타입으로 바꿔서 진행
const num5 = Array(101)
  .fill(0)
  .map((v, i) => String(i + 1)) // 1 2 3 13
  .map((v) =>
    v.includes("3") || v.includes("6") || v.includes("9") ? "👏" : v
  )
  .map((v) => (v == "👏" ? "👏" : Number(v)));
console.log(num5);
