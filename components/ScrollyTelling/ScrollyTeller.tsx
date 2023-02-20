import { Alert, Chip, LinearProgress, Paper } from '@mui/material';
import CutoutText from '../CutoutText/CutoutText';
import styles from './ScrollyTeller.module.css';
import { useState, useEffect } from 'react';
import ScrollyContainer from '../ScrollyContainer/ScrollyContainer';
import ScrollyCard from '../ScrollyCard/ScrollyCard';

// Manage fading effects for all components
function calculateOpacity(percentage: number, fadeIn: number, fadeOut: number) {
  if (percentage < 0) return 0;
  if (percentage > 100) return 0;

  if (percentage <= fadeIn) {
    return percentage / fadeIn;
  } else if (percentage > fadeIn && percentage < fadeOut) {
    return 1;
  } else if (percentage >= fadeOut) {
    return (100 - percentage) / (100 - fadeOut);
  }

  return 0;
}



const ScrollyTeller = ({ ...props }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Add event listener for scrolling
    window.addEventListener('scroll', handleScroll);

    // Function to handle scrolling
    function handleScroll() {
      // Get the current scroll position
      const position = window.scrollY;

      // Get the height of the body
      const bodyHeight = document.body.clientHeight;

      const percentage = (position / (bodyHeight - 400)) * 100;

      setPercentage(percentage > 100 ? 100 : percentage);
    }

    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const displayInRange = (min: number, max: number) => {
    return percentage >= min && percentage < max ? 'block' : 'none';
  };

  return (
    <>
      <div className={styles.scrollyTeller}>
        <div className={styles.scrollyTellerContent}>
          {/* Display the TIHLDE logo to begin with */}

          <CutoutText
            variant={'center'}
            fontSize={'10vw'}
            fadeIn={0}
            offset={percentage * 10 > 100 ? 100 : percentage * 10}
            display={displayInRange(0, 10)}
            transform={percentage > 5 ? -(percentage - 5) * 10 : 0}
          >
            20. Mars 1993
          </CutoutText>

          <CutoutText
            variant={'center'}
            fontSize={'10vw'}
            offset={(percentage - 10) * 10 > 100 ? 100 : (percentage - 10) * 10}
            display={displayInRange(10, 20)}
          >
            Tihlde Stiftes
            <div
              style={{
                display: 'inline-block',
                width: 'fit-content',
              }}
            >
              <Chip label='Les mer' />
            </div>
          </CutoutText>

          <CutoutText
            variant={'center'}
            fontSize={'10vw'}
            offset={(percentage - 20) * 5 > 100 ? 100 : (percentage - 20) * 5}
            display={displayInRange(20, 40)}
          >
            Yes
          </CutoutText>

          <ScrollyContainer
            progress={(percentage - 40) * 5 > 100 ? 100 : (percentage - 40) * 5}
            display={displayInRange(40, 60)}
          >
            <ScrollyCard />
          </ScrollyContainer>

          <CutoutText
            variant={'center'}
            fontSize={'10vw'}
            offset={(percentage - 60) * 5 > 100 ? 100 : (percentage - 60) * 5}
            display={displayInRange(60, 80)}
          >
            Dessuten kan man legge inn bilder, videoer, og andre ting, for å
            formidle historien på en effektiv måte.
          </CutoutText>

          <CutoutText
            variant={'center'}
            fontSize={'10vw'}
            offset={(percentage - 80) * 5 > 100 ? 100 : (percentage - 80) * 5}
            display={displayInRange(80, 100)}
          >
            Til slutt kan vi evt. legge inn en vanlig tidslinje for å gå mer i
            detalj.
          </CutoutText>
        </div>
        <Alert severity='info' className={styles.alert}>
          Bla ned for å lese mer
        </Alert>
        <LinearProgress
          color='primary'
          variant='determinate'
          value={percentage}
          className={styles.progressBar}
        />
      </div>
      <div className={styles.bodyFiller}></div>
    </>
  );
};

export { calculateOpacity, ScrollyTeller };