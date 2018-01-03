// to do with tutor: 
//  1 - In the for loop of the array:
			// loop through array of questions and loop through inner array of answers
			// why are you using the tics?  ``?  Can you also use quotation marks "" to achieve the same results?   
			// why do you use "ques${i}"?  where does the "ques" come from? why not use "questionText"?
			// why are you using id = :q${i}?  Why not reuse "ques${i}" again?  And why use curley braces {} for the i instead of []?
//  2 - How to assign correct and incorrect answers to questions  
//	3 - In the functions to hide and show different content on the page, what is the significance of the "return" command? 

//============  VARIABLES ================================
var seconds = 15;
var timer;
var right_answers = 0;


//var userInput = new Array();



// reference:  https://stackoverflow.com/questions/31093396/using-radio-buttons-to-tally-a-score-in-a-quiz	
// Array of questions and answers
var questionsArray = [{
	
    questionText: "1) Which is safest during a tornado?",
		answers: [{
			answerText: "Inside a car",
			correct: false
			},         
			{
			answerText: "Under an overpass",
			correct: false
			},         
			{
			answerText: "In a ditch",
			correct: true
			},             
			{
			answerText: "Under a tree",
			correct: false                             
			}
		]}, 
	
	{questionText: "2) Which kills more people every year?", 
		answers: [{
			answerText: "Lightning",
			correct: false
			},	
			{
			answerText: "Floods",
			correct: true
			},	
			{
			answerText: "Tornadoes",
			correct: false
			},	
			{
			answerText: "Hurricanes",
			correct: false		
			}
		]}, 
		
	{questionText: "3) Which type of cloud is highest in the atmosphere?",
   		answers: [{
			answerText: "Cirrus",
			correct: true
			},	
			{
			answerText: "Altostratus",
			correct: false
			},	
			{
			answerText: "Cumulus",
			correct: false
			},	
			{
			answerText: "Nimbostratus",
			correct: false		
			}
		]}, 
		
	{questionText: "4) Which type of cloud is most likely to produce rain?",
		answers: [{
			answerText: "Cirrus",
			correct: false
			},	
			{
			answerText: "Altocumulus",
			correct: false
			},	
			{
			answerText: "Cirrostratus",
			correct: false
			},	
			{
			answerText: "Cumulus",
			correct: true		
			}
		]}, 
	{questionText: "5) Which type of cloud produces lightning?",
		answers: [{
			answerText: "Altostratus",
			correct: false
			},	
			{
			answerText: "Cumulonimbus",
			correct: true
			},	
			{
			answerText: "Cirrocumulus",
			correct: false
			},	
			{
			answerText: "Nimbus",
			correct: false	
			}
		]}, 
	
	{questionText: "6) Which time of day is the best for tornado development?",
		answers: [{
			answerText: "6:00am - 10:00am",
			correct: false
			},	
			{
			answerText: "8:00pm - midnight",
			correct: false
			},	
			{
			answerText: "3:00pm - 6:00pm",
			correct: true
			},	
			{
			answerText: "Noon - 4:00pm",
			correct: false	
			}
		]}, 
		
	{questionText: "7) Tornadoes do not form in temperatures lower than 50 degrees Fahrenheit.",
		answers: [{
			answerText: "True",
			correct: false
			},	
			{
			answerText: "False",
			correct: true
			}			
		]},	
	
	{questionText: "8) A tornado that forms over water is called a Waterdevil.",
		answers: [{
			answerText: "True",
			correct: false
			},	
			{
			answerText: "False",
			correct: true   
			}
		]},
	
	{questionText: "9) Cold air is heavier than warm air.",
		answers: [{
			answerText: "True",
			correct: true
			},	
			{
			answerText: "False",
			correct: false
			}
		]}, 
	
	{questionText: "10) For golf-ball sized hail, a storms updraft must be:",
		answers: [{
			answerText: "70 mph",
			correct: true
			},	
			{
			answerText: "20 mph",
			correct: false
			},	
			{
			answerText: "50 mph",
			correct: false
			},	
			{
			answerText: "Does not need an updraft.",
			correct: false	
			}
		]}
	];
	
// loop through array of questions and loop through inner array of answers
// why are you using the tics?  ``?  
// why do you use "ques${i}"?  where does the ques come from? why not use "questionText"?
//   because it matches what was in the html, the i = the variable, the index in the first loop  (ques1, ques2, etc..)
// why are you using id = :q${i}?  Why not reuse "ques${i}"?  And why use {} for the i instead of []?
    // because it matches the id in the orignal html that is now commented out.{
    // ${} is syntax for inserting variables into strings.  ${} evaluates whatever is inside the curly braces in the javascript.
    // Must use back tics and NOT quotes to use the ${} syntax.


for (var i=0; i<questionsArray.length; i++) {
	var inputs = "";
		//inner loop of answers
		for (var j=0; j<questionsArray[i].answers.length; j++) {
			inputs += `<input type="radio" name="ques${i}" value="${questionsArray[i].answers[j].correct}"> ${questionsArray[i].answers[j].answerText}`
		
		console.log("The question is: " + questionsArray[i])
		}

	var questionHTML = `<div class="questions" id="q${i}"> ${questionsArray[i].questionText}
 	<div class = "answers">
 	<form>
 	${inputs}
 	</form>
 	</div> 
 	</div>`
 	$("#questions").append(questionHTML);
}
	

	
	
