import styles from './CutoutBody.module.css';
import { useState, useEffect } from 'react';

type CutoutProps = {
  body: string;
  totalDuration: number;
  currentDuration: number;
  variant?: 'left' | 'center' | 'right';
  fadeIn?: number;
  fadeOut?: number;
  fontSize?: string;
  ignoreFadeIn?: boolean;
  disableBackgroundAnimations?: boolean;
};

const CutoutBody = ({
  body,
  totalDuration,
  currentDuration,
  variant,
  fadeIn,
  fadeOut,
  fontSize,
  ignoreFadeIn,
  disableBackgroundAnimations,
}: CutoutProps) => {
  const [offset, setOffset] = useState(0);
  const [display, setDisplay] = useState('none');
  const [opactiy, setOpacity] = useState(1);
  const [disableBackground, setDisableBackground] = useState(false);

  variant = variant ?? 'left';
  fontSize = fontSize ?? '2rem';
  fadeIn = fadeIn ?? 30;
  fadeOut = fadeOut ?? 80;
  ignoreFadeIn = ignoreFadeIn ?? false;
  disableBackgroundAnimations = disableBackgroundAnimations ?? false;

  useEffect(() => {
    const percent = currentDuration / totalDuration;
    if (percent >= 0) {
      setDisplay('block');

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
        textAlign: variant ?? 'left',
        fontSize: fontSize,
        display: display,
        opacity: opactiy,
        position: 'relative',
      }}
    >
      <span
        style={{
          mixBlendMode: disableBackgroundAnimations ? 'normal' : 'multiply',
          background: disableBackgroundAnimations ? 'transparent' : 'black',
        }}
        className={styles.text}
      >
        {body}
      </span>

      {!disableBackgroundAnimations ? (
        <>
          <div
            className={styles.background}
            style={{
              transform: `translateY(-${offset}%)`,
            }}
          ></div>
          <div className={styles.fallbackBackground}></div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default CutoutBody;
