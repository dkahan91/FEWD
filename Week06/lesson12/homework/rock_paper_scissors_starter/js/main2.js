//psedo code. We have to find a way in which we can put in all the reslts in for this game and then it will access it based on that

// Rock + scissors = rock wins
// Scissors + paper = scissors wins
// paper + rock = paper wins
// rock + rock = draw
// rock + rock = draw
// rock + rock = draw




    //
    //
//     if(player1Option === 'Rock'){
//
//         if(player2Option ===  'Rock'){
//             return 'DRAW';
// }else

var comp = "Rock"
var player1Option = "Scissors"


// //
// (comp == "Rock" && player1Option == "Paper")
// comp == "Paper" && player1Option == "Scissors"

if ((comp == "Scissors" && player1Option == "Rock")||(comp == "Rock" && player1Option == "Paper")||(comp == "Paper" && player1Option == "Scissors")){
    console.log("PLAYER1WINS");
} else if ((comp == "Rock" && player1Option == "Scissors")||(comp == "Paper" && player1Option == "Rock")||(comp == "Scissors" && player1Option == "Paper")){
    console.log("Compwins");
} else {
    console.log("DRAW");
}

    // console.log(player2Option == "Rock" && player1Option == "Paper");
    //        return 'PLAYER1WINS'
    //     }else {
    //         return 'PLAYER2WINS'
    //     }
    //
    // }else if(player1Option === 'Scissors'){
    //
    //       if(player2Option ===  'Rock'){
    //           return 'PLAYER2WINS';
    //       }else if (player2Option == 'Scissors'){
    //          return 'DRAW'
    //       }else {
    //           return 'PLAYER1WINS'
    //       }
    //
    //   }




// var options = [];
//
// options['RockScissors'] = 'P1WIN';
// options['RockRock'] = 'DRAW';
// options['RockPaper'] = 'P2WIN';
//
//
//
// var deciderWinner = function(player1Option, player2Option){
//
//     var optionResult = options[player1Option +  player2Option]
//     console.log(optionResult);
// deciderWinner('Rock', 'Scissors');


//
//
// player 1 = rock && player 2 = paper
