$(document).ready(function(){

// Globals
var starting = "";
var random = "";

// generates starting random number from 19-120
// (Math.floor(Math.random() * (max-min) + 1)) + min)
for (var i = 0; i < 1; i++){
    var starting = Math.floor(Math.random()* (120-19+1)) + 19;
    console.log(starting);
    $("#randomNumber").text(starting);

}
// Generates values for each of the cats from 1-12 
// (Math.floor(Math.random() * (max-min) + 1)) + min)


// maybe there is a way to DRY this without the values of the clicks changing in each round?
var savedNum = (Math.floor(Math.random() * (12-1 + 1)) + 1);
$("#catBtn").on("click", function(){
    for (var j = 0; j < 1; j++){
            // so this just puts the clicked value without adding 
            // $("#score").text(savedNum);

            // and this adds strings
            $("#score").append(savedNum);
    }
})


var savedNum1 = (Math.floor(Math.random() * (12-1 + 1)) + 1);
$("#catBtn1").on("click", function(){
    for (var k = 0; k < 1; k++){
            // so this just puts the clicked value without adding 
            // $("#score").text(savedNum);

            // and this adds strings
            $("#score").append(savedNum1);
    }
})

var savedNum2 = (Math.floor(Math.random() * (12-1 + 1)) + 1);
$("#catBtn2").on("click", function(){
    for (var l = 0; l < 1; l++){
            // so this just puts the clicked value without adding 
            // $("#score").text(savedNum);

            // and this adds strings
            $("#score").append(savedNum2);
    }
})

var savedNum3 = (Math.floor(Math.random() * (12-1 + 1)) + 1);
$("#catBtn3").on("click", function(){
    for (var m = 0; m < 1; m++){
            // so this just puts the clicked value without adding 
            // $("#score").text(savedNum);

            // and this adds strings
            $("#score").append(savedNum3);
    }
})


})        


// // this section is pseudo coding....
// // calculates and adds scores from clicking cats and inputs into score container
// function addClicks() {

// }    


// function scoring() {
// // if score === starting random number, user wins
//     if (parseInt(score) > starting) {
//         alert("Winner!");
//         wins++;


//     }
// // if score > starting random number, user loses
// // if score < starting random number, user must continue play

// }
     
// // reset when user wins/loses or gamestart
// function reset() {

// }

// // start game
// function startGame() {

// }


