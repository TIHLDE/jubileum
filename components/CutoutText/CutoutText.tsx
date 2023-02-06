import { isEqual } from 'date-fns';
import styles from './CutoutText.module.css';
import { useState, useEffect } from 'react';

const CutoutText = ({ ...props }) => {
  const [variant, setVariant] = useState(props.variant ?? 'left');
  const [fontSize, setFontSize] = useState(props.fontSize ?? '1.5rem');
  const [offset, setOffset] = useState(props.offset ?? 0);
  const [display, setDisplay] = useState(props.display ?? 'none');
  const [opactiy, setOpacity] = useState(1);
  const [transform, setTransform] = useState(props.transform ?? 'none');

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

    // Update the opacity of the text
    if (offset < 20) {
      const calcOpac = (30 - (offset - 70)) / 30;
      setOpacity(calcOpac > 0 ? calcOpac : 0);
    } else if (offset > 80) {
      const calcOpac = (20 - (offset - 80)) / 20;
      setOpacity(calcOpac > 0 ? calcOpac : 0);
    }
  }, [props.offset, props.display, props.transform]);

  return (
    <div
      className={styles.wrapper}
      style={{
        textAlign: variant,
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
    </div>
  );
};

export default CutoutText;
