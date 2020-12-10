import Spaces from './components/Spaces';
import Board from './components/Board';
import './App.css';
import React, { useState } from 'react';

function App() {
  // CREATE THE PLAYERS
  const players = [
    { player: 1, mark: 'X', img: 'img/cross.png', score: 0 },
    { player: 2, mark: 'O', img: 'img/heart.png', score: 0 },
  ];

  // initialize the board
  const [board, setBoard] = useState(
    //Array(9).fill(null)
    [...Array(3)].map(() => Array(3).fill(null))
  );

  // initialize the player
  const [player, setPlayer] = useState(players[0]);

  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  // CHECK WIN CONDITION

  const [message, setMessage] = useState('tic-tac-toe');

  const checkWinner = () => {
    // winner happens when three in a row
    // else board is full and it's a tie

    // all rows of the board
    let boardRow = [board[0], board[1], board[2]];
    // all col of the board
    let boardCol = [
      [board[0][0], board[1][0], board[2][0]],
      [board[0][1], board[1][1], board[2][1]],
      [board[0][2], board[1][2], board[2][2]],
    ];

    // all potential winning combos
    let combos = [
      // Horizontal wins:
      boardRow[0],
      boardRow[1],
      boardRow[2],
      // Vertical wins
      boardCol[0],
      boardCol[1],
      boardCol[2],
      // Diagonal top left to bottom right
      [board[0][0], board[1][1], board[2][2]],
      // Diagonal top right to bottom left
      [board[2][0], board[1][1], board[0][2]],
    ];

    // check each element in winning lines to see if any row is equal
    // loop through each element in combos
    for (let i = 0; i < combos.length; i++) {
      // If every element is the same, and not null

      // null, X, X
      // null, null, null
      if (combos[i][0] !== null && new Set(combos[i]).size == 1) {
        // if (combos[i].every(x => x == combos[i][0]) && !combos[i].includes(null)) {
        //update players score
        
        return true;
      }
    }

    // If no winner was found, check if the board is full, that would be a tie:
    // 1: Write a for loop to check if there is some empty spot, if ANY empty spot; return false
    // 2: Use a single every or some and a single includes
    for (let i = 0; i < board.length; i++) {
      if (board[i].includes(null)) {
        return false;
      }
    }

    return 'Tie';
  };

  // CLICK HANDLER
  const handleClick = (x, y) => {
    // when we click a button, it updates the board
    // the click handler is passed 2 arguments, the x,y coorinate values
    // which are mapped to the buttons we create with 2 nested loops inside Spaces.js

    // the updated board state is then rendered by the child component

    // CREATE A NEW BOARD
    // STOP TRYING TO CHANGE THE OLD ONE

    // if the space is empty, move is valid
    if (!board[x][y]) {
      // then update the board and th eboard state

      const newBoard = [...board];
      newBoard[x][y] = player.mark;
      setBoard(newBoard);

      // check for a winner

      if (checkWinner()) {
        setMessage('Winner');
      } else if (checkWinner() == 'Tie') {
        setMessage('Tie');
      } else {
        // then update the playerstate
        setPlayer(player.mark === players[0].mark ? players[1] : players[0]);
      }
    } else {
      setMessage('you cant move there');
      setTimeout(() => {
        setMessage('tic-tac-toe');
      }, 2000);
    }

    // now for game logic
    // when a button is clicked, we change players
    // let currentPlayer = player;

    //????????? it only works like 2x
  };

  return (
    <div className="App">
      <h1>{message}</h1>
      <Spaces handleClick={handleClick} board={board} />

      <h2>Player Turn{player.player}</h2>
    </div>
  );
}

export default App;
