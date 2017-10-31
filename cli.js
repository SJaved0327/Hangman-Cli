
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

	if (newGame.guesses < 9){

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

StartGame(newGame);
