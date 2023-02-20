import { isEqual } from 'date-fns';
import styles from './CutoutText.module.css';
import { useState, useEffect } from 'react';
import { calculateOpacity } from '../ScrollyTelling/ScrollyTeller';

const CutoutText = ({ ...props }) => {
  const [offset, setOffset] = useState(props.offset ?? 0);
  const [display, setDisplay] = useState(props.display ?? 'none');
  const [opactiy, setOpacity] = useState(1);
  const [transform, setTransform] = useState(props.transform ?? 'none');

  const variant = props.variant ?? 'left';
  const fontSize = props.fontSize ?? '1.5rem';
  const fadeIn = props.fadeIn ?? 20;
  const fadeOut = props.fadeOut ?? 80;

  useEffect(() => {
    if (props.offset != offset) {
      setOffset(props.offset);
    }

    if (props.display != display) {
      setDisplay(props.display);
    }

    if (props.transform != transform) {
      setTransform(props.transform);
    }

    setOpacity(calculateOpacity(offset, fadeIn, fadeOut));
  }, [props.offset, props.display, props.transform]);

  return (
    <div
      className={styles.wrapper}
      style={{
        textAlign: variant ?? 'left',
        fontSize: fontSize,
        display: display,
        opacity: opactiy,
        transform: `translateY(${transform ?? 'none'}%) translateZ(0)`,
      }}
    >
      <span className={styles.text}>{props.children}</span>
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
