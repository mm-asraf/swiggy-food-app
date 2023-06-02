import React from 'react';
import classes from './Star.module.css';

const Star = ({ children, className }) => {
  return <div className={`${classes.star} ${className}`}>{children}</div>;
};

export default Star;
