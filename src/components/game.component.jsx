import React from 'react';
import calculateWinner from './calculateWinner.component';
import Board from './board.component';
import Header from './header.component';
import { Button, Container, Row, Col } from 'reactstrap';
import PlayerNames from './players.component';
import ScoreBoard from './scoreboard.component';
import WinnerOfGame from './winner.component';
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
      playerO: 'O',
      winCountX: 0,
      winCountO: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  scoring(winner) {
    if (winner === 'O') {
      this.setState({
        winCountO: this.state.winCountO + 1
      })
    }
    else if (winner === 'X') {
      this.setState({
        winCountX: this.state.winCountX + 1
      })
    }
    else
      return;
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
    let winner = calculateWinner(current.squares);
    console.log('from calfun:', winner);
    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to Game start';

      return (
        <Button style={{ margin: '5px' }} block color='success' key={move} onClick={() => this.jumpTo(move)}>
          {desc}
        </Button>
      );
    });

    return (
      <div>
        <Header />
        <Container style={{ paddingBottom: '25px' }}>
          <Row>
            <Col xs="12" md="6" style={{ marginBottom: '20px' }}>
              <h3 style={{ marginBottom: '20px' }}><WinnerOfGame {...this.state} /></h3>
              <Row>
                <Col>
                  <h5>Enter the Player Names: </h5>
                  <PlayerNames playerX={this.state.playerX} playerO={this.state.playerO} handleChange={this.handleChange} />

                  <ScoreBoard scoring={this.scoring} winner={winner} winCountX={this.state.winCountX} winCountO={this.state.winCountO} />
                </Col>
                <Col>
                  <h5 align='center' style={{ marginTop: '7px' }}>Here are the Time travel options</h5>
                  {moves}
                </Col>
              </Row>
            </Col>
            <Col align='center' xs={{ size: 6, offset: 3 }} md={{ size: 6, offset: 0 }}>
              <Board
                squares={current.squares}
                onClick={(i) => this.handleClick(i)} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Game;