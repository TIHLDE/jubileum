import { Button } from '@mui/material';
import { useState } from 'react';

type QuoteProps = {
  label: string;
  totalDuration: number;
  currentDuration: number;
  fadeIn?: number;
  fadeOut?: number;
  fontSize?: string;
  ignoreFadeIn?: boolean;
};

export const Quote = ({ ...props }: QuoteProps) => {
  const [display, setDisplay] = useState('none');
  const [opactiy, setOpacity] = useState(1);

  return <Button variant='contained'>Klikk meg</Button>;
};
