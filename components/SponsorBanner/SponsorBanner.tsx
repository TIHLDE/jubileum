import { Box, Divider, Grid, keyframes } from '@mui/material';
import Image from 'next/image';
import { MnemonicLogo } from '../MnemonicLogo/MnemonicLogo';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const SponsorBanner = () => {
  return (
    <Grid
      container
      sx={{
        position: 'absolute',
        left: '50%',
        transform: 'translate(-50%, 0)',
        zIndex: 2,
        top: '4rem',
        width: 'fit-content',
      }}
    >
      <Grid item xs={12} md={6}>
        <Image
          src={'/../public/Bouvet_Logo_white.png'}
          width={400}
          height={200}
          alt={'Bouvet Logo'}
          style={{
            height: '2rem',
            width: 'auto',
            margin: 'auto',
            display: 'block',
          }}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <MnemonicLogo height='2rem' />
      </Grid>
    </Grid>
  );
};
