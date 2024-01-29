const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 9];
const lowercase_letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const uppercase_letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const symbols = [
  "+",
  "-",
  "%",
  "*",
  "/",
  "=",
  "!",
  "<",
  ">",
  "&",
  "|",
  "^",
  "~",
  ",",
  ":",
  ".",
  ")",
  "(",
  "[",
  "]",
  "}",
  "{",
];

localStorage.removeItem("numbers");
localStorage.removeItem("symbols");
localStorage.removeItem("uppercase_letters");
localStorage.removeItem("lowercase_letters");
localStorage.setItem("numbers", JSON.stringify(numbers));
localStorage.setItem("lowercase_letters", JSON.stringify(lowercase_letters));
localStorage.setItem("uppercase_letters", JSON.stringify(uppercase_letters));
localStorage.setItem("symbols", JSON.stringify(symbols));
console.log(true);
