import styles from './CutoutText.module.css';
import { useState, useEffect } from 'react';
import { DefaultComponentType, TextComponentProps } from '../ComponentType';

export type CutoutProps = {
  title: string;
  scaleTransition?: boolean;
} & DefaultComponentType &
  TextComponentProps;

const CutoutText = ({ ...props }: CutoutProps) => {
  const [offset, setOffset] = useState(0);
  const [opactiy, setOpacity] = useState(1);
  const [scale, setScale] = useState(1);

  const variant = props.variant ?? 'left';
  const fontSize = props.fontSize ?? '5rem';
  const fadeIn = props.fadeIn ?? 15;
  const fadeOut = props.fadeOut ?? 85;
  const ignoreFadeIn = props.ignoreFadeIn ?? false;
  const ignoreFadeOut = props.ignoreFadeOut ?? false;
  const scaleTransition = props.scaleTransition ?? false;

  const scaleTransitionFormula = (percent: number) => {
    return Math.max((percent * 3) / 100, 1);
  };

  useEffect(() => {
    const percent = (props.currentDuration / props.totalDuration) * 100;

    // Set the background offset
    setOffset(percent);

    // Calculate the text opacity if the percentage is less than fadeIn
    if (percent <= fadeIn && percent >= 0 && !ignoreFadeIn) {
      // Set the opacity to 0 if the fadein percentage duration is 0
      if (fadeIn == 0) {
        setOpacity(1);
      } else {
        // Set the fadein opacity
        setOpacity(percent / fadeIn);
      }

      // Set opacity to 1 if percentage is greater than fadeIn, and less than fadeOut
    } else if (percent >= fadeIn && percent <= fadeOut) {
      setOpacity(1);

      // Calculate the fadeout opacity if the percentage is greater than fadeOut
    } else if (percent >= fadeOut && percent <= 100 && !ignoreFadeOut) {
      if (fadeOut == 100) {
        setOpacity(1);
      } else {
        setOpacity((100 - percent) / (100 - fadeOut));
      }
    }

    if (scaleTransition) {
      setScale(scaleTransitionFormula(percent));
    } else {
      setScale(1);
    }
  }, [
    props.currentDuration,
    props.totalDuration,
    fadeIn,
    fadeOut,
    ignoreFadeIn,
    ignoreFadeOut,
    scaleTransition,
  ]);

  return (
    <div
      className={styles.wrapper}
      style={{
        textAlign: variant ?? 'left',
        fontSize: fontSize,
        display: 'block',
        opacity: opactiy,
        transform: `translateZ(0) scale(${scale})`,
      }}
    >
      <span className={styles.text}>{props.title}</span>
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
