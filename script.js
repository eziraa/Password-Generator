// Import dataset
// Delcare document elment variable

const password = document.querySelector(".password");
const btnCopy = document.querySelector(".copy");
const strongness_level = document.querySelector("#strongness");
const password_range = document.querySelector("#length-range");
const password_length = document.querySelector(".pass-length-text");
const includeLower = document.querySelector("#lower-checkbox");
const includeUpper = document.querySelector("#upper-checkbox");
const includeSymbols = document.querySelector("#symbols-checkbox");
const includeNumbers = document.querySelector("#numbers-checkbox");
const btnGenerate = document.querySelector(".btn-generate");

const generatePassword = function () {
  // getting data from the UI
  const password_len = +password_length.textContent;
  const isIncludeLower = includeLower.checked;
  const isIncludeUpper = includeUpper.checked;
  const isIncludeSymbols = includeSymbols.checked;
  const isIncludeNumbers = includeNumbers.checked;

  // getting stored password elment houses
  const numbers = JSON.parse(localStorage.getItem("numbers"));
  const lowercase_letters = JSON.parse(
    localStorage.getItem("lowercase_letters")
  );
  const uppercase_letters = JSON.parse(
    localStorage.getItem("uppercase_letters")
  );
  const symbols = JSON.parse(localStorage.getItem("symbols"));

  let password_elm_house = [];

  // Add dataset based on the checkbox
  if (isIncludeLower)
    password_elm_house = password_elm_house.concat(lowercase_letters);
  if (isIncludeUpper)
    password_elm_house = password_elm_house.concat(uppercase_letters);
  if (isIncludeSymbols) password_elm_house = password_elm_house.concat(symbols);
  if (isIncludeNumbers) password_elm_house = password_elm_house.concat(numbers);

    if (password_elm_house.length === 0) {
      alert("Please choose you eant include");
      return;
    }
  // generate a password with marh.random method

  let password = Array.from(
    {
      length: password_len,
    },
    () => {
      return password_elm_house[
        Math.floor(Math.random() * password_elm_house.length)
      ];
    }
  );

  return password.join("");
};

const displayPassword = function () {
  password.textContent = generatePassword();
};

const copyPassword = function () {
  navigator.clipboard.writeText(password.textContent);
};

const updatePassLength = function () {
  password_length.textContent = password_range.value;
};

const updatePassStrongness = function () {
    let width = (password_length.textContent * 100) / 30;
    let color = width <= 20 ? "red" : width <= 50 ? "yellow" : "green";
    strongness_level.style.width = `${width}%`;
    strongness_level.style.backgroundColor = `${color}`;
    
};

const updateOnRange = function () {
  updatePassLength();
  updatePassStrongness();
};
// event handler
btnGenerate.addEventListener("click", displayPassword);
btnCopy.addEventListener("click", copyPassword);
password_range.addEventListener("input", updateOnRange);