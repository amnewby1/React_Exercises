import React, { useState } from "react";
import Cell from "./Cell";
import "./Board.css";

function Board({ nrows, ncols, chanceLightStartsOn }) {
  const createBoard = () => {
    let board = [];
    for (let i = 0; i < nrows; i++) {
      let row = [];
      for (let j = 0; j < ncols; j++) {
        row.push(Math.random() < chanceLightStartsOn);
      }
      board.push(row);
    }
    return board;
  };

  const [board, setBoard] = useState(createBoard());

  const hasWon = () => {
    return board.every((row) => row.every((cell) => !cell));
  };

  const flipCellsAround = (coord) => {
    setBoard((oldBoard) => {
      const [y, x] = coord.split("-").map(Number);

      const flipCell = (y, x, boardCopy) => {
        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          boardCopy[y][x] = !boardCopy[y][x];
        }
      };

      const newBoard = [...oldBoard.map((row) => [...row])];
      flipCell(y, x, newBoard);
      flipCell(y - 1, x, newBoard);
      flipCell(y + 1, x, newBoard);
      flipCell(y, x - 1, newBoard);
      flipCell(y, x + 1, newBoard);

      return newBoard;
    });

    // Check for winning condition after the flip
    if (hasWon()) {
      setTimeout(() => {
        alert("Congratulations! You won!");
      }, 0);
    }
  };

  const tableBoard = [];
  for (let y = 0; y < nrows; y++) {
    let row = [];
    for (let x = 0; x < ncols; x++) {
      let coord = `${y}-${x}`;
      row.push(
        <Cell
          key={coord}
          isLit={board[y][x]}
          flipCellsAroundMe={() => flipCellsAround(coord)}
        />
      );
    }
    tableBoard.push(<tr key={y}>{row}</tr>);
  }

  return (
    <div className="Board">
      <table className="Board-table">
        <tbody>{tableBoard}</tbody>
      </table>
    </div>
  );
}

export default Board;
