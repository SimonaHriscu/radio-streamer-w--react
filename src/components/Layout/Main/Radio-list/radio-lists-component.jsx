import React from 'react';

const RadioChannel = (props) => {
  //  console.log(props.id);
  //  console.log(props.index);

  return (
    <li
      className={
        props.id !== props.currentIndex
          ? 'radio-lists-component'
          : 'radio-lists-component-extended'
      }
      onClick={() => props.click(props)}
    >
      <span>{props.name}</span>
      <span>{props.frequency}</span>
      {/* {className === 'radio-lists-component' ? (
        <span>
          <img src={props.image}></img>
        </span>
      ) : null} */}
    </li>
  );
};

export default RadioChannel;
