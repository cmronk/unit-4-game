$(document).ready(function() {

// variables & counters
var starting = "";
var totalScore = 0;
$("#total-score").text(totalScore);
var wins = 0;
var losses = 0;

// generates starting random number from 19-120
// (Math.floor(Math.random() * (max-min) + 1)) + min)
var starting = Math.floor(Math.random() * 101 + 19);
console.log(starting);
$("#randomNumber").text(starting);

// Generates values for each of the buttons from 1-12 
var savedNum = (Math.floor(Math.random() * 11 + 1));
var savedNum1 = (Math.floor(Math.random() * 11 + 1));
var savedNum2 = (Math.floor(Math.random() * 11 + 1));
var savedNum3 = (Math.floor(Math.random() * 11 + 1));

// functions
// reset
function reset() {
    starting = (Math.floor(Math.random() * 101 + 19));
    $("#randomNumber").text(starting);
    savedNum = (Math.floor(Math.random() * 11 + 1));
    savedNum1 = (Math.floor(Math.random() * 11 + 1));
    savedNum2 = (Math.floor(Math.random() * 11 + 1));
    savedNum3 = (Math.floor(Math.random() * 11 + 1)); 
    totalScore = 0;
    $("#total-score").text(totalScore);
}


// scoring
function win () {
    alert("You won!");
    wins++;
    $("#wins").text(wins);
    reset ();
}

function lose () {
    alert("Sorry, you lost.");
    losses++;
    $("#losses").text(losses);
    reset ();

}

    // button on click events
    $("#lightBtn").on("click", function(){
        totalScore = savedNum + totalScore;
        $("#total-score").text(totalScore);
        console.log(totalScore);

        if (totalScore === starting)
        {
            win ();
        }
        else if(totalScore > starting)
        {
            lose ();
        }
        
    })


    $("#lightBtn1").on("click", function(){
        totalScore = savedNum1 + totalScore;
        $("#total-score").text(totalScore);
        console.log(totalScore);

        if (totalScore === starting)
        {
            win ();
        }
        else if (totalScore > starting)
        {
            lose ();
        }

    })

    $("#lightBtn2").on("click", function(){
        totalScore = savedNum2 + totalScore;
        $("#total-score").text(totalScore);
        console.log(totalScore);

        if (totalScore === starting)
        {
            win ();
        }
        else if (totalScore > starting)
        {
            lose ();
        }
        // else {

        // }

    })

    $("#lightBtn3").on("click", function(){
        totalScore = savedNum3 + totalScore;
        $("#total-score").text(totalScore);
        console.log(totalScore);

        if (totalScore === starting)
        {
            win ();
        }
        else if (totalScore > starting)
        {
            lose ();

        }

    }) 
})









