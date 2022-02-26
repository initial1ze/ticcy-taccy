import { useState } from "react";
import Board from "./Board.jsx";
import Message from "./Message.jsx";
import Refresh from "./Refresh.jsx";

const isWon = (board) => {
  const winningPos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningPos.length; i++) {
    const [a, b, c] = winningPos[i];
    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
};

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [message, setMessage] = useState("Click to start the game.");

  const handleInput = (idx) => {
    if (currentPlayer === "" || board[idx] !== "") return;

    const boardCopy = [...board];
    boardCopy[idx] = currentPlayer;
    setBoard(boardCopy);

    if (isWon(boardCopy)) {
      setMessage(`Winner is: ${currentPlayer}.`);
      setCurrentPlayer("");
      return;
    }

    if (boardCopy.indexOf("") === -1) {
      setMessage("Draw game.");
      setCurrentPlayer("");
    } else {
      const nextPlayer = currentPlayer === "X" ? "O" : "X";
      setCurrentPlayer(nextPlayer);
      setMessage(`${nextPlayer}'s turn to move.`);
    }
  };

  return (
    <div>
      <Message message={message} />
      <Board handleClick={handleInput} board={board} />
      <Refresh
        setBoard={setBoard}
        setCurrentPlayer={setCurrentPlayer}
        setMessage={setMessage}
      />
    </div>
  );
};

export default Game;
