 "use strict";

 import {
  gameStatus,
  setBackground,
  setMessage,
  setNumber,
  updateMessage
} from "./modules/gameFunctions.js"

document.querySelector(".check").addEventListener("click", () => {
    let inputUserVal = document.querySelector(".guess").value;
    if (inputUserVal < gameStatus.randomNumber) {
        updateMessage("too low ...");
    }
    else if (inputUserVal > gameStatus.randomNumber) {
        updateMessage("too high ...");
    }
   else {
    setBackground("green");
    setNumber(gameStatus.randomNumber);
      if(gameStatus.counter > gameStatus.score) {
          gameStatus.score = gameStatus.counter;
      }
    gameStatus.showScore();
    setMessage("you win !");
  }
});

document.querySelector(".again").addEventListener("click", () => {
    setBackground("#222");
    setNumber("?");
    gameStatus.chooseRandom();
    document.querySelector(".guess").value ="";
    gameStatus.counter = 20;
    setMessage("Start guessing...");
    gameStatus.showCounter();
    console.log(gameStatus.randomNumber);
});
