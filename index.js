// const inputSlider = document.querySelector("[data-lengthSlider]");

// const lengthDisplay = document.querySelector("[data-lengthNumber]");

// const passwordDisplay = document.querySelector("[data-passwordDisplay]");

// const copyMsg = document.querySelector("[data-copyMsg]");

// const uppercase = document.querySelector("#uppercase");

// const lowercase = document.querySelector("#lowercase");

// const numbers = document.querySelector("#numbers");

// const symbols = document.querySelector("#symbols");

// const copyBtn = document.querySelector("[data-copy]");

// const generateBtn = document.querySelector(".generatePassword");

// const indicator = document.querySelector("[data-indicator]");

// const allCheckBox = document.querySelectorAll("input[type=checkbox]");

// let password = "";

// let passlen = 10;

// let checkCount = 0;

// handelSlider();

// // Set password length
// function handelSlider() {

//   inputSlider.value = passlen;

//   lengthDisplay.innerText = passlen;

// }

// function setIndicator(color) {

//   indicator.style.backgroundColor = color;

//   indicator.style.boxShadow = `0 0 12px 1px ${color}`;

// }

// function getRandomInteger(min, max) {

//   return Math.floor(Math.random() * (max - min)) + min;

// }

// function randomNumber() {

//   return getRandomInteger(0, 9);

// }

// function randomLowerCase() {

//   return String.fromCharCode(getRandomInteger(97, 123));

// }

// function randomUpperCase() {

//   return String.fromCharCode(getRandomInteger(65, 90));

// }

// const allSymbols = "~`!@#$%^&*()_-+={[}]|:;\"<,>.?/'";

// function randomSymbol() {

//   const symbolIndex = getRandomInteger(0, allSymbols.length);

//   return allSymbols.charAt(symbolIndex);

// }

// function calcStrength() {

//   let hasUpper = false;

//   let hasLower = false;

//   let hasSymb = false;

//   let hasNum = false;

//   // Check if the checkboxes are checked
//   if (uppercase.checked) {

//     hasUpper = true;

//   }

//   if (lowercase.checked) {

//     hasLower = true;

//   }

//   if (symbols.checked) {

//     hasSymb = true;

//   }

//   if (numbers.checked) {

//     hasNum = true;

//   }

//   if (hasLower && hasUpper && (hasNum || hasSymb) && passlen >= 8) {
//     setIndicator("#0f0");
//   } else if ((hasLower || hasUpper) && (hasSymb || hasNum) && passlen >= 6) {
//     setIndicator("#ff0");
//   } else {
//     setIndicator("#f00");
//   }
// }

// async function copyContent() {
//   try {
//     await navigator.clipboard.writeText(passwordDisplay.value);
//     copyMsg.innerText = "copied";
//   } catch (error) {
//     copyMsg.innerText = "failed";
//   }
//   copyMsg.classList.add("active");

//   setTimeout(() => {
//     copyMsg.classList.remove("active");
//   }, 2000);
// }

// inputSlider.addEventListener("input", (e) => {
//   passlen = e.target.value;
//   handelSlider();
// });

// copyBtn.addEventListener("click", () => {
//   if (passwordDisplay.value) {
//     copyContent();
//   }
// });

// function handleCheckBox() {
//   checkCount = 0;
//   allCheckBox.forEach((checkbox) => {
//     if (checkbox.checked) {
//       checkCount++;
//     }
//   });

//   if (checkCount > passlen) {
//     passlen = checkCount;
//     handelSlider();
//   }
// }

// allCheckBox.forEach((checkbox) => {
//   checkbox.addEventListener("change", handleCheckBox);
// });
// function shufflePassword(array) {
//   // an algorithm is for shuffle an array
//   // Fisher Yates Method
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     const temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   }
//   let str = "";
//   array.forEach((el) => (str += el));
//   return str;
// }

// generateBtn.addEventListener("click", () => {
//   if (checkCount <= 0) return;
//   if (passlen < checkCount) {
//     passlen = checkCount;
//     handelSlider();
//   }
//   // let's start to find new password;
//   password = "";

//   let funArr = [];
//   if (uppercase.checked) funArr.push(randomUpperCase);
//   if (lowercase.checked) funArr.push(randomLowerCase);
//   if (numbers.checked) funArr.push(randomNumber);
//   if (symbols.checked) funArr.push(randomSymbol);

//   for (let i = 0; i < funArr.length; i++) {
//     password += funArr[i]();
//   }
//   for (let i = 0; i < passlen - funArr.length; i++) {
//     let randIndex = getRandomInteger(0, funArr.length);
//     password += funArr[randIndex]();
//   }

//   password = shufflePassword(Array.from(password));
//   passwordDisplay.value = password;
//   calcStrength();
// });
// _____________________

