import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const Header = ({ title }) => {
  const onClick = () => {
    console.log('click');
  };
  return (
    <header>
      <h1>{title}</h1>
      <Button color="green" text="add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};

Header.prototype = {
  title: PropTypes.string.isRequired,
};

export default Header;
