//create start button
//on click of start button
    //start timer
    //show trivia questions
//player chooses answers
    //only one answer can be choosen for each question
    //when player hits submit, evaluate answers and determine how many are right and wrong
//if player runs out of time evaluate (function) answers
var counter = 10; 
var timer;
function countdown() {
    counter--;
    $("#timer").html(counter)
    if (counter === 0) {
        console.log("Times up! Game over!");
    }
}
function startGame() {
    setInterval(countdown(),1000)
}
$(document).ready(function(){
    $("#start").on( "click", function(){
        startGame()
    });
}); 