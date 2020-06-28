import React from 'react';
import { Row, Col } from 'reactstrap';

const ScoreBoard = ({ playerX, playerO, winCountX, winCountO }) => {

  return (
    <div>
      <h5 style={{ marginTop: '15px' }}>Score Board: </h5>
      <Row >
        <Col>
          <p>X: {playerX}</p>
          {winCountX}
        </Col>
        <Col>
          <p>O: {playerO}</p>
          {winCountO}
        </Col>
      </Row>
    </div>
  )
}

export default ScoreBoard;