import React from 'react';

const Footer = (props) => {
  console.log(props);
  return (
    <div className="footer-component">
      <div>Now playing: {props.name}</div>
    </div>
  );
};

export default Footer;
