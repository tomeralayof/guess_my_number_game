"use strict";

 let gameStatus = {
  counter: 20,
  score: 0,
  randomNumber : Math.floor(Math.random() * (20 - 1)),
  decrementCounter: function () {
    --this.counter;
  },
  showCounter: function () {
    document.querySelector(".label-score").textContent = `💯 Score: ${this.counter}`;
  },

  showScore : function() {
      document.querySelector(".highscore").textContent =` ${this.score}`;
  } 
};

let setBackground = (color) => {
  document.body.style.backgroundColor = color;
};

let setMessage = (msg) => {
  document.querySelector(".message").textContent = msg;
};

let setNumber = (randomNumber) => {
  document.querySelector(".number").textContent = randomNumber;
};

let decrementAndShowNumber = () => {
    gameStatus.decrementCounter();
    gameStatus.showCounter();
}

let updateMessage = (msg) => {
    if(gameStatus.counter > 0){
        setMessage(msg);
        decrementAndShowNumber();
    }
    else {
        setMessage("you lost the game, please start again...");
    }
}

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
    gameStatus.randomNumber = Math.floor(Math.random() * (20 - 0));
    document.querySelector(".guess").value ="";
    gameStatus.counter = 20;
    setMessage("Start guessing...");
    gameStatus.showCounter();
});