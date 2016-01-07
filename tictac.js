//tic tac toe

// choose player 1 or player 2 -- assign marker

var chooseX = document.getElementById("chooseX");

var chooseO = document.getElementById("chooseO");

var reset = document.getElementById("resetBtn");

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

var squares = document.getElementsByClassName('square');


// reset button

reset.addEventListener("click", function() {
  _.each(squares, function(square) {
    square.innerHTML = '';
    square.style.backgroundColor = "#CCFF66";
  })

  clearInterval(timer);
});

// ************************

// gitRave stolen code to make squares change colour

var randomRGB = function () {
  return Math.floor(Math.random() * (255 - 0));
};

var timer;

var gitRave = function() {
  timer = setInterval(function() {
    for (var i = 0; i < squares.length; i++) {
      var fillColor = 'rgb(' + randomRGB() + ',' + randomRGB() + ',' + randomRGB() + ')'
      squares[i].style.backgroundColor = fillColor;
    }
  }, 10);
};

// functions to check winning combinations

var checkWin1 = function() {
  if (((squares[0].innerHTML != '') && (squares[1].innerHTML != '')) && (squares[2].innerHTML != '')) {

    if ((squares[0].innerHTML === squares[1].innerHTML) && (squares[1].innerHTML === squares[2].innerHTML)) {
      gitRave();
    }
  }
};

var checkWin2 = function() {
  if (((squares[3].innerHTML != '') && (squares[4].innerHTML != '')) && (squares[5].innerHTML != '')) {

    if ((squares[3].innerHTML === squares[4].innerHTML) && (squares[4].innerHTML === squares[5].innerHTML)) {
      gitRave();
    }
  }
};

var checkWin3 = function() {
  if (((squares[6].innerHTML != '') && (squares[7].innerHTML != '')) && (squares[8].innerHTML != '')) {

    if ((squares[6].innerHTML === squares[7].innerHTML) && (squares[7].innerHTML === squares[8].innerHTML)) {
      gitRave();
    }
  }
};

var checkWin4 = function() {
  if (((squares[0].innerHTML != '') && (squares[3].innerHTML != '')) && (squares[6].innerHTML != '')) {

    if ((squares[0].innerHTML === squares[3].innerHTML) && (squares[3].innerHTML === squares[6].innerHTML)) {
      gitRave();
    }
  }
};

var checkWin5 = function() {
  if (((squares[1].innerHTML != '') && (squares[4].innerHTML != '')) && (squares[7].innerHTML != '')) {

    if ((squares[1].innerHTML === squares[4].innerHTML) && (squares[4].innerHTML === squares[7].innerHTML)) {
      gitRave();
    }
  }
};

var checkWin6 = function() {
  if (((squares[2].innerHTML != '') && (squares[4].innerHTML != '')) && (squares[6].innerHTML != '')) {

    if ((squares[2].innerHTML === squares[4].innerHTML) && (squares[4].innerHTML === squares[6].innerHTML)) {
      gitRave();
    }
  }
};

var checkWin7 = function() {
  if (((squares[2].innerHTML != '') && (squares[5].innerHTML != '')) && (squares[8].innerHTML != '')) {

    if ((squares[2].innerHTML === squares[5].innerHTML) && (squares[5].innerHTML === squares[8].innerHTML)) {
      gitRave();
    }
  }
};

var checkWin8 = function() {
  if (((squares[0].innerHTML != '') && (squares[4].innerHTML != '')) && (squares[8].innerHTML != '')) {

    if ((squares[0].innerHTML === squares[4].innerHTML) && (squares[4].innerHTML === squares[8].innerHTML)) {
      gitRave();
    }
  }
};


// change turns (players) 

chooseX.addEventListener("click", function() {
  // set player1marker to X when X button is clicked

  player1marker = 'X';
  player2marker = 'O';
});

chooseO.addEventListener("click", function() {

  // set player1marker to O when O button is clicked
  player1marker = 'O';
  player2marker = 'X';

  var player1turn = false;
});

// set function to run inside gameboard click action

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

  // call "check for winner" functions

  checkWin1();
  checkWin2();
  checkWin3();
  checkWin4();
  checkWin5();
  checkWin6();
  checkWin7();
  checkWin8();
});
