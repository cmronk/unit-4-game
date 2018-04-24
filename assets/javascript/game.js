$(document).ready(function(){
// Globals

// generates starting random number 
var startNumber = "";
for (var i = 0; i < 1; i++){
    var starting = Math.floor(Math.random()* (120-19+1)) + 19;
    console.log(starting);
    $("#randomNumber").append(starting);

}


// Generates values for the cats from 1-12
$("button").on("click", function(){
    var catNumber= "";
    for (var i = 0; i < 1; i++){
        var random = Math.floor(Math.random() * (12-1 + 1)) + 1;
        $("#score").append(random);
    }

})

})


// calculates scores from clicking cats and inputs into score container
// score = sum of random number generated from button clicks
// if score === starting random number, user wins
// if score > starting random number, user loses
// if score < starting random number, user must continue play

// reset

