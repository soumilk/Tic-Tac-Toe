import React from 'react';
import { Button } from 'reactstrap';

// Component -1: This component renders a single button
const Square = (props) => {
  return (
    <Button color='white' style={{
      height: '3em',
      padding: '0',
      width: '3em',
      border: '1px solid black ',
      fontWeight: 'bold',
      fontSize: '2vw',
    }}
      className="square"
      onClick={() => props.onClick()}>
      {props.value}
    </Button>
  );
};

export default Square;