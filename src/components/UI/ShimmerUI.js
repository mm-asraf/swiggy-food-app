import React from 'react';
import Card from './Card';
import MainUI from './MainUI';
import classes from './ShimmerUI.module.css';
const ShimmerUI = () => {
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <MainUI className={classes.main_ui}>
      <div className={classes.container}>
        {num.map((e) => {
          return (
            <Card
              key={Math.random * 100 * toString}
              className={`${classes.shimmerBG} ${classes.media} `}
            ></Card>
          );
        })}
      </div>
    </MainUI>
  );
};

export default ShimmerUI;
