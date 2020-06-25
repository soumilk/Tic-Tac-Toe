import React from 'react';
import calculateWinner from './calculateWinner.component';
import Board from './board.component';
import Header from './header.component';
import { Button, Container, ButtonGroup } from 'reactstrap';
// Component -3: Render a board with placeholder values
/*
This is the parent component which holds the states of the game for the 
time travel as well as the player turn
*/
class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      xIsNext: true,
      stepNumber: 0
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0,
      this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    console.log("Squares array in handleclick", squares);
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length
    });
  }

  jumpTo(step) {
    console.log("Jumped to move number ", step);
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {

    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to Game start';

      // This is the return function for the game info time travel buttons 
      return (
        <Button key={move} onClick={() => this.jumpTo(move)}>
          {desc}
        </Button>
      );
    });

    let status;
    if (winner) {
      status = 'Winner is : ' + winner;
    }
    else if (this.state.history.length === 10 && !winner) {
      status = 'The match is draw';
    }
    else {
      status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div>
        <Header />
        <Container>
          <div className="game">
            <div className="game-board">
              <Board
                squares={current.squares}
                onClick={(i) => this.handleClick(i)} />
            </div>
            <div className="game-info">
              <div>
                <h2>{status}</h2>
              </div>
              <ol>{moves}</ol>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Game;