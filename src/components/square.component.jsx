import React from 'react';


// Component -1: This component renders a single button
const Square = (props) => {
  return (
    <button className="square"
      onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
};

export default Square;