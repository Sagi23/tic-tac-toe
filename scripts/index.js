const board = document.querySelectorAll(".board");
const right = document.querySelector(".right");
const left = document.querySelector(".left");
const show = document.querySelector(".show");
const par = document.querySelector(".par");
const playAgainBtn = document.querySelector(".btn");
let playerOneTurn = true;
const winingPlay = [
  [board[0], board[1], board[2]],
  [board[3], board[4], board[5]],
  [board[6], board[7], board[8]],
  [board[0], board[3], board[6]],
  [board[1], board[4], board[7]],
  [board[2], board[4], board[6]],
  [board[0], board[4], board[8]],
  [board[2], board[5], board[8]],
];

const winCheck = () => {
  for (let i = 0; i < winingPlay.length; i++) {
    if (winingPlay[i].every((x) => x.textContent == "X")) {
      par.innerHTML = "<span>The winner is Player 1!</span>";
      show.style.display = "block";
    } else if (winingPlay[i].every((x) => x.textContent == "O")) {
      par.innerHTML = "<span>The winner is Player 2!</span>";
      show.style.display = "block";
    } else if ([...board].every((e) => e.textContent !== "")) {
      par.innerHTML = "<span>Its a Tie!</span>";
      show.style.display = "block";
    }
  }
};

const turn = () => {
  board.forEach((element) => {
    element.addEventListener("click", function () {
      if (playerOneTurn) {
        element.textContent = "X";
        element.classList.add("bold");
        right.style.backgroundColor = "#7ad6ff";
        left.style.backgroundColor = "#e5e5e5";
        playerOneTurn = false;
      } else if (!playerOneTurn) {
        element.textContent = "O";
        element.classList.add("bold");
        right.style.backgroundColor = "#e5e5e5";
        left.style.backgroundColor = "#7aff99";
        playerOneTurn = true;
      }
      element.classList.add("clicked");
      winCheck();
    });
  });
};

playAgainBtn.addEventListener("click", function () {
  show.style.display = "none";
  board.forEach((element) => {
    element.textContent = "";
    element.classList.remove("clicked");
  });
  playerOneTurn = true;
  right.style.backgroundColor = "#e5e5e5";
  left.style.backgroundColor = "#7aff99";
});

turn();
