import React from 'react';

const Footer = (props) => {
  console.log(props);
  return (
    <div className="footer-component">
      {props.showTitle === true ? (
        <React.Fragment>
          <p>Currently playing</p>
          <p>{props.name}</p>
        </React.Fragment>
      ) : (
        true
      )}
    </div>
  );
};

export default Footer;