// Selecting elements from the DOM
const inputSlider = document.querySelector("[data-lengthSlider]");
const lengthDisplay = document.querySelector("[data-lengthNumber]");
const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");
const copyBtn = document.querySelector("[data-copy]");
const generateBtn = document.querySelector(".generatePassword");
const indicator = document.querySelector("[data-indicator]");
const allCheckBox = document.querySelectorAll("input[type=checkbox]");

// Initializing variables
let password = "";
let passlen = 8; // default password length
let checkCount = 1;

// Initial setup
handelSlider();
setIndicator("#ccc");
// Set password length function
function handelSlider() {
  inputSlider.value = passlen;
  lengthDisplay.innerText = passlen;
  const min = inputSlider.min;
  const max = inputSlider.max;
  inputSlider.style.backgroundSize =
    ((passlen - min) * 100) / (max - min) + "% 100%";
}

// Function to set the strength indicator
function setIndicator(color) {
  indicator.style.backgroundColor = color;
  indicator.style.boxShadow = `0 0 12px 1px ${color} `;
}

// Function to get a random integer between min and max
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Functions to generate random components of the password
function randomNumber() {
  return getRandomInteger(0, 9);
}

function randomLowerCase() {
  return String.fromCharCode(getRandomInteger(97, 123));
}

function randomUpperCase() {
  return String.fromCharCode(getRandomInteger(65, 90));
}

// String of all possible symbols
const allSymbols = "~`!@#$%^&*()_-+={[}]|:;\"<,>.?/'";

// Function to generate a random symbol
function randomSymbol() {
  const symbolIndex = getRandomInteger(0, allSymbols.length);
  return allSymbols.charAt(symbolIndex);
}

// Function to calculate and set the strength indicator
function calcStrength() {
  let hasUpper = false;
  let hasLower = false;
  let hasSymb = false;
  let hasNum = false;

  // Check if the checkboxes are checked
  if (uppercase.checked) {
    hasUpper = true;
  }

  if (lowercase.checked) {
    hasLower = true;
  }

  if (symbols.checked) {
    hasSymb = true;
  }

  if (numbers.checked) {
    hasNum = true;
  }

  // Set strength indicator color based on criteria
  if (hasLower && hasUpper && (hasNum || hasSymb) && passlen >= 8) {
    setIndicator("#0f0"); // Strong indicator (green)
  } else if ((hasLower || hasUpper) && (hasSymb || hasNum) && passlen >= 6) {
    setIndicator("#ff0"); // Moderate indicator (yellow)
  } else {
    setIndicator("#f00"); // Weak indicator (red)
  }
}

// Function to copy password to clipboard
async function copyContent() {
  try {
    await navigator.clipboard.writeText(passwordDisplay.value);
    copyMsg.innerText = "copied";
  } catch (error) {
    copyMsg.innerText = "failed";
  }
  copyMsg.classList.add("active");

  setTimeout(() => {
    copyMsg.classList.remove("active");
  }, 2000);
}

// Event listener for slider input
inputSlider.addEventListener("input", (e) => {
  passlen = e.target.value;
  handelSlider();
});

// Event listener for copy button
copyBtn.addEventListener("click", () => {
  if (passwordDisplay.value) {
    copyContent();
  }
});

// Function to handle checkbox changes
function handleCheckBox() {
  checkCount = 0;
  allCheckBox.forEach((checkbox) => {
    if (checkbox.checked) {
      checkCount++;
    }
  });

  // Adjust password length based on checked checkboxes
  if (checkCount > passlen) {
    passlen = checkCount;
    handelSlider();
  }
}

// Event listener for checkbox changes
allCheckBox.forEach((checkbox) => {
  checkbox.addEventListener("change", handleCheckBox);
});

// Function to shuffle the characters of the password
function shufflePassword(array) {
  // Fisher Yates Method
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  // let str = array.join();
  let str = "";
  array.forEach((el) => (str += el));
  return str;
}

// Event listener for generate button
generateBtn.addEventListener("click", () => {
  if (checkCount <= 0) return;
  if (passlen < checkCount) {
    passlen = checkCount;
    handelSlider();
  }

  // Generate new password
  password = "";

  let funArr = [];
  if (uppercase.checked) funArr.push(randomUpperCase);
  if (lowercase.checked) funArr.push(randomLowerCase);
  if (numbers.checked) funArr.push(randomNumber);
  if (symbols.checked) funArr.push(randomSymbol);

  // Add characters based on checkbox selections
  for (let i = 0; i < funArr.length; i++) {
    password += funArr[i]();
  }

  // Add additional characters to meet the desired length
  for (let i = 0; i < passlen - funArr.length; i++) {
    let randIndex = getRandomInteger(0, funArr.length);
    password += funArr[randIndex]();
  }

  // Shuffle password characters and display
  password = shufflePassword(Array.from(password));
  passwordDisplay.value = password;

  // Calculate and set strength indicator
  calcStrength();
});
