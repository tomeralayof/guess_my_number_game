import GameStatus from "./GameStatus.js"

const gameStatus = new GameStatus();
gameStatus.chooseRandom();

const setBackground = (color) => {
    document.body.style.backgroundColor = color;
};
  
const setMessage = (msg) => {
    document.querySelector(".message").textContent = msg;
};
  
const setNumber = (randomNumber) => {
    document.querySelector(".number").textContent = randomNumber;
};
  
const decrementAndShowNumber = () => {
    gameStatus.decrementCounter();
    gameStatus.showCounter();
}
  
const updateMessage = (msg) => {
    if(gameStatus.counter > 0){
        setMessage(msg);
        decrementAndShowNumber();
    }
    else {
        setMessage("you lost the game, please start again...");
    }
}

export {gameStatus,setBackground,setMessage,setNumber,decrementAndShowNumber,updateMessage}