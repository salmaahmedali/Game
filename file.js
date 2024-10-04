let secretNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
document.querySelector(".number").textContent = secretNum;
const displaymessage=(message)=>{
document.querySelector(".message").textContent=message;
}
document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".inp-left").value;
  if (!guess) {
    document.querySelector(".message").textContent = "no number";
  } else if (guess == secretNum) {
    displaymessage("correct number")
    // document.querySelector(".message").textContent = "correct number";
    document.querySelector(".number").textContent = secretNum;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "150px";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  //refactor the code
  else if (guess != secretNum) {
    if (score > 1) {
        displaymessage(guess > secretNum ? "Too high" : "too low")
    //   document.querySelector(".message").textContent =
    //     guess > secretNum ? "Too high" : "too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
    //   document.querySelector(".message").textContent = "you lost the game";
    displaymessage("you lost the game")
      document.querySelector(".score").textContent = 0;
    }
  }
  // else if(guess > secretNum){
  //     if(score > 1){

  //         document.querySelector(".message").textContent="high"
  //         score--;
  //         document.querySelector(".score").textContent=score;
  //     }
  //     else{
  //         document.querySelector(".message").textContent="you lost the game"
  //         document.querySelector(".score").textContent= 0
  //     }
  // }
  // else if (guess < secretNum) {
  //     if(score > 1){

  //         document.querySelector(".message").textContent="low"
  //         score--;
  //         document.querySelector(".score").textContent=score;
  //     }
  //     else{
  //         document.querySelector(".message").textContent="you lost the game"
  //         document.querySelector(".score").textContent= 0
  //     }
  // }
});
//function to reset button
document.querySelector(".btn-again").addEventListener("click", function () {
  score = 20;
  highscore = 0;
  secretNum = Math.trunc(Math.random() * 20 + 1);
//   document.querySelector(".message").textContent = "start guessing";
displaymessage("start guessing");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  guess = document.querySelector(".inp-left").value = "";
  document.querySelector(".highscore").textContent = highscore;
  document.querySelector("body").style.backgroundColor = "#black";
});
