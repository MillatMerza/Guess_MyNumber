"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let highscore = 0;
const canvas = document.querySelector(".party");

document.querySelector(".Guess").addEventListener("click", function () {
  let guess = Number(document.querySelector("#guess").value);

  if (guess === secretNumber) {
    document.querySelector(".message").textContent = "💡 Currect guess";
    document.querySelector(".secretNumber").textContent = secretNumber;
    let score = 20;
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
    let mySound = new Audio("success-1-6297.mp3");
    mySound.play();
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore_number").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    document.querySelector(".message").textContent =
      guess > secretNumber ? "Too High!" : "Too Low!";
    if (score > 1) {
      score--;
      document.querySelector(".score_number").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😛 You Lost!";
      document.querySelector(".score_number").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".secretNumber").textContent = secretNumber;
  document.querySelector(".message").textContent = " 🤔 Start guessing....";
  document.querySelector(".score_number").textContent = 20;
  score = 20;
  document.querySelector("#guess").value = "";
});
