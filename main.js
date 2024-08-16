"use strict";
const canvas = document.querySelector(".party");
let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 10;
let highscore = 0;
function dipslaymessage(message) {
  document.querySelector(".message").textContent = message;
}
function secret(secret) {
  document.querySelector(".secretNumber").textContent = secret;
}

document.querySelector(".Guess").addEventListener("click", function () {
  let guess = Number(document.querySelector("#guess").value);

  if (guess === secretNumber) {
    dipslaymessage("💡 Currect guess");
    secret(secretNumber);
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
    let mySound = new Audio("success-1-6297.mp3");
    mySound.play();
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore_number").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    dipslaymessage(guess > secretNumber ? "Too High!" : "Too Low!");
    if (score > 1) {
      score--;
      document.querySelector(".score_number").textContent = score;
    } else {
      let mySound = new Audio("negative_beeps-6008.mp3");
      mySound.play();
      dipslaymessage("😛 You Lost!");
      document.querySelector(".score_number").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  dipslaymessage(" 🤔 Start guessing");
  document.querySelector(".score_number").textContent = 10;
  score = 10;
  document.querySelector("#guess").value = "";
  secret("?");
});

document.querySelector(".incress").addEventListener("click", () => {
  const guessInput = document.getElementById("guess");
  if (guessInput.value < 20) {
    guessInput.value++;
  }
});
document.querySelector(".decress").addEventListener("click", () => {
  const guessInput = document.getElementById("guess");
  if (guessInput.value > 0) {
    guessInput.value--;
  }
});
