let userInput = prompt("Enter your number and we will romanise it");

convertToRoman = num => {
  let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  let romanized = "";

  for (let i = 0; i < decimalValue.length; i++) {
    while (decimalValue[i] <= num) {
      romanized += romanNumeral[i];
      num -= decimalValue[i];
    }
  }
  return romanized;
};

refreshPage = () => {
  location.reload();
};

if (isNaN(userInput)) {
  document.getElementById(
    "roman"
  ).innerHTML = `I asked for a number, not gibberish!`;
} else {
  const result = convertToRoman(userInput);
  document.getElementById(
    "roman"
  ).innerHTML = `The roman numeral of ${userInput} is ${result}.`;
}
