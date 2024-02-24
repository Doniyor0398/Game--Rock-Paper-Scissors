const kamenBtn = document.getElementById("kamen");
const nojnitsaBtn = document.getElementById("nojnitsa");
const bumagaBtn = document.getElementById("bumaga");
const imgBumagaBtn = document.getElementById("imgBumaga");
const kamenImgBtn = document.getElementById("kamenImg");

const imgSrcBumaga = `<img src="./imgIcon/icons8-вся-рука-48.png" alt=imgSrcBumaga/>`;
const imgSrcNoj = `<img src="./imgIcon/icons8-рука-ножницы-тип-кожи-2-48.png" alt=imgSrcBumaga/>`;
const imgSrcKamen = `<img src="./imgIcon/icons8-будь-мужиком,-блеать-48.png" alt=imgSrcBumaga/>`;

let bumagaValue = bumagaBtn.innerHTML;
let KamenValue = kamenBtn.innerHTML;
let NojnitsaValue = nojnitsaBtn.innerHTML;

let ComputerBot = document.getElementById("randomNumber");
let itogDiv = document.getElementById("itog");
let ResultDivUser = document.getElementById("resultDiv");

// КНОПКА КАМЕНЬ
kamenBtn.onclick = function () {
  let randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    result = ResultDivUser.innerHTML = imgSrcKamen;
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    result = ResultDivUser.innerHTML = imgSrcNoj;
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    result = ResultDivUser.innerHTML = imgSrcBumaga;
  }

  if (result === imgSrcKamen) {
    resultDomDiv = ResultDivUser.innerHTML = "Ничья";
    ResultDivUser.style.background = "#717151";
  } else if (result === imgSrcNoj) {
    resultDomDiv = ResultDivUser.innerHTML = "Вы победили!!!";
    ResultDivUser.style.background = "green";
  } else if (result === imgSrcBumaga) {
    resultDomDiv = ResultDivUser.innerHTML = "Вы проиграли ;(";
    ResultDivUser.style.background = "red";
  }
  ComputerBot.innerHTML = "Computer: " + result;
  itogDiv.innerHTML = "Вы: " + imgSrcKamen;
  ResultDivUser.innerHTML = "Результат: " + resultDomDiv;
};
// КНОПКА НОЖНИЦЫ
nojnitsaBtn.onclick = function () {
  let randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    result = ResultDivUser.innerHTML = imgSrcNoj;
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    result = ResultDivUser.innerHTML = imgSrcKamen;
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    result = ResultDivUser.innerHTML = imgSrcBumaga;
  }

  if (result === imgSrcNoj) {
    console.log(result);
    resultDomDiv = ResultDivUser.innerHTML = "Ничья";
    ResultDivUser.style.background = "#717151";
  } else if (result === imgSrcKamen) {
    resultDomDiv = ResultDivUser.innerHTML = "Вы проиграли ;(";
    ResultDivUser.style.background = "red";
  } else if (result === imgSrcBumaga) {
    resultDomDiv = ResultDivUser.innerHTML = "Вы победили!!!";
    ResultDivUser.style.background = "green";
  }
  ComputerBot.innerHTML = "Computer: " + result;
  ResultDivUser.innerHTML = "Результат: " + resultDomDiv;
  itogDiv.innerHTML = "Вы: " + imgSrcNoj;
};
// БУМАГА
bumagaBtn.onclick = function () {
  let randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 2) {
    randomNumber = ComputerBots = imgSrcKamen;
  } else if (randomNumber >= 1 / 2 && randomNumber < 2 / 3) {
    randomNumber = ComputerBots = imgSrcNoj;
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    randomNumber = ComputerBots = imgSrcBumaga;
  }

  if (randomNumber === imgSrcNoj) {
    result = ResultDivUsers = "Вы проиграли";
    ResultDivUser.style.background = "red";
  } else if (randomNumber === imgSrcKamen) {
    result = ResultDivUsers = "Вы победили!!!";
    ResultDivUser.style.background = "green";
  } else if (randomNumber === imgSrcBumaga) {
    result = ResultDivUsers = "Ничья";
    ResultDivUser.style.background = "#717151";
  }

  itogDiv.innerHTML = "Вы: " + imgSrcBumaga;
  ComputerBot.innerHTML = "Computer: " + randomNumber;
  ResultDivUser.innerHTML = "Результат: " + result;
};
