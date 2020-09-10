import React from 'react';
import RadioChannel from './Radio-list/radio-lists-component';

const Main = (props) => {
  // console.log(props.click);
  const radios = props.channels.map((radio, i) => {
    return (
      <RadioChannel
        key={i}
        id={i + 1}
        name={radio.name}
        frequency={radio.frequency}
        image={radio.image}
        click={props.click}
        currentIndex={props.index}
      />
    );
  });
  return (
    <div className="main-component">
      <ul>{radios}</ul>
    </div>
  );
};

export default Main;
