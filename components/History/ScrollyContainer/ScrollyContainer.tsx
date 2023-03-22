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
