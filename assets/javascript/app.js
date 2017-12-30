// to do with tutor:

//  1 -  get button on question page to work, right now when I try to activate it, it messes up the start page.

//  2 -  How to assign correct and incorrect answers to questions 

 

//============  VARIABLES ================================

var seconds = 60;

var timer;

var userInput = new Array();

 

//var answers = ["ditch","floods","cirrus", "cumulus", "cumulonimbus", "3-6pm", "false", "false", "true", "70mph" ],

//    right_answers = answers.length;

 



 

// https://stackoverflow.com/questions/31093396/using-radio-buttons-to-tally-a-score-in-a-quiz          

var questionsArray = [];

 

questionsArray.push({

    questionText: "1) Which is safest during a tornado?",

    answers: [{

    answerText: "Inside a car",

    correct: false

    },         {

    answerText: "Under an overpass",

    correct: false

},         {

    answerText: "In a ditch",

    correct: true

            },             {

    answerText: "Under a tree",

    correct: false                             

    }]}, {

               

    questionText: "2) Which kills more people every year?",

    answers: [{

        answerText: "Lightning",

        correct: false

    },         {

        answerText: "Floods",

        correct: true

    },         {

        answerText: "Tornadoes",

        correct: false

                },             {

        answerText: "Hurricanes",

        correct: false                             

    }]}, {

 

                questionText: "3) Which type of cloud is highest in the atmosphere?",

    answers: [{

        answerText: "Cirrus",

        correct: true

    },         {

        answerText: "Altostratus",

        correct: false

    },         {

        answerText: "Cumulus",

        correct: false

                },             {

        answerText: "Nimbostratus",

        correct: false                             

    }]}, {

               

                questionText: "4) Which type of cloud is most likely to produce rain?",

    answers: [{

        answerText: "Cirrus",

        correct: false

    },         {

        answerText: "Altocumulus",

        correct: false

    },         {

        answerText: "Cirrostratus",

        correct: false

                },             {

        answerText: "Cumulus",

        correct: true                              

    }]}, {

 

                questionText: "5) Which type of cloud produces lightning?",

    answers: [{

        answerText: "Altostratus",

        correct: false

    },         {

        answerText: "Cumulonimbus",

        correct: true

    },         {

        answerText: "Cirrocumulus",

        correct: false

                },             {

        answerText: "Nimbus",

        correct: false             

    }]}, {

 

                questionText: "6) Which time of day is the best for tornado development?",

    answers: [{

        answerText: "6:00am - 10:00am",

        correct: false

    },         {

        answerText: "8:00pm - midnight",

        correct: false

    },         {

        answerText: "3:00pm - 6:00pm",

        correct: true

                },             {

        answerText: "Noon - 4:00pm",

        correct: false             

    }]}, {

 

                questionText: "7) Tornadoes do not form in temperatures lower than 50 degrees Fahrenheit.",

    answers: [{

        answerText: "True",

        correct: false

    },         {

        answerText: "False",

        correct: true  

    }]}, {           

               

                questionText: "8) A tornado that forms over water is called a Waterdevil.",

    answers: [{

        answerText: "True",

        correct: false

    },         {

        answerText: "False",

        correct: true  

    }]}, {

 

                questionText: "9) Cold air is heavier than warm air.",

    answers: [{

        answerText: "True",

        correct: true

    },         {

        answerText: "False",

        correct: false

    }]}, {         

               

                questionText: "10) For golf-ball sized hail, a storms updraft must be:",

    answers: [{

        answerText: "70 mph",

        correct: true

    },         {

        answerText: "20 mph",

        correct: false

    },         {

        answerText: "50 mph",

        correct: false

                },             {

        answerText: "Does not need an updraft.",

        correct: false             

    }]}

               

);

 

 


               

               

                // Corresoponding function to call array

  /*              

var questions = function(questionsArray){

for (var i= 0; i < questionsArray.length; questionText) {

  console.log("Question is:" + questionText);

}

};

   */            

          

               

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



    //command to show the results page when time is up

    $("#results_page").removeClass("hidden_until_end");

    

    //command to hide the page with questions

    $("#quiz_page").addClass("hidden");

                               

    return;

 

    }

                
/*
                //   =============NEED HELP GETTING THIS TO WORK!!=======================

                //It's the button that you press after you have answered all the questions and

                // command to bring user to the results page if she finishes answering questions before the time is up
                else if $("#end_click").click() {;

                               

                //command to show the results page

                $("#results_page").removeClass("hidden_until_end");

                

                //command to hide the page with questions

                $("#quiz_page").addClass("hidden");



                return;

                                };

        */        

               

                               

                else {

        seconds --;

        timeRemaining.innerHTML=seconds;

       

    }

 

};

//  CANNOT GET THIS CODE TO WORK

// function to skip to results page if the user presses the "Done" button before the time is up.



$("#end_click").on("click", function () {

//command to show the results page when time is up

    $("#results_page").removeClass("hidden_until_end");

    

    //command to hide the page with questions

    $("#quiz_page").addClass("hidden");

    

    return;

 

    }) ;

         

 

 

// check score
//use names or checks in JQuery selectors
//https://api.jquery.com/checked-selector/
// syntax:   "input:checked".val()
   // .val is a function
   // will get a string in return, not the boolean of true or false
        // if (/*jQuery call goes here*/ === "true")
//$("input[name=question1]:checked")

/*	
Daniel Rosensweig	10:09 PM
https://api.jquery.com/checked-selector/
$("input[name=question1]:checked")
if (/*jQuery call goes here*/ === "true")
https://docs.google.com/forms/d/e/1FAIpQLSdb4ejjbqoqKO-Q4k7zeO_xwykwB0dxYLWYm1mX5Ik45MzEeg/viewform

*/

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