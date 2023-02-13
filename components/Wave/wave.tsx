import React from 'react';
import classes from './wave.module.css';
import { styled } from '@mui/material';
import styles from './wave.module.css';

const Use = styled('use')();

const Wave = () => {
  return (
    <svg
      className={classes.wave}
      shapeRendering={'auto'}
      preserveAspectRatio={'none'}
      viewBox={'0 24 150 28'}
    >
      <defs>
        <path
          id='gentle-wave'
          d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
        />
      </defs>
      <g className={styles.parallax}>
        <Use
          xlinkHref='#gentle-wave'
          sx={{ x: 48, y: 0, opacity: 0.8, fill: 'four.main' }}
        />
        <Use
          xlinkHref='#gentle-wave'
          sx={{ x: 48, y: 3, opacity: 0.7, fill: 'three.main' }}
        />
        <Use
          xlinkHref='#gentle-wave'
          sx={{ x: 48, y: 5, opacity: 0.45, fill: 'two.main' }}
        />
        <Use
          xlinkHref='#gentle-wave'
          sx={{ x: 48, y: 7, opacity: 0.8, fill: 'rgba(14, 36, 59, 1)' }}
        />
      </g>
    </svg>
  );
};

export default Wave;