//=============== FUNCTIONS ==============================
	
//command to display the page with the start button upon page loading
document.addEventListener("DOMContentLoaded",function() {
$("#start_page").removeClass("showThenHide");
});


// function to call countdown when the start button is clicked
$("#click").on("click", function () {
	
	//command to show the quiz questions
	$("#quiz_page").removeClass("hidden"); 
		
	//command to hide the page with the start button
	$("#start_page").addClass("showThenHide");
	
	// code to set the clock countdown interval to seconds (1000 milliseconds = 1 second)
	timer = setInterval(countdown,1000);

});

// function to control the countdown
 function countdown(){
    console.log ("Counting down:"+ seconds);
    var timeRemaining = document.getElementById("seconds");

		if (seconds == 0) {

            // run the checkscore function
            checkScore();
      //  $("#end_click").trigger("click");
        
    
		//command to show the results page when time is up
		$("#results_page").removeClass("hidden_until_end");
		
		//command to hide the page with questions
		$("#quiz_page").addClass("hidden");
    
        // stops set interval so that console log doesn't keep counting down.
        clearInterval(timer);
    // use a "return" when you want to discontinue executing the function.
        return;

    } 	
		else {
        seconds --;
        timeRemaining.innerHTML=seconds;
        
    }

};

// function to skip to results page if the user presses the "Done" button before the time is up. 
$("#end_click").on("click", function () {
        checkScore();

	//command to show the results page when time is up
		$("#results_page").removeClass("hidden_until_end");
		
		//command to hide the page with questions
		$("#quiz_page").addClass("hidden");
		return;

		// ========NEED HELP - CANNOT GET THIS TO WORK=========
    // check score
    /*
	$('input[name="ques${i}"]:checked[value="${questionsArray[i].answers[j].correct}"]')
	if (value==="true")	{
		right_answers++;
	correct_answers.innerHTML=right_answers;
	console.log ("number correct:"+ '0');
		
    };
*/
})
	



function checkScore() {
 var correct = 0;
 var incorrect = 0; 
 var unanswered = 0;

    for (var i=0; i<questionsArray.length; i++) {
        // google jquery find name
        var checked_answers = $(`[name='ques${i}']:checked`);
        
        //  checked_answers is checking to see if we have a value at all, this type of check works with objects
        if (checked_answers [0]) 
        
        //  since we stored the correct and incorrect values as true and false already, the checked_answers.value
        //  will return a boolean value
        {
        console.log(checked_answers[0].value)
            if (checked_answers[0].value==="true"){
                correct++;
                }
            else {
                incorrect++;
            }    
        }

        else {
            unanswered++;
        }
    }


    document.getElementById("right_answers").innerHTML = correct;
    document.getElementById("wrong_answers").innerHTML = incorrect;
    document.getElementById("not_answered").innerHTML = unanswered;
}


/*
function checkScore() {
		"input:checked".val() === "true");
		$("#right_answers")+=0;
};



/*
function getCheckedValue(ques1){
    var radios = document.getElementsByName("radio"); // Get radio group by name
    for(var h=0; h<radios.length; h++)
      if(radios[h].checked) return radios[h].value; // return the checked value
}

function getScore(){
  var score = 0;
  for (var i=0; i<total; i++)
    if(getCheckedValue("ques"+i)===answers[i]) score += 1; // increment only
  return score;
}

function returnScore(){
  console.log("Your score is "+ getScore() +"/"+ total);
}
*/
 
 
 
 
 
 
 
 
/* 
 var value = 10;
 var intervalID;
 var timer = setTimeout('countdown()',30000);
 
 $(function CountDown(){
	 var timeRemaining = document.getElementById(seconds);
	 var seconds = timeRemaining.getAttribute (value);
	 timeRemaining.innerHTML=seconds;
	 if (seconds == -1) {
		 timeRemaining.innerHTML="Done";
		 return;
	 }
	 else {
		 timeRemaining.setAttribute("value", seconds);
	 }
 });
 




// Time calculations for seconds
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//prevents the clock from being sped up unnecessarily
var clockRunning = false;

// Set the time we're counting down to
var countDown = time("30").getTime();
 
 


// This code will run as soon as the page loads
window.onload = function() {
	if (!clockRunning) {
        timer = timer(timer.count, 1000);
        clockRunning = true;
    }
	

};
 // Output the result in an element with id="timer"
    document.getElementById("timer").innerHTML = seconds;
	
	 // DONE: Change the "timer" div to "00."
    $("#timer").text("30");
	
	
	*/
	
	/*
var timeRemaining = 10;

var timer = setInterval('countdown()',1000);

window.onload = function() {

	timeRemaining -= 1;
	if (timeRemaining  == 0) {
	clearInterval(timer);
	return "Game Over";
  
  console.log ("test");
 }
};
*/