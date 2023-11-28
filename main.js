
function playGame(playerChoice) {
    
  var choices = ['rock', 'paper', 'scissors'];
///we declared a variable where we stored our choices (the options that we will chose)
  var computerChoice = choices[Math.floor(Math.random() * 3)];
///we declared a variable thatt will be the computer's choice with math.flor math.random that will chose one of the 
//choices indexes (0 or 1 or 2)
  var result = '';
  //a variable where we will store the result in a form of strings
  if (playerChoice === computerChoice) {
      result = 'null';
      //first condition where if we both choose the same ption it will be a draw 
  } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
      //the second if condition where there are the possibilies that make the player win 
  ) {
      result = 'You win!';
  } else {
      result = 'You lose!';
  }
  //the last consition where if none of the prvious conditions is met , the the player loses 

  document.getElementById('result').innerText = `You chose ${playerChoice}, computer chose ${computerChoice}. ${result}`;
}
//this will display the result after the player choses an option : it will add the player choice+the computer's choice(random) 
//and the result according to the if conditions

