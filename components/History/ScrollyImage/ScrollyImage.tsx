import { Box } from '@mui/material';
import styles from './CutoutText.module.css';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export type CutoutProps = {
  title: string;
  src: string;
  width: number;
  totalDuration: number;
  currentDuration: number;
  fadeIn?: number;
  fadeOut?: number;
  fontSize?: string;
  ignoreFadeIn?: boolean;
};

const ScrollyImage = ({
  title,
  src,
  width,
  totalDuration,
  currentDuration,
  fadeIn,
  fadeOut,
  fontSize,
  ignoreFadeIn,
}: CutoutProps) => {
  const [display, setDisplay] = useState('none');
  const [opacity, setOpacity] = useState(1);

  fontSize = fontSize ?? '5rem';
  fadeIn = fadeIn ?? 15;
  fadeOut = fadeOut ?? 85;
  ignoreFadeIn = ignoreFadeIn ?? false;

  useEffect(() => {
    const percent = currentDuration / totalDuration;
    if (percent >= 0) {
      setDisplay('block');

      // Calculate the text opacity
      if (fadeIn && fadeOut) {
        if (percent * 100 <= fadeIn && percent * 100 >= 0 && !ignoreFadeIn) {
          if (fadeIn == 0) {
            setOpacity(1);
          } else {
            setOpacity(percent * (100 / fadeIn));
          }
        } else if (percent * 100 >= fadeIn && percent * 100 <= fadeOut) {
          setOpacity(1);
        } else if (percent * 100 >= fadeOut && percent * 100 <= 100) {
          if (fadeOut == 100) {
            setOpacity(1);
          } else {
            setOpacity((100 - percent * 100) / (100 - fadeOut));
          }
        }
      }
    }
  }, [currentDuration, totalDuration, fadeIn, fadeOut, ignoreFadeIn]);

  return (
    <Box
      sx={{
        opacity: opacity,
        borderRadius: 1,
        overflow: 'hidden',
        height: 'fit-content',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        alt={title}
        src={src}
        width={width}
        height={width}
        loading={'eager'}
        style={{
          display: 'block',
          height: 'auto',
        }}
      />
    </Box>
  );
};

export default ScrollyImage;
