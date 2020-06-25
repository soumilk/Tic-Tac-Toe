import React from 'react';
import { Input, Label } from 'reactstrap';

const PlayerNames = ({ playerX, playerO, handleChange }) => {
  return (
    <div>
      <Label>Player for X: {playerX}</Label>
      <Input name="playerX" placeholder='Name of Player X' onChange={handleChange} />
      <Label>Player for O: {playerO}</Label>
      <Input name="playerO" placeholder='Name of Player O' onChange={handleChange} />
    </div>
  )
};

export default PlayerNames;