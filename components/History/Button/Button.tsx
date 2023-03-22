import { Button } from '@mui/material';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type ButtonProps = {
  label: string;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  totalDuration: number;
  currentDuration: number;
  fontSize?: string;
  fadeIn?: number;
  fadeOut?: number;
  ignoreFadeIn?: boolean;
  ignoreFadeOut?: boolean;
};

export const ScrollyButton = ({ ...props }: ButtonProps) => {
  const [opacity, setOpacity] = useState(1);

  props.fadeIn = props.fadeIn ?? 20;
  props.fadeOut = props.fadeOut ?? 70;

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
        } else if (
          percent * 100 >= props.fadeOut &&
          percent * 100 <= 100 &&
          !props.ignoreFadeOut
        ) {
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
    <Link href={props.href ?? '#'} target='_blank'>
      <Button
        variant='text'
        color='primary'
        onClick={props.onClick ?? undefined}
        disabled={props.disabled ?? false}
        sx={{
          opacity: opacity,
          fontSize: props.fontSize ?? 'unset',
          fontWeight: 500,
          borderWidth: '1px',
        }}
      >
        {props.label}
      </Button>
    </Link>
  );
};
