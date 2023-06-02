import React from 'react';
import classes from './Main.module.css';
const MainUI = ({ children, className }) => {
  return <div className={`${classes.main} ${className}`}>{children}</div>;
};

export default MainUI;
