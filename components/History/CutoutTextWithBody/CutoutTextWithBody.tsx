import CutoutBody from '../CutoutBody/CutoutBody';
import CutoutText, { CutoutProps } from '../CutoutText/CutoutText';
import styles from './CutoutTextWithBody.module.css';
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

type TextProps = {
  title: string;
  body: string;
  totalDuration: number;
  currentDuration: number;
  fadeIn?: number;
  fadeOut?: number;
  fontSize?: string;
  ignoreFadeIn?: boolean;
  disableBackgroundAnimations?: boolean;
  titleTransitionStart?: number;
  titleTransitionDuration?: number;
};

const CutoutTextWithBody = ({
  title,
  body,
  totalDuration,
  currentDuration,
  fadeIn,
  fadeOut,
  fontSize,
  ignoreFadeIn,
  disableBackgroundAnimations,
  titleTransitionStart,
  titleTransitionDuration,
}: TextProps & CutoutProps) => {
  const [offset, setOffset] = useState(0);
  const [display, setDisplay] = useState('none');
  const [opactiy, setOpacity] = useState(1);
  const [disableBackground, setDisableBackground] = useState(false);
  const [titleTransform, setTitleTransform] = useState(0);

  fontSize = fontSize ?? '3rem';
  fadeIn = fadeIn ?? 30;
  fadeOut = fadeOut ?? 80;
  ignoreFadeIn = ignoreFadeIn ?? false;
  disableBackgroundAnimations = disableBackgroundAnimations ?? false;
  titleTransitionStart = titleTransitionStart ?? 50;
  titleTransitionDuration = titleTransitionDuration ?? 250;

  useEffect(() => {
    const percent = currentDuration / totalDuration;
    if (percent >= 0) {
      setDisplay('flex');

      // Set the background offset
      if (!disableBackgroundAnimations) {
        setOffset(percent * 100);
      }

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
  }, [
    currentDuration,
    totalDuration,
    fadeIn,
    fadeOut,
    ignoreFadeIn,
    disableBackground,
    disableBackgroundAnimations,
  ]);

  return (
    <div
      className={styles.wrapper}
      style={{
        textAlign: 'center',
        fontSize: fontSize,
        display: display,
        opacity: opactiy,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          margin: 'auto',
          display: 'inline-block',
          borderRadius: '1rem',
        }}
      >
        <CutoutText
          title={title}
          totalDuration={totalDuration}
          currentDuration={currentDuration}
          variant='center'
          fontSize='3rem'
        />
      </Box>

      <Box
        sx={{
          height: '100%',
          width: '2px',
          bgcolor: '#fff',
          opacity: '0.5',
          display: 'inline-block',
          color: 'transparent',
          m: '0 1rem 0 1rem',
        }}
      >
        .
      </Box>

      <Box
        sx={{
          display: 'inline-block',
        }}
      >
        <CutoutBody
          body={body}
          totalDuration={totalDuration}
          currentDuration={currentDuration}
          variant='center'
          fontSize='3rem'
        />
      </Box>
    </div>
  );
};

export default CutoutTextWithBody;
