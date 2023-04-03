let computerGuess;
let userGuess = [];

const init = () => {
  computerGuess = Math.floor(Math.random() * 100);
  // console.log(computerGuess);
  document.getElementById("newGameButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
};

const startGame = () => {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("gameArea").style.display = "block ";
};

// Start new game
  const startNewGame = () =>{
    document.getElementById("newGameButton").style.display = "inline";
    document.getElementById("inputBox").setAttribute("disabled", true);

  }

  //Reload the page
  const newGameBegin = ()=>{
    window.location.reload();
  }

//main logic of our app

const compareGuess = () => {
  const userNumber = Number(document.getElementById("inputBox").value);
  console.log(userNumber);
  userGuess = [...userGuess,userNumber];
  document.getElementById("guesses").innerHTML = userGuess;

  // Check the value low oor high
  if (userGuess.length < maxGuess) {
    if (userNumber > computerGuess) {
      document.getElementById("textOutput").innerHTML = `Your Guess is High 💥`;
      document.getElementById("inputBox").value = "";
    } else if (userNumber < computerGuess) {
      document.getElementById("textOutput").innerHTML = `Your Guess is Low 😒`;
      document.getElementById("inputBox").value = "";
    } else {
      document.getElementById("textOutput").innerHTML = `It's Correct 😊`;
      document.getElementById("inputBox").value = "";
      startNewGame();

    }
  } else {
    if (userNumber > computerGuess) {
      document.getElementById(
        "textOutput"
      ).innerHTML = `You Loose!! correct number was ${computerGuess} `;
      document.getElementById("inputBox").value = "";
      startNewGame();
    } else if (userNumber < computerGuess) {
      document.getElementById(
        "textOutput"
      ).innerHTML = `You Loose!! correct number was ${computerGuess} `;
      document.getElementById("inputBox").value = "";
      startNewGame();

    } else {
      document.getElementById("textOutput").innerHTML = `It's Correct 😊`;
      document.getElementById("inputBox").value = "";
      startNewGame();

    }
  }

  document.getElementById("attempts").innerHTML = userGuess.length;
};


const easyMode = () => {
  maxGuess = 10;
  startGame();
};

const hardMode = () => {
  maxGuess = 5;
  startGame();
};
