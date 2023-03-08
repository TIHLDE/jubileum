import { isEqual } from 'date-fns';
import styles from './CutoutText.module.css';
import { useState, useEffect } from 'react';

type CutoutProps = {
  title: string;
  totalDuration: number;
  currentDuration: number;
  variant?: 'left' | 'center' | 'right';
  fadeIn?: number;
  fadeOut?: number;
  fontSize?: string;
};

const CutoutText = ({
  title,
  totalDuration,
  currentDuration,
  variant,
  fadeIn,
  fadeOut,
  fontSize,
}: CutoutProps) => {
  const [offset, setOffset] = useState(0);
  const [display, setDisplay] = useState('none');
  const [opactiy, setOpacity] = useState(1);

  variant = variant ?? 'left';
  fontSize = fontSize ?? '1.5rem';
  fadeIn = fadeIn ?? 20;
  fadeOut = fadeOut ?? 80;

  useEffect(() => {
    const percent = currentDuration / totalDuration;
    if (percent >= 0) {
      setDisplay('block');

      // Set the background offset
      setOffset(percent * 100);

      // Calculate the text opacity
      if (fadeIn && fadeOut) {
        if (percent * 100 <= fadeIn && percent * 100 >= 0) {
          setOpacity(percent * (100 / fadeIn));
        } else if (percent * 100 >= fadeIn && percent * 100 <= fadeOut) {
          setOpacity(1);
        } else if (percent * 100 >= fadeOut && percent * 100 <= 100) {
          setOpacity();
        }
      }
    }
  }, [currentDuration, totalDuration]);

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
