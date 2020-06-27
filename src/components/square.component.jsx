import React from 'react';
import { Button } from 'reactstrap';

// Component -1: This component renders a single button
const Square = (props) => {
  return (
    <Button outline color='primary' style={{
      height: '3em',
      padding: '10px',
      width: '3em',
      //border: '1px solid black ',
      fontWeight: 'bold',
      fontSize: '4vw',
      color: 'black'
    }}
      className="square"
      onClick={() => props.onClick()}>
      {props.value}
    </Button>
  );
};

export default Square;