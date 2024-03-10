// img выводим из dom
const imgSrcKamen = `<img src="./imgIcon/icons8-будь-мужиком,-блеать-48.png" alt=imgSrcBumaga/>`;
const imgSrcNoj = `<img src="./imgIcon/icons8-рука-ножницы-тип-кожи-2-48.png" alt=imgSrcBumaga/>`;
const imgSrcBumaga = `<img src="./imgIcon/icons8-вся-рука-48.png" alt=imgSrcBumaga/>`;

const computer = document.getElementById("computerClickPlay");
const user = document.getElementById("userClickPlay");
const resultGame = document.getElementById("resultGame");
const chekBtn = document.getElementById("сheck");
const tieBtn = document.getElementById("tie");
const titleVs = document.getElementById("vs");
const winYouGame = document.getElementById("youWin");
const restartBtn = document.getElementById("btnRestart");

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
  let resultYouWin = "";

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
  if (CheckGameComputerUser.win === 6) {
    resultYouWin = "🎉";
    rockBtn.setAttribute("disabled", " ");
    paperBtn.setAttribute("disabled", " ");
    scissorsBtn.setAttribute("disabled", " ");
  } else if (CheckGameComputerUser.lose === 6) {
    resultYouWin = "😫";
    rockBtn.setAttribute("disabled", " ");
    paperBtn.setAttribute("disabled", " ");
    scissorsBtn.setAttribute("disabled", " ");
  } else if (CheckGameComputerUser.tie === 6) {
    resultYouWin = "🙌";
    rockBtn.setAttribute("disabled", " ");
    paperBtn.setAttribute("disabled", " ");
    scissorsBtn.setAttribute("disabled", " ");
  }
  // let paperClick = () => userClick(imgSrcNoj);
  // paperBtn.onclick = paperClick;

  winYouGame.innerHTML = `${resultYouWin}`;
  chekBtn.innerHTML = `Счёт:<br/> (Вы) ${CheckGameComputerUser.win} : ${CheckGameComputerUser.lose} (К)`;
  tieBtn.innerHTML = `Ничья: ${CheckGameComputerUser.tie}`;
  user.innerHTML = `Вы: ${playUser}`;
  computer.innerHTML = ` Компютер: ${computerMove}`;
  titleVs.innerHTML = " VS ";
  resultGame.innerHTML = `Результат: 
  ${result}`;

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
restartBtn.addEventListener("click", function () {
  CheckGameComputerUser.win = 0;
  CheckGameComputerUser.lose = 0;
  CheckGameComputerUser.tie = 0;

  winYouGame.innerHTML = "";
  chekBtn.innerHTML = `Счёт:<br/> (Вы) ${CheckGameComputerUser.win} : ${CheckGameComputerUser.lose} (К)`;
  tieBtn.innerHTML = `Ничья: ${CheckGameComputerUser.tie}`;
  user.innerHTML = "Вы: ?";
  computer.innerHTML = "Компютер: ?";
  titleVs.innerHTML = " VS ";
  resultGame.innerHTML = "Результат; ?";

  rockBtn.removeAttribute("disabled");
  paperBtn.removeAttribute("disabled");
  scissorsBtn.removeAttribute("disabled");
});
