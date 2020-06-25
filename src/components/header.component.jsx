import React from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1 className="display-3">Tic Tac Toe !</h1>
          <Row>
            <Col>
              <p className="lead">This is a simple game in which there is a 3X3 matrix and players fill it with 'X' or 'O', now as soon as any one symbol alligns along a row, column or diagonal, the player with that symbol wins</p>
            </Col>
            <Col>
              <p>This game has a unique feature of time travel, player can revert to the previous steps and then change its move, if the matrox is completely filled and nobody wins, then it is considered as draw</p>
              <p className="lead">
                <Button color="primary">Learn More</Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;
