import { Box } from '@mui/material';

/**
 *
 * NOTE: this component is not close to being finished. The plan is to allow for background effects on
 * the website itself, not just the text components.
 *
 */

type BackgroundProps = {
  progress: number;
  start?: 'top' | 'bottom';
};

/**
 *
 * @param progress The progress percentage
 * @param start The edge of the screen to start the gradient at
 */
const BackgroundGradient = ({ progress, start }: BackgroundProps) => {
  start = start ?? 'bottom';
  return (
    <Box
      sx={{
        background:
          'linear-gradient(0deg, rgba(168,93,161,1) 0%, rgba(160,108,165,1) 20%, rgba(102,220,196,1) 50%, rgba(155,119,168,1) 80%, rgba(168,93,161,1) 100%)',
        height: '40vh',
        width: '100vw',
        position: 'absolute',
        color: 'transparent',
        left: 0,
        bottom: 0,
      }}
    >
      <Box
        sx={{
          background:
            'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 54%, rgba(0,0,0,0) 100%)',
          width: '100%',
          height: '100%',
        }}
      >
        .
      </Box>
    </Box>
  );
};

export { BackgroundGradient };
