import React from 'react';

const RadioChannel = (props) => {
  return (
    <li
      className={
        props.id === props.currentIndex
          ? 'radio-lists-component-extended'
          : 'radio-lists-component'
      }
      onClick={() => props.click(props)}
    >
      {props.id !== props.currentIndex ? (
        <React.Fragment>
          <span>{props.name}</span>
          <span>{props.frequency}</span>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <img src={props.image}></img>
        </React.Fragment>
      )}
    </li>
  );
};

export default RadioChannel;
