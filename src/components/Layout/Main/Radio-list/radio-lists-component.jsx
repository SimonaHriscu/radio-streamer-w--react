import React from 'react';

const RadioChannel = (props) => {
  return (
    <li className="radio-lists-component">
      <span>{props.name}</span>
      <span>{props.frequency}</span>
    </li>
  );
};

export default RadioChannel;
