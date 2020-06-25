import React from 'react';
import { Button } from 'reactstrap';

// Component -1: This component renders a single button
const Square = (props) => {
  return (
    <Button outline color='warning' style={{
      height: '100px',
      padding: '0',
      width: '100px',
      border: '1px solid black',
      fontWeight: 'bold',
      fontSize: '3vw',
      color: 'black'
    }}
      className="square"
      onClick={() => props.onClick()}>
      {props.value}
    </Button>
  );
};

export default Square;