//tic tac toe

// choose player 1 or player 2 -- assign marker

var chooseX = document.getElementById("chooseX");

var chooseO = document.getElementById("chooseO");

var squareClicked = document.getElementsByClassName("square") // maybe not needed

var gameBoard = document.getElementById("gameboard");

var player1turn = true;

// set player markers to empty string
var player1marker = '';
var player2marker = '';

// define each square
var square0 = document.getElementById("s0");
var square1 = document.getElementById("s1");
var square2 = document.getElementById("s2");
var square3 = document.getElementById("s3");
var square4 = document.getElementById("s4");
var square5 = document.getElementById("s5");
var square6 = document.getElementById("s6");
var square7 = document.getElementById("s7");
var square8 = document.getElementById("s8");

var checkWin1 = function() {  
  if (((square0.innerHTML != '') && (square1.innerHTML != '')) && (square2.innerHTML != '')){
    console.log('all not empty');

    if ((square0.innerHTML === square1.innerHTML) && (square1.innerHTML === square2.innerHTML)) {
      console.log('winner');  
    }
  } 
}

var checkWin2 = function() {
  if (((square3.innerHTML != '') && (square4.innerHTML != '')) && (square5.innerHTML != ''))

    if (((square3.innerHTML === square4.innerHTML) && (square4.innerHTML === square5.innerHTML))) {
      console.log("winner 2nd line!");
    }
}

chooseX.addEventListener("click", function() {
  // set player1marker to X when X button is clicked

  player1marker = 'X';
  player2marker = 'O';
});


gameBoard.addEventListener("click", function() {

  if (player1turn === true) { 
// make X appear inside clicked box
    event.target.innerHTML = player1marker;

  // player 2 turn
    player1turn = false;
  }

  else {
    event.target.innerHTML = player2marker;

  // player 1 turn
    player1turn = true;
  }

  checkWin1();

  checkWin2();
});


chooseO.addEventListener("click", function() {

  console.log('you chose O');

  // set player1marker to O when O button is clicked
  player1marker = 'O';
  player2marker = 'X';

  // var player1turn = false;
});



// // when 3 of same marker are chosen in 7 combinations, player wins
// // else lose

// check 1st possible winning combination (sq 0-2)


// ******** PSUEDO CODE -- WORKING OUT GAME LOGIC ********


// start with blank array [0, 1, 2, 3, 4, 5, 6, 7, 8,];

// each player has a turn 

// each box has 3 positions, empty, X, or O

// player clicks on box on screen 1-9 (9 divs / boxes) (9 buttons?)
// box displays O or X (e.g. X)

// next turn displays other marker (e.g. O);



// restart game (reset)