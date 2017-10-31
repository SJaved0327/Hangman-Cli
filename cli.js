
var Letter = require("./letters.js");
var Word = require("./words.js");
var Game = require("./game.js");

var inquirer = require("inquirer");

//==============================//

var newGame = new Game;
var guesses = 9;

//newGame.chosenWord.wordArray[i].currentDisplay

//==============================//

var StartGame = function (newGame){

	if (guesses < 9){

		console.log("Guesses left: ")
		inquirer.prompt([
      {
        letter: "letter",
        message: "Guess a letter:"
      },
	]).then(function(answers){
	      var newPlayer = new Player(
	        answers.name,
	        answers.position,
	        answers.offense,
	        answers.defense);
      // pushes newguy object into our array
	      playerArray.push(newPlayer);
	      // add one to count to increment our recursive loop by one
	      count++;
	      // run the askquestion function again so as to either end the loop or ask the questions again
	      askQuestion();
	      
    });

//==============================//

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


//==============================//




StartGame(newGame);
