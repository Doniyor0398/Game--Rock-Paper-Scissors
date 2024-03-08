// img выводим из dom
const imgSrcKamen = `<img src="./imgIcon/icons8-будь-мужиком,-блеать-48.png" alt=imgSrcBumaga/>`;
const imgSrcNoj = `<img src="./imgIcon/icons8-рука-ножницы-тип-кожи-2-48.png" alt=imgSrcBumaga/>`;
const imgSrcBumaga = `<img src="./imgIcon/icons8-вся-рука-48.png" alt=imgSrcBumaga/>`;

const user = document.getElementById("computerClickPlay");
const computer = document.getElementById("userClickPlay");
const resultGame = document.getElementById("resultGame");
const chekBtn = document.getElementById("сheck");
const tieBtn = document.getElementById("tie");

const rockBtn = document.getElementById("Rock");
const paperBtn = document.getElementById("Paper");
const scissorsBtn = document.getElementById("Scissors");
// Меняем атрибуты через стрелычные функции
let rockClick = () => userClick(imgSrcKamen);
rockBtn.onclick = rockClick;

let paperClick = () => userClick(imgSrcNoj);
paperBtn.onclick = paperClick;

let clickScissors = () => userClick(imgSrcBumaga);
scissorsBtn.onclick = clickScissors;
let CheckGameComputerUser = {
  win: 0,
  lose: 0,
  tie: 0,
};
// function
function userClick(playUser) {
  // playUser - это В HTML есть атрибут onClick=imgSrcKamen и т д.
  const computerMove = computerClickMove(); //computerMove - это Переменная для фукнции userClick (не для функции computerClickMove)
  let result = "";

  if (playUser === imgSrcKamen) {
    if (computerMove === imgSrcNoj) {
      result = "Вы победили";
    } else if (computerMove === imgSrcKamen) {
      result = "Ничья";
    } else if (computerMove === imgSrcBumaga) {
      result = "Вы проиграли";
    }
  } else if (playUser === imgSrcNoj) {
    if (computerMove === imgSrcBumaga) {
      result = "Вы победили";
    } else if (computerMove === imgSrcNoj) {
      result = "Ничья";
    } else if (computerMove === imgSrcKamen) {
      result = "Вы проиграли";
    }
  } else if (playUser === imgSrcBumaga) {
    if (computerMove === imgSrcKamen) {
      result = "Вы победили";
    } else if (computerMove === imgSrcBumaga) {
      result = "Ничья";
    } else if (computerMove === imgSrcNoj) {
      result = "Вы проиграли";
    }
  }
  if (result === "Вы победили") {
    CheckGameComputerUser.win++;
  } else if (result === "Вы проиграли") {
    CheckGameComputerUser.lose++;
  } else if (result === "Ничья") {
    CheckGameComputerUser.tie++;
  }

  chekBtn.innerHTML = `Счёт (Вы) - ${CheckGameComputerUser.win} : (Ком) - ${CheckGameComputerUser.lose}`;
  tieBtn.innerHTML = `Ничья ${CheckGameComputerUser.tie}`;
  user.innerHTML = `Вы: ${playUser}`;
  computer.innerHTML = `Копютер: ${computerMove}`;
  resultGame.innerHTML = `Результат: ${result}`;

  // console.log(`Вы: ${playUser} Computer: ${computerMove} Резльтат: ${result}`);
}
function computerClickMove() {
  let randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = imgSrcKamen;
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = imgSrcNoj;
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = imgSrcBumaga;
  }
  return computerMove;
}
