import { isEqual } from 'date-fns';
import styles from './CutoutText.module.css';
import { useState, useEffect } from 'react';

export type CutoutProps = {
  title: string;
  totalDuration: number;
  currentDuration: number;
  variant?: 'left' | 'center' | 'right';
  fadeIn?: number;
  fadeOut?: number;
  fontSize?: string;
  ignoreFadeIn?: boolean;
};

const CutoutText = ({
  title,
  totalDuration,
  currentDuration,
  variant,
  fadeIn,
  fadeOut,
  fontSize,
  ignoreFadeIn,
}: CutoutProps) => {
  const [offset, setOffset] = useState(0);
  const [display, setDisplay] = useState('none');
  const [opactiy, setOpacity] = useState(1);

  variant = variant ?? 'left';
  fontSize = fontSize ?? '5rem';
  fadeIn = fadeIn ?? 15;
  fadeOut = fadeOut ?? 85;
  ignoreFadeIn = ignoreFadeIn ?? false;

  useEffect(() => {
    const percent = currentDuration / totalDuration;
    if (percent >= 0) {
      setDisplay('block');

      // Set the background offset
      setOffset(percent * 100);

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
    <div
      className={styles.wrapper}
      style={{
        textAlign: variant ?? 'left',
        fontSize: fontSize,
        display: display,
        opacity: opactiy,
        transform: `translateZ(0)`,
      }}
    >
      <span className={styles.text}>{title}</span>
      <div
        className={styles.background}
        style={{
          transform: `translateY(-${offset}%)`,
        }}
      ></div>
      <div className={styles.fallbackBackground}></div>
    </div>
  );
};

export default CutoutText;
