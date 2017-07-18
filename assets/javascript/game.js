
// create the variables
$(document).ready(function() {

	var baseball;
    var football;
    var basketball;
    var soccer;
    var randomNumber;
    var totalScore;
    var wins = 0;
    var losses = 0;
    var randomValue;

 //create the functions 
    function randomGenerator(min, max) {
        return min + Math.floor((Math.random() * (max + 1 - min)));
    }
    
    function randomBallValue() {
    	randomValue = randomGenerator(1,12);
    	return randomValue;
    }

    function reset() {
    	totalScore = 0;
    	randomNumber = randomGenerator(19,120);
    	$("#randomNumber").text(randomNumber);
    	$("#total-score").text(totalScore);
    	baseball = randomBallValue();
    	football = randomBallValue();
    	basketball = randomBallValue();
    	soccer = randomBallValue();
    }

    $("#win").text(wins);
    $("#loss").text(losses);

    $("#baseball").on("click", function() {
    	totalScore += baseball;
    	console.log(totalScore);
    	$("#total-score").text(totalScore);
    	scoreTest();
    });

    $("#football").on("click", function() {
    	totalScore += football;
    	console.log(totalScore);
    	$("#total-score").text(totalScore);
    	scoreTest();
    });

    $("#basketball").on("click", function() {
    	totalScore += basketball;
    	console.log(totalScore);
    	$("#total-score").text(totalScore);
    	scoreTest();
    });

    $("#soccer").on("click", function() {
    	totalScore += soccer;
    	console.log(totalScore);
    	$("#total-score").text(totalScore);
    	scoreTest();
    });

//create the scenarios for winning and losing  

    function scoreTest() {
    	if (totalScore === randomNumber) {
	    	wins++;
	    	$("#win").text(wins);
	    	reset();
	    	alert("Boom! Winner!");
	    } 

	    if (totalScore > randomNumber) {
	    	losses++;
	    	$("#loss").text(losses);
	    	reset();
	    	alert("Better luck next time!");
	    }
    }

    reset();
    baseball = randomBallValue();
    football = randomBallValue();
    basketball = randomBallValue();
    soccer = randomBallValue();


//check console for ball values
    console.log(baseball);
    console.log(football);
    console.log(basketball);
    console.log(soccer);
})

