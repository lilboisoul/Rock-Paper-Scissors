function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
function computerSelection() {
    let a = getRandomInt(0, 2);
    if (a == 0) {
        return "Rock";
     }
    else if(a == 1) {
        return "Paper";
    }
    else{
        return "Scissors";
    }
  }
 function playerSelection(){
     let selection = prompt("Rock, Paper or Scissors?");
     selection = selection.toLowerCase();
    if (selection == "rock"){
        return "Rock";
    }
    else if(selection == "paper") {
        return "Paper";
    }
    else if(selection == "scissors"){
        return "Scissors";
    }
    else{
        return "Wrong"
    }

 }
 function playRound(playerSelection, computerSelection){
    if(playerSelection == "Wrong")
        return "Wrong answer!"
    if(playerSelection == "Rock" && computerSelection == "Rock"){
        return "It's a tie!"
    }
    else if(playerSelection == "Rock" && computerSelection == "Paper"){
        return "You lose! " + computerSelection + " beats " + playerSelection + "!";
    }
    else if(playerSelection == "Rock" && computerSelection == "Scissors"){
        return "You win! " + playerSelection + " beats " + computerSelection + "!";
    }
    else if(playerSelection == "Paper" && computerSelection == "Rock"){
        return "You win! " + playerSelection + " beats " + computerSelection + "!";
    }
    else if(playerSelection == "Paper" && computerSelection == "Paper"){
        return "It's a tie!"
    }
    else if(playerSelection == "Paper" && computerSelection == "Scissors"){
        return "You lose! " + computerSelection + " beats " + playerSelection + "!";
    }
    else if(playerSelection == "Scissors" && computerSelection == "Rock"){
        return "You lose! " + computerSelection + " beats " + playerSelection + "!";
    }
    else if(playerSelection == "Scissors" && computerSelection == "Paper"){
        return "You win! " + playerSelection + " beats " + computerSelection + "!";
    }
    else if(playerSelection == "Scissors" && computerSelection == "Scissors"){
        return "It's a tie!"
    }
 }
 function game()
 {
     for(let i = 0; i < 5; i++)
     {
         console.log(playRound(playerSelection(), computerSelection()));
     }
 }
// let a = playerSelection();
// let b = computerSelection();
// console.log(playRound(a, b));
game();
//  const r = "Rock";
//  const p = "Paper";
//  const sc = "Scissors";
// console.log(playRound(r,r));
// console.log(playRound(r,p));
// console.log(playRound(r,sc));
// console.log(playRound(p,r));
// console.log(playRound(p,p));
// console.log(playRound(p,sc));
// console.log(playRound(sc,r));
// console.log(playRound(sc,p));
// console.log(playRound(sc,sc));

  
