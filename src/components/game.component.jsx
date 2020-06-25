import React from 'react';
import calculateWinner from './calculateWinner.component';
import Board from './board.component';
import Header from './header.component';
import { Button, Container, Row, Col } from 'reactstrap';
import PlayerNames from './players.component';

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
      stepNumber: 0,
      playerX: 'X',
      playerO: 'O'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
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
    //console.log("Squares array in handleclick", squares);
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
        <Button style={{ margin: '5px' }} block color='success' key={move} onClick={() => this.jumpTo(move)}>
          {desc}
        </Button>
      );
    });
    //console.log(this.state.playerO, this.state.playerX);
    let status;
    if (winner) {
      if (winner === 'O')
        status = 'Winner is : ' + this.state.playerO;
      else
        status = 'Winner is : ' + this.state.playerX;
    }
    else if (this.state.history.length === 10 && !winner) {
      status = 'This match is draw';
    }
    else {
      status = 'Next Player: ' + (this.state.xIsNext ? this.state.playerX : this.state.playerO);
    }
    return (
      <div>
        <Header />
        <Container style={{ paddingBottom: '25px' }}>
          <Row>
            <Col sm="12" md={{ size: 6 }}>
              <Board
                squares={current.squares}
                onClick={(i) => this.handleClick(i)} />
            </Col>
            <Col sm="12" md={{ size: 6 }}>
              <h3 style={{ marginBottom: '20px', PaddingLeft: '0px' }}>{status}</h3>
              <Row xs="2">
                <PlayerNames playerX={this.state.playerX} playerO={this.state.playerO} handleChange={this.handleChange} />
                <Col>{moves}</Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Game;