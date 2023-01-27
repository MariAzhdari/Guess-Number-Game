let secretNumber = Math.trunc(Math.random()*20)+1

let displayMessage = function(message){
  document.querySelector(".message").textContent = message;
}

let displayNumber = function(number){
  document.querySelector(".number").textContent = number;
}

let displayStyleToNumber =function(number){
  document.querySelector(".number").style.width =number;
}

let displayScore =function(score){
document.querySelector(".score").textContent =score;
}

let displayBackGroundStyle =function(color){
  document.querySelector("body").style.backgroundColor =color;
}

let displayHighScore =function(highscore){
  document.querySelector('.highscore').textContent = highscore;
}


let score =20; 
let highscore = 0;

document.querySelector(".check").addEventListener('click',function(){
 const guess =Number(document.querySelector(".guess").value);

//  console.log( guess , typeof  guess);
 if(!guess){
displayMessage("No Number!!!")
 //when player win
 }else if(guess ===secretNumber){
 displayMessage("Well Done***")
displayNumber(secretNumber);
displayBackGroundStyle("#60b347")
displayStyleToNumber("30rem")
     if (score > highscore) {
      highscore = score;
      displayHighScore(highscore);
    }
 }
  // when guess is not === to secretNumber
  else if(guess !== secretNumber){
  if(score >1){
 displayMessage(guess > secretNumber ? "Too High!!" : "Too low!!");
 score--
displayScore(score)
}else {
 displayMessage("Game Over")
  displayScore("0")
}
  }
  })

document.querySelector(".again").addEventListener("click",function(){
  score = 20;
  secretNumber = Math.trunc(Math.random()*20)+1
  displayNumber("?")
  displayMessage("Start guessing...")
  displayScore(score)
  document.querySelector(".guess").value ="";
  displayBackGroundStyle("#222")
  displayStyleToNumber("15rem");
  displayHighScore(highscore);
})