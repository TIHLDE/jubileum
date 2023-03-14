import styles from './CutoutText.module.css';
import { useState, useEffect } from 'react';
import { DefaultComponentType, TextComponentProps } from '../ComponentType';

export type CutoutProps = {
  title: string;
  scaleTransition?: boolean;
} & DefaultComponentType &
  TextComponentProps;

const CutoutText = ({
  title,
  totalDuration,
  currentDuration,
  variant,
  fadeIn,
  fadeOut,
  fontSize,
  ignoreFadeIn,
  scaleTransition,
}: CutoutProps) => {
  const [offset, setOffset] = useState(0);
  const [display, setDisplay] = useState('none');
  const [opactiy, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);

  variant = variant ?? 'left';
  fontSize = fontSize ?? '5rem';
  fadeIn = fadeIn ?? 15;
  fadeOut = fadeOut ?? 85;
  ignoreFadeIn = ignoreFadeIn ?? false;
  scaleTransition = scaleTransition ?? false;

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

      if (scaleTransition) {
        setScale(Math.max(percent * 3, 1));
      } else {
        setScale(1);
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
        transform: `translateZ(0) scale(${scale})`,
      }}
    >
      <span className={styles.text}>{title}</span>
      <div className={styles.backgroundWrapper}>
        <div
          className={styles.background}
          style={{
            transform: `translateY(-${offset}%)`,
          }}
        ></div>
        <div className={styles.fallbackBackground}></div>
      </div>
    </div>
  );
};

export default CutoutText;
