import { Box } from '@mui/material';
import CutoutText from '../CutoutText/CutoutText';
import { FunctionBody } from 'typescript';

type CutoutProps = {
  title: string;
  totalDuration: number;
  currentDuration: number;
  variant?: 'left' | 'center' | 'right';
  fadeIn?: number;
  fadeOut?: number;
  fontSize?: string;
};

type TextProps = {
  title: string;
  fontSize: string;
  fadeIn: number;
  display: FunctionBody;
};

const CutoutTextWithBody = ({
  title,
  totalDuration,
  currentDuration,
  variant,
  fadeIn,
  fadeOut,
  fontSize,
}: TextProps & CutoutProps) => {
  return (
    <Box>
      <CutoutText
        title={title}
        totalDuration={totalDuration}
        currentDuration={currentDuration}
        variant={variant}
      ></CutoutText>
    </Box>
  );
};

export { CutoutTextWithBody };
