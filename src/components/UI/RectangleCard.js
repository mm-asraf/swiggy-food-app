import React from 'react';
import classes from './Rectangle.module.css';
const RectangleCard = ({ className, children }) => {
  return <div className={`${className} ${classes.rectangle}`}>{children}</div>;
};

export default RectangleCard;
