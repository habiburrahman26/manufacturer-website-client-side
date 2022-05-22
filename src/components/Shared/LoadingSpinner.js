import React from 'react';
import classes from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <svg
          className={classes.svg}
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle className={classes.circle} cx="50" cy="50" r="46" />
        </svg>
      </div>
    </div>
  );
};

export default LoadingSpinner;
