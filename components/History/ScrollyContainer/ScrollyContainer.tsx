import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

type ScrollyContainerProps = {
  totalDuration: number;
  currentDuration: number;
  contentFlow?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  children: Array<JSX.Element>;
  variant?: 'left' | 'center' | 'right';
  itemSpacing?: string;
  ignoreFadeIn?: boolean;
  ignoreFadeOut?: boolean;
};

const ScrollyContainer = ({ ...props }: ScrollyContainerProps) => {
  const [totalDuration, setTotalDuration] = useState(props.totalDuration);
  const [currentDuration, setCurrentDuration] = useState(props.currentDuration);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (props.totalDuration != totalDuration) {
      setTotalDuration(props.totalDuration);
    }

    if (props.currentDuration != currentDuration) {
      setTotalDuration(props.currentDuration);
    }
  }, [
    props.totalDuration,
    props.currentDuration,
    totalDuration,
    currentDuration,
  ]);

  return (
    <Box
      style={{
        opacity: 1,
        width: 'fit-content',
        maxWidth: '80vw',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: props.contentFlow ?? 'row',
        alignItems: props.variant ?? 'center',
        gap: props.itemSpacing ?? '0',
      }}
    >
      {props.children}
    </Box>
  );
};

export default ScrollyContainer;
