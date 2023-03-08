import {
  Alert,
  Box,
  Chip,
  LinearProgress,
  Paper,
  keyframes,
  Typography,
} from '@mui/material';
import { useState, useEffect } from 'react';
import { ScrollyRenderer } from '../../components/History/ScrollyRenderer/ScrollyRenderer';
import { entries } from './historyEntries';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
// NOTE: paddingTop: '4rem' is to displace the page, to account for the
// header that is 4rem tall.

// Use this to adjust the impact of one duration unit
const contentLengthScaler = 0.3;

const HistoriePage = () => {
  const [progress, setProgress] = useState(0);
  const [contentLength, setContentLength] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Add event listener for scrolling
    window.addEventListener('scroll', handleScroll);

    // Function to handle scrolling
    function handleScroll() {
      // Get the current scroll position
      const position = window.scrollY;

      // Get the height of the body (and subtract one viewport height)
      const bodyHeight = document.body.clientHeight - window.innerHeight;
      const percentage = (position / (bodyHeight - 400)) * 100;

      const limited = percentage > 100 ? 100 : percentage;

      // Update the total percentage progression
      setPercentage(limited);

      // Update the progress unit progression
      setProgress(parseFloat((contentLength * (limited / 100)).toFixed(1)));
    }

    // Calculate the bodyfiller box height based on the content length
    const content = entries;

    let totalLength = 0;
    for (let e of content) {
      totalLength += e.duration;
    }
    setContentLength(totalLength);

    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [contentLength]);

  return (
    <Box
      sx={{
        pt: '4rem',
      }}
    >
      <>
        <Box
          sx={{
            height: '100vh',
            width: '100vw',
            background: 'black',
            position: 'fixed',
            transform: 'translateY(-4rem)',
          }}
        >
          <Box
            sx={{
              animation: `${fadeIn} 2s ease-in-out 0.2s both`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              width: '100%',
            }}
          >
            {/* Scrolly rendering here! */}
            <ScrollyRenderer durationProgress={progress} />
          </Box>
          <Alert
            sx={{
              position: 'absolute',
              bottom: '1rem',
              left: '50%',
              transform: 'translate(-50%)',
            }}
            severity='info'
          >
            Bla ned for å lese mer
          </Alert>
          <LinearProgress
            color='primary'
            variant='determinate'
            value={percentage}
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100vw',
            }}
          />
        </Box>
        <Box
          sx={{
            height: 100 * contentLengthScaler * contentLength + 'vh',
            width: '100vw',
          }}
        ></Box>
      </>
    </Box>
  );
};

export default HistoriePage;
