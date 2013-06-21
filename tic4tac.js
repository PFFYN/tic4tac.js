/*

javascript for the tic4tac web app, by bph-

*/

// makes it player one's turn by default
var playerOneTurn = true;

// declares that the game is not over by default
var gameOver = false;
var victory = false;

// introduces the player's name variables
var playerOne = "&nbsp;";
var playerTwo = "&nbsp;";
var playerOneName;
var playerTwoName;

// array that keeps track of numeric value of each space, and assigns playerOne to 1 and playerTwo to 4,
// then sets the values of each space to 0 by default
var playerOneValue = 1;
var playerTwoValue = 4;
var boardValue = new Array();
boardValue[0] = 0;
boardValue[1] = 0;
boardValue[2] = 0;
boardValue[3] = 0;
boardValue[4] = 0;
boardValue[5] = 0;
boardValue[6] = 0;
boardValue[7] = 0;
boardValue[8] = 0;

// function to gather the player's names and determine who is x and who is y
function welcome() {
	
	var setupSuccess = false;
	document.getElementById('gameStream').innerHTML = ". . . setting up game . . .";
	playerOneName = window.prompt("Please enter Player One's name:","Player One");
	playerTwoName = window.prompt("Please enter Player Two's name:","Player Two");
	
	while (setupSuccess == false) {
		playerOne = window.prompt(playerOneName + ", would you like to be Xs or Os?","X");

		if (playerOne == "X") {
			playerTwo = "O";
			setupSuccess = true;
		}
		if (playerOne == "x") {
			playerOne = "X";
			playerTwo = "O";
			setupSuccess = true;
		}
		if (playerOne == "O") {
			playerTwo = "X";
			setupSuccess = true;
		}
		if (playerOne == "o") {
			playerOne = "O";
			playerTwo = "X";
			setupSuccess = true;
		}
	}

	document.getElementById('gameStream').innerHTML = "Let's Play! " + playerOneName + ", please click on a region to make your first move:";
}

function enterTurn(space) {
	
	var spaceNumber = new Array();
	spaceNumber = space;
	var currentSpace = spaceNumber[1];

	if (playerOne != "&nbsp;" && gameOver == false) {
		
		// checks to see if the space is already occupied
		if (document.getElementById(space).innerHTML.match("&nbsp;")) {

			// if the space isn't occupied, assigns it to current player
			if (playerOneTurn == true && gameOver == false) {
				document.getElementById(space).innerHTML = playerOne;
				boardValue[currentSpace - 1] = playerOneValue;
			} 
			if (playerOneTurn == false && gameOver == false) {
				document.getElementById(space).innerHTML = playerTwo;
				boardValue[currentSpace - 1] = playerTwoValue;
			} 

			// checks to see if the game has ended
			endGame()

			// changes turns and asks for the next move to be made
			playerOneTurn = !playerOneTurn;
			if (playerOneTurn == true && gameOver == false) {
				document.getElementById('gameStream').innerHTML = playerOneName + ", please make a move:";
			} 
			if (playerOneTurn == false && gameOver == false) {
				document.getElementById('gameStream').innerHTML = playerTwoName + ", please make a move:";
			} 
		}
	}
}

// function to see if the game has ended
function endGame() {

	// checks to see if playerOne has won the game
	if ((boardValue[0] + boardValue[1] + boardValue[2] == 3) || (boardValue[3] + boardValue[4] + boardValue[5] == 3) || (boardValue[6] + boardValue[7] + boardValue[8] == 3) || (boardValue[0] + boardValue[3] + boardValue[6] == 3) || (boardValue[1] + boardValue[4] + boardValue[7] == 3) || (boardValue[2] + boardValue[5] + boardValue[8] == 3) || (boardValue[0] + boardValue[4] + boardValue[8] == 3) || (boardValue[6] + boardValue[4] + boardValue[2] == 3)){
		
		// if so, alerts that the game is over and playerOne has won
		window.alert("Congratulations, " + playerOneName + ", you are the winner!");
		gameOver = true;
		victory = true;
		document.getElementById('gameStream').innerHTML = "Game over. " + playerOneName + " is the victor!";
	}

	// checks to see if playerTwo has won the game
	if ((boardValue[0] + boardValue[1] + boardValue[2] == 12) || (boardValue[3] + boardValue[4] + boardValue[5] == 12) || (boardValue[6] + boardValue[7] + boardValue[8] == 12) || (boardValue[0] + boardValue[3] + boardValue[6] == 12) || (boardValue[1] + boardValue[4] + boardValue[7] == 12) || (boardValue[2] + boardValue[5] + boardValue[8] == 12) || (boardValue[0] + boardValue[4] + boardValue[8] == 12) || (boardValue[6] + boardValue[4] + boardValue[2] == 12)){
		
		// if so, alerts that the game is over and playerTwo has won
		window.alert("Congratulations, " + playerTwoName + ", you are the winner!");
		gameOver = true;
		victory = true;
		document.getElementById('gameStream').innerHTML = "Game over. " + playerTwoName + " is the victor!";
	}

	// checks to see if a cats game has occurred
	if (boardValue[0] != 0 && boardValue[1] != 0 && boardValue[2] != 0 && boardValue[3] != 0 && boardValue[4] != 0 && boardValue[5] != 0 && boardValue[6] != 0 && boardValue[7] != 0 && boardValue[8] != 0 && victory == false) {

		// if so, alerts that the game is over and nobody has won
		window.alert("Cats game!  Neither player has won.");
		gameOver = true;
		document.getElementById('gameStream').innerHTML = "Game over. Cats game!";
	}

	if (gameOver == true) {

		// once the game is over, make a clickable button to play again
		document.getElementById('belowGame').innerHTML = "Click <a href='#' onclick='gameReset();'>here</a> to play again!";
	}
}

function gameReset() {

	// states that the game is no longer over
	gameOver = false;
	victory = false;

	// resets the numeric value array
	boardValue[0] = 0;
	boardValue[1] = 0;
	boardValue[2] = 0;
	boardValue[3] = 0;
	boardValue[4] = 0;
	boardValue[5] = 0;
	boardValue[6] = 0;
	boardValue[7] = 0;
	boardValue[8] = 0;

	// clears the visible game board
	document.getElementById('s1').innerHTML = "&nbsp;";
	document.getElementById('s2').innerHTML = "&nbsp;";
	document.getElementById('s3').innerHTML = "&nbsp;";
	document.getElementById('s4').innerHTML = "&nbsp;";
	document.getElementById('s5').innerHTML = "&nbsp;";
	document.getElementById('s6').innerHTML = "&nbsp;";
	document.getElementById('s7').innerHTML = "&nbsp;";
	document.getElementById('s8').innerHTML = "&nbsp;";
	document.getElementById('s9').innerHTML = "&nbsp;";

	// makes it playerOne's move and invites playerOne to make their first move
	playerOneTurn = true;
	document.getElementById('gameStream').innerHTML = "Let's Play! " + playerOneName + ", please click on a region to make your first move:";
	document.getElementById('belowGame').innerHTML = "&nbsp;";
}
