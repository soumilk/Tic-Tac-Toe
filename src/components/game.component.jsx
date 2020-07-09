import React from 'react';
import calculateWinner from './calculateWinner.component';
import Board from './board.component';
import Header from './header.component';
import { Button, Container, Row, Col } from 'reactstrap';
import PlayerNames from './players.component';
import ScoreBoard from './scoreboard.component';
import WinnerOfGame from './winner.component';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      xIsNext: true,
      stepNumber: 0,
      playerX: 'X',
      playerO: 'O',
      winCountX: 0,
      winCountO: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.scoring = this.scoring.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  scoring(winner) {
    if (winner === 'O') {
      this.setState({
        winCountO: this.state.winCountO + 1,
        xIsNext: true,
      });
    } else if (winner === 'X') {
      this.setState({
        winCountX: this.state.winCountX + 1,
        xIsNext: false,
      });
    }
    this.setState({
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
    });
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares)) {
      this.scoring(calculateWinner(squares));
      return;
    }
    if (squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];

    const moves = history.map((step, move) => {
      const desc = move ? 'Go to move #' + move : 'Go to Game start';

      return (
        <Button
          style={{ margin: '5px' }}
          block
          color="success"
          key={move}
          onClick={() => this.jumpTo(move)}
        >
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
              <h3 style={{ marginBottom: '25px' }}>
                <WinnerOfGame scoring={this.scoring} {...this.state} />
              </h3>
              <Row>
                <Col>
                  <h5>Enter the Player Names: </h5>
                  <PlayerNames
                    playerX={this.state.playerX}
                    playerO={this.state.playerO}
                    handleChange={this.handleChange}
                  />

                  <ScoreBoard
                    playerX={this.state.playerX}
                    playerO={this.state.playerO}
                    winCountX={this.state.winCountX}
                    winCountO={this.state.winCountO}
                  />
                </Col>
                <Col style={{ maxHeight: '300px', overflowY: 'auto' }}>
                  <h5 align="center" style={{ marginTop: '7px' }}>
                    Here are the Time travel options
                  </h5>
                  {moves}
                </Col>
              </Row>
            </Col>
            <Col align="center" xs={{ size: 12 }} md={{ size: 6, offset: 0 }}>
              <Board
                squares={current.squares}
                onClick={(i) => this.handleClick(i)}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Game;
