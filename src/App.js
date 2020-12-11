import Spaces from './components/Spaces';
import './App.css';
import React, { useState } from 'react';

function App() {
  // CREATE THE PLAYERS
  const [players, setPlayers] = useState([
    { player: 1, mark: 'X', score: 0 },
    { player: 2, mark: 'O', score: 0 },
  ]);

  console.log(players);

  // initialize the board
  const [board, setBoard] = useState(
    //Array(9).fill(null)
    [...Array(3)].map(() => Array(3).fill(null))
  );

  const [highlight, setHighlight] = useState({});

  // initialize the player
  const [player, setPlayer] = useState(players[0]);

  const [playerScore, setPlayerScore] = useState();

  // CHECK WIN CONDITION

  const [message, setMessage] = useState('tic-tac-toe');

  const checkWinner = () => {
    // winner happens when three in a row
    // else board is full and it's a tie

    // check the rows
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] !== null &&
        board[0][i] === board[1][i] &&
        board[1][i] === board[2][i]
      ) {
        setHighlight({
          [`0,${i}`]: 'highlight',
          [`1,${i}`]: 'highlight',
          [`2,${i}`]: 'highlight',
        });
        return true;
      }
    }

    //check the columns
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] !== null &&
        board[i][0] === board[i][1] &&
        board[i][1] === board[i][2]
      ) {
        setHighlight({
          [`${i},0`]: 'highlight',
          [`${i},1`]: 'highlight',
          [`${i},2`]: 'highlight',
        });
        return true;
      }
    }

    //check the diagonals
    if (
      board[0][0] !== null &&
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2]
    ) {
      setHighlight({
        [`0,0`]: 'highlight',
        [`1,1`]: 'highlight',
        [`2,2`]: 'highlight',
      });
      return true;
    }

    if (
      board[2][0] !== null &&
      board[2][0] === board[1][1] &&
      board[1][1] === board[0][2]
    ) {
      setHighlight({
        [`2,0`]: 'highlight',
        [`1,1`]: 'highlight',
        [`0,2`]: 'highlight',
      });
      return true;
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
        //update the score
        player.score++;

        // const playersCopy = [...players];
        // const findPlayer = (p) => p.player === player.player;

        // const playerIndex = players.findIndex(findPlayer);
        // // playersCopy[playerIndex].score++;

        // setPlayers(playersCopy);
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

  const clearBoard = () => {
    setBoard([...Array(3)].map(() => Array(3).fill(null)));
    setPlayer(players[0]);
    setHighlight([])
  };

  return (
    <div className="App">
      <div className="message">{message}</div>
      <Spaces handleClick={handleClick} board={board} highlight={highlight} />

      <div>
        Player {player.player} ({player.mark}) Turn
      </div>

      <div>
        <div>Player 1:  {players[0].score} </div>
        <div>Player 2:  {players[1].score} </div>
      </div>

      <button onClick={clearBoard}>reset</button>
    </div>
  );
}

export default App;

// useeffect - > reset
//https://reactjs.org/tutorial/tutorial.html#declaring-a-winner




//input to set a marker >> update player's'
// say who goes first >> update player