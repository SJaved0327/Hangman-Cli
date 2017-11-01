
var Letter = require("./letters.js");
var Word = require("./words.js");
var Game = require("./game.js");

var inquirer = require("inquirer");

//==============================//
//==============================//

var StartGame = function (newGame, guesses){

	if (guesses > 0){

		console.log(`Guesses left: ${guesses}`);

		inquirer.prompt([
	      {
	        name: "letter",
	        message: "Guess a letter:"
	      }
		]).then(function(answers){
			var userGuess = answers.letter
			
			newGame.chosenWord.CheckLetters(userGuess);

			if (newGame.chosenWord.CheckWords() === true){
				console.log("Winner!");
				guesses = 0;
			}
			if(guesses === 0){
				console.log("You lose!");
			}

			guesses--;
		    StartGame(newGame, guesses);
			      
		});
	};

};

//==============================//

var newGame = new Game();
var guesses = 9;

StartGame(newGame, guesses);

//==============================//
/*
var EndGame = function(){

	if (newGame.chosenWord.actualWord.toString() === newGame.chosenWord.displayArray.toString()) {
	    console.log("You win!");
	    StartGame(newGame);
	    guesses = 9;
	  }
	  else if (guesses === 0) {
	    console.log("You lose");
	    StartGame(newGame);
	    guesses = 9;
	  }

};
*/
//==============================//