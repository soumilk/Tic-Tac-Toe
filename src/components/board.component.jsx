import React from 'react';
import Square from './square.component';
import { ButtonGroup } from 'reactstrap';

// Component -2: This renders 9 squares
const Board = (props) => {

  function renderSquare(i) {
    return <Square value={props.squares[i]}
      onClick={() => props.onClick(i)} />;
  }

  return (
    <div >
      <ButtonGroup >
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </ButtonGroup>
      <ButtonGroup >
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </ButtonGroup>
      <ButtonGroup >
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </ButtonGroup>
    </div >
  );
};

export default Board;