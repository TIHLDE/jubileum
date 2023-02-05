import { isEqual } from 'date-fns';
import { useEffect, useState } from 'react';

const ScrollyContainer = ({ ...props }) => {
  const [progress, setProgress] = useState(props.progress ?? 0);
  const [display, setDisplay] = useState(props.display ?? 'none');
  const [opactiy, setOpacity] = useState(1);

  useEffect(() => {
    if (props.progress != progress) {
      setProgress(props.progress);
    }

    if (props.display != display) {
      setDisplay(props.display);
    }

    if (progress < 40) {
      console.log(progress);
      const calcOpac = progress / 20;
      console.log('Setting opacity to ' + calcOpac + '');
      setOpacity(calcOpac > 0 ? calcOpac : 0);
    }
  }, [props.progress, props.display]);
  return (
    <div
      style={{
        display: display,
        position: 'fixed',
        transform: `translateY(-${progress > 20 ? 0 : 20 - progress}%)`,
        opacity: opactiy,
      }}
    >
      {props.children}
    </div>
  );
};

export default ScrollyContainer;
