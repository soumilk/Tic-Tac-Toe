import React from 'react';
import { Button } from 'reactstrap';

// Component -1: This component renders a single button
const Square = (props) => {
  return (
    <Button
      outline
      color="primary"
      className="square"
      onClick={() => props.onClick()}
    >
      {props.value}
    </Button>
  );
};

export default Square;
