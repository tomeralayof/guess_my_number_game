export default class GameStatus {

    constructor(){
     this.counter = 20;
     this.score = 0;
     this.randomNumber = 0;
   }
  
    showScore () {
      document.querySelector(".highscore").textContent =` ${this.score}`;
   } 
  
    showCounter () {
      document.querySelector(".label-score").textContent = `💯 Score: ${this.counter}`;
   }
  
   decrementCounter () {
      --this.counter;
   }
   chooseRandom () {
     this.randomNumber = Math.floor(Math.random() * (20 - 1));
   }
}