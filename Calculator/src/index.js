const inputScreen = document.getElementById("inputScreen");

const clearBtn = document.getElementById("clearBtn");
const backBtn = document.getElementById("backBtn");
const calculatorBtn = document.getElementById("calculatorBtn");

clearBtn.addEventListener("click", clearInput);

backBtn.addEventListener("click", backInput);

function clearInput() {
  inputScreen.value = "";
}

function backInput() {
  inputScreen.value = inputScreen.value.slice(0, -1);
}

function appendValueInCalculator(value) {
  if (value === "=") {
    calculate();
    return;
  }

  inputScreen.value += value;
}

function calculate() {
  inputScreen.value = eval(inputScreen.value);
}

document.addEventListener("keydown", function (event) {
  const { key } = event;

  if (/^[0-9./*-+]/.test(key)) {
    appendValueInCalculator(key);
  } else if (key == "=" || key == "Enter") {
    calculate();
  } else if (key == "Backspace") {
    backInput();
  } else if (key == "Delete") {
    clearInput();
  }
});
