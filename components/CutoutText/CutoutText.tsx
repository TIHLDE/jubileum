import { isEqual } from 'date-fns';
import styles from './CutoutText.module.css';
import { useState, useEffect } from 'react';

const CutoutText = ({ ...props }) => {
  const [variant, setVariant] = useState(props.variant ?? 'left');
  const [fontSize, setFontSize] = useState(props.fontSize ?? '1.5rem');
  const [offset, setOffset] = useState(props.offset ?? 0);
  const [display, setDisplay] = useState(props.display ?? 'none');
  const [opactiy, setOpacity] = useState(1);

  useEffect(() => {
    if (props.offset != offset) {
      setOffset(props.offset);
    }

    if (props.display != display) {
      setDisplay(props.display);
    }

    // Update the opacity of the text
    console.log(offset);
    if (offset < 20) {
      const calcOpac = (30 - (offset - 70)) / 30;
      setOpacity(calcOpac > 0 ? calcOpac : 0);
    }
  }, [props.offset, props.display]);

  return (
    <div
      className={styles.wrapper}
      style={{
        textAlign: variant,
        fontSize: fontSize,
        display: display,
        opacity: opactiy,
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
