import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <div className="header-component">
      <FontAwesomeIcon icon="chevron-left" className="icon" />
      <h2>stations</h2>
      <FontAwesomeIcon icon="power-off" className="icon" />
    </div>
  );
};

export default Header;
