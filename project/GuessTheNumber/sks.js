/** @format */

const message_box = document.querySelector("#message_box");
const guessField = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const CountdownResult = document.querySelector(".CountdownResult");
const lastResult = document.querySelector(".lastResult");
const resultParas = document.querySelector(".resultParas");

const random = parseInt(Math.random() * 1000 + 10);

let numberOfGuess = 1;

let playGame = true;

function startTimer(duration, display) {
     let timer = duration,
          minutes,
          seconds;
     const interval = setInterval(() => {
          minutes = Math.floor(timer / 60);
          seconds = timer % 60;

          seconds = seconds < 10 ? "0" + seconds : seconds;
          display.textContent = minutes + ":" + seconds;

          if (--timer < 0) {
               clearInterval(interval);
               message_box.innerHTML = "Time's up!";
          }
     }, 1000);
}
