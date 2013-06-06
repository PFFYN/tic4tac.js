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

// function to gather the player's names and determine who is x and who is y
function welcome() {
	document.getElementById('gameStream').innerHTML = ". . . setting up game . . .";
	playerOneName = window.prompt("Please enter Player One's name:","Player One");
	playerTwoName = window.prompt("Please enter Player Two's name:","Player Two");
	playerOne = window.prompt(playerOneName + ", would you like to be Xs or Os?","X");

	if (playerOne == "X") {
		playerTwo = "O";
	}
	if (playerOne == "O") {
		playerTwo = "X";
	}

	document.getElementById('gameStream').innerHTML = "Let's Play! " + playerOneName + ", please click on a region to make your first move:";
}

function enterTurn(space) {
	
	if (playerOne != "&nbsp;" && gameOver == false) {
		
		// checks to see if the space is already occupied
		if (document.getElementById(space).innerHTML.match("&nbsp;")) {

			// if the space isn't occupied, assigns it to current player
			if (playerOneTurn == true && gameOver == false) {
				document.getElementById(space).innerHTML = playerOne;
			} 
			if (playerOneTurn == false && gameOver == false) {
				document.getElementById(space).innerHTML = playerTwo;
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
	if ((document.getElementById('one').innerHTML.match(playerOne) && document.getElementById('two').innerHTML.match(playerOne) && document.getElementById('three').innerHTML.match(playerOne)) || (document.getElementById('four').innerHTML.match(playerOne) && document.getElementById('five').innerHTML.match(playerOne) && document.getElementById('six').innerHTML.match(playerOne)) || (document.getElementById('seven').innerHTML.match(playerOne) && document.getElementById('eight').innerHTML.match(playerOne) && document.getElementById('nine').innerHTML.match(playerOne)) || (document.getElementById('one').innerHTML.match(playerOne) && document.getElementById('four').innerHTML.match(playerOne) && document.getElementById('seven').innerHTML.match(playerOne)) || (document.getElementById('two').innerHTML.match(playerOne) && document.getElementById('five').innerHTML.match(playerOne) && document.getElementById('eight').innerHTML.match(playerOne)) || (document.getElementById('three').innerHTML.match(playerOne) && document.getElementById('six').innerHTML.match(playerOne) && document.getElementById('nine').innerHTML.match(playerOne)) || (document.getElementById('one').innerHTML.match(playerOne) && document.getElementById('five').innerHTML.match(playerOne) && document.getElementById('nine').innerHTML.match(playerOne)) || (document.getElementById('three').innerHTML.match(playerOne) && document.getElementById('five').innerHTML.match(playerOne) && document.getElementById('seven').innerHTML.match(playerOne))) {
		
		// if so, alerts that the game is over and playerOne has won
		window.alert("Congratulations, " + playerOneName + ", you are the winner!");
		gameOver = true;
		victory = true;
		document.getElementById('gamestream').innerHTML = "Game over. " + playerOneName + " is the victor!";
	}

	// checks to see if playerTwo has won the game
	if ((document.getElementById('one').innerHTML.match(playerTwo) && document.getElementById('two').innerHTML.match(playerTwo) && document.getElementById('three').innerHTML.match(playerTwo)) || (document.getElementById('four').innerHTML.match(playerTwo) && document.getElementById('five').innerHTML.match(playerTwo) && document.getElementById('six').innerHTML.match(playerTwo)) || (document.getElementById('seven').innerHTML.match(playerTwo) && document.getElementById('eight').innerHTML.match(playerTwo) && document.getElementById('nine').innerHTML.match(playerTwo)) || (document.getElementById('one').innerHTML.match(playerTwo) && document.getElementById('four').innerHTML.match(playerTwo) && document.getElementById('seven').innerHTML.match(playerTwo)) || (document.getElementById('two').innerHTML.match(playerTwo) && document.getElementById('five').innerHTML.match(playerTwo) && document.getElementById('eight').innerHTML.match(playerTwo)) || (document.getElementById('three').innerHTML.match(playerTwo) && document.getElementById('six').innerHTML.match(playerTwo) && document.getElementById('nine').innerHTML.match(playerTwo)) || (document.getElementById('one').innerHTML.match(playerTwo) && document.getElementById('five').innerHTML.match(playerTwo) && document.getElementById('nine').innerHTML.match(playerTwo)) || (document.getElementById('three').innerHTML.match(playerTwo) && document.getElementById('five').innerHTML.match(playerTwo) && document.getElementById('seven').innerHTML.match(playerTwo))) {
		
		// if so, alerts that the game is over and playerTwo has won
		window.alert("Congratulations, " + playerTwoName + ", you are the winner!");
		gameOver = true;
		victory = true;
		document.getElementById('gamestream').innerHTML = "Game over. " + playerTwoName + " is the victor!";
	}

}

