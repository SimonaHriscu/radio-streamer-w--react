import React from 'react';
import RadioChannel from './Radio-list/radio-lists-component';

const Main = (props) => {
  console.log(props.channels);
  const radios = props.channels.map((radio) => {
    return <RadioChannel name={radio.name} frequency={radio.frequency} />;
  });
  return (
    <div className="main-component">
      <ul>{radios}</ul>
    </div>
  );
};

export default Main;
