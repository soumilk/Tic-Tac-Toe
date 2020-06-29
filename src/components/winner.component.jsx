import calculateWinner from './calculateWinner.component';
import React from 'react';

const WinnerOfGame = ({ scoring, ...otherGameProps }) => {

  const history = otherGameProps.history;
  const current = history[otherGameProps.stepNumber];
  let winner = calculateWinner(current.squares);
  let status = null;
  if (winner) {
    if (winner === 'O') {
      status = 'Winner is : ' + otherGameProps.playerO;
    }
    else {
      status = 'Winner is : ' + otherGameProps.playerX;
    }
  }
  else if (otherGameProps.history.length === 10 && !winner) {
    status = 'This match is draw';
  }
  else {
    status = 'Next Player: ' + (otherGameProps.xIsNext ? otherGameProps.playerX : otherGameProps.playerO);
  }

  return (
    <div align='center'>
      {status}
    </div>
  )
};

export default WinnerOfGame;