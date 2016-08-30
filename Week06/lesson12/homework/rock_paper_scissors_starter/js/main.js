//psedo code. We have to find a way in which we can put in all the reslts in for this game and then it will access it based on that

// Rock + scissors = rock wins
// Scissors + paper = scissors wins
// paper + rock = paper wins
// rock + rock = draw


var comp = "Rock"
var player1Option = "Scissors"

// rock = 1
// paper = 2
// scissors = 3


// //
// (comp == "Rock" && player1Option == "Paper")
// comp == "Paper" && player1Option == "Scissors"

if ((comp == "Scissors" && player1Option == "Rock")||(comp == "Rock" && player1Option == "Paper")||(comp == "Paper" && player1Option == "Scissors")){
    console.log("PLAYER1WINS");
} else if ((comp == "Rock" && player1Option == "Scissors")||(comp == "Paper" && player1Option == "Rock")||(comp == "Scissors" && player1Option == "Paper")){
    console.log(math.random(1,3));
} else {
    console.log("DRAW");
}
