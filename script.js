const resultElement = document.getElementById("result");
const submitBtn = document.getElementById("submit");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const umnojitBtn = document.getElementById("umnojit");
const deleniyeBtn = document.getElementById("deleniye");
let action = "+";

plusBtn.onclick = function () {
  action = "+";
};
minusBtn.onclick = function () {
  action = "-";
};
umnojitBtn.onclick = function () {
  action = "*";
};
deleniyeBtn.onclick = function () {
  action = "/";
};
// Функция для вычисления
function printResult(result) {
  // result - это sum
  if (result <= 0) {
    resultElement.style.background = "red";
  } else {
    resultElement.style.background = "green";
  }
  resultElement.textContent = result;
}

function computeAction(inp1, inp2, actionSymbol) {
  const num1 = Number(inp1.value);
  const num2 = Number(inp2.value);

  if (action == "+") {
    return num1 + num2;
  } else if (actionSymbol == "-") {
    return num1 - num2;
  } else if (actionSymbol == "*") {
    return num1 * num2;
  } else if (actionSymbol == "/") {
    return num1 / num2;
  }
}

submitBtn.onclick = function () {
  const result = computeAction(input1, input2, action);
  printResult(result);
};
