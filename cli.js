var Words = require("./words.js");
var Letters = require("./letters.js");

var StartGame = function (){




};








//////

var fs = require("fs");
var inquirer = require("inquirer");

//var UserSearch = require("./userWeather.js");
var WeatherAdmin = require("./adminWeather.js");

//-------------------------------------//

var askQuestion = function(){
	if (count < 8){
		inquirer.prompt([
      {
        letter: "letter",
        message: "Guess a letter:"
      },
	]).then(function(answers){
      // initializes the variable newguy to be a programmer object which will
      // take in all of the user's answers to the questions above
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
    // else statement which runs a for loop that will execute .printInfo() for each object inside of our array
  }
  else {
    for (var x = 0; x < 6; x++) {
      	startersArray.push(playerArray[x]);	
    };

    console.log(`--- Starters ---`);
    console.log(startersArray);

    for (var x = 6; x < 8; x++) {
    	subsArray.push(playerArray[x]);	
    }
   
    console.log(`--- Subs --`);
    console.log(subsArray);

  };

 };





//-------------------------------------//

//user type
var userType = process.argv[2];

//name
var userName = process.argv[3];

//location
var userLocation = pocess.argv[4];

//create instance of admin
var myAdmin = new WeatherAdmin();

if (userType === "admin"){
	myAdmin.getData();
}else{
	myAdmin.newUserSearch(userName, userLocation);
};