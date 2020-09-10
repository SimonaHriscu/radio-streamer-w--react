import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          <FontAwesomeIcon icon="minus" className="volume-icon" />
          <img src={props.image}></img>
          <FontAwesomeIcon icon="plus" className="volume-icon" />
        </React.Fragment>
      )}
    </li>
  );
};

export default RadioChannel;
