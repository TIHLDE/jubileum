import { Card, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

type QuoteProps = {
  label: string;
  totalDuration: number;
  currentDuration: number;
  fadeIn?: number;
  fadeOut?: number;
  fontSize?: string;
  ignoreFadeIn?: boolean;
  ignoreFadeOut?: boolean;
};

export const Quote = ({ ...props }: QuoteProps) => {
  const [display, setDisplay] = useState('none');
  const [opactiy, setOpacity] = useState(1);

  props.fadeIn = props.fadeIn ?? 50;
  props.fadeOut = props.fadeOut ?? 50;

  useEffect(() => {
    const percent = props.currentDuration / props.totalDuration;
    if (percent >= 0) {
      // Calculate the text opacity
      if (props.fadeIn && props.fadeOut) {
        if (
          percent * 100 <= props.fadeIn &&
          percent * 100 >= 0 &&
          !props.ignoreFadeIn
        ) {
          if (props.fadeIn == 0) {
            setOpacity(1);
          } else {
            setOpacity(percent * (100 / props.fadeIn));
          }
        } else if (
          percent * 100 >= props.fadeIn &&
          percent * 100 <= props.fadeOut &&
          !props.ignoreFadeOut
        ) {
          setOpacity(1);
        } else if (percent * 100 >= props.fadeOut && percent * 100 <= 100) {
          if (props.fadeOut == 100) {
            setOpacity(1);
          } else {
            setOpacity((100 - percent * 100) / (100 - props.fadeOut));
          }
        }
      }
    }
  }, [
    props.currentDuration,
    props.totalDuration,
    props.fadeIn,
    props.fadeOut,
    props.ignoreFadeIn,
    props.ignoreFadeOut,
  ]);

  return (
    <Card
      variant='outlined'
      sx={{
        opacity: opactiy,
      }}
    >
      <Typography
        sx={{
          px: 10,
          userSelect: 'none',
        }}
        textAlign={'center'}
      >
        {props.label ?? ''}
      </Typography>
    </Card>
  );
};
