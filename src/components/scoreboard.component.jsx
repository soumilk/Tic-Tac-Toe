import React from 'react';
import { Row, Col } from 'reactstrap';

const ScoreBoard = ({ scoring, winner, winCountX, winCountO }) => {
  if (winner !== undefined) {
    console.log('winner :', winner);
    //scoring(winner);
  }
  return (
    <div>
      <h5 style={{ marginTop: '15px' }}>Score Board: </h5>
      <Row align='center'>
        <Col>
          <p>PlayerX:</p>
          {winCountX}
        </Col>
        <Col>
          <p>PlayerO:</p>
          {winCountO}
        </Col>
      </Row>
    </div>
  )
}

export default ScoreBoard;