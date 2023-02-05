import { Alert, Chip, LinearProgress, Paper } from '@mui/material';
import CutoutText from '../CutoutText/CutoutText';
import { Logo } from '../TihldeLogo/TihldeLogo';
import styles from './ScrollyTeller.module.css';
import { useState, useEffect } from 'react';
import ScrollyContainer from '../ScrollyContainer/ScrollyContainer';
import ScrollyCard from '../ScrollyCard/ScrollyCard';

export const ScrollyTeller = ({ ...props }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    // Add event listener for scrolling
    window.addEventListener('scroll', handleScroll);

    // Function to handle scrolling
    function handleScroll() {
      // Get the current scroll position
      const position = window.pageYOffset;

      // Get the height of the body
      const bodyHeight = document.body.clientHeight;

      const percentage = (position / (bodyHeight - 400)) * 100;

      setPercentage(percentage > 100 ? 100 : percentage);
    }

    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={styles.scrollyTeller}>
        <div className={styles.scrollyTellerContent}>
          {/* Display the TIHLDE logo to begin with */}

          <CutoutText
            variant={'center'}
            fontSize={'10vw'}
            offset={percentage * 10 > 100 ? 100 : percentage * 10}
            display={percentage < 10 ? 'block' : 'none'}
          >
            20. Mars 1993
          </CutoutText>

          <CutoutText
            variant={'center'}
            fontSize={'10vw'}
            offset={(percentage - 10) * 10 > 100 ? 100 : (percentage - 10) * 10}
            display={percentage >= 10 && percentage < 20 ? 'block' : 'none'}
          >
            Tihlde Stiftes
            <div
              style={{
                display: 'inline-block',
                width: 'fit-content',
              }}
            >
              <Chip label='Les mer' onClick={handleClick} />
            </div>
          </CutoutText>

          <CutoutText
            variant={'center'}
            fontSize={'10vw'}
            offset={(percentage - 20) * 5 > 100 ? 100 : (percentage - 20) * 5}
            display={percentage >= 20 && percentage < 40 ? 'block' : 'none'}
          >
            Dette var en kjapp demo av en måte å formidle Tihldes historie på.
          </CutoutText>

          <ScrollyContainer
            progress={(percentage - 40) * 5 > 100 ? 100 : (percentage - 40) * 5}
            display={percentage >= 40 && percentage < 60 ? 'block' : 'none'}
          >
            <ScrollyCard />
          </ScrollyContainer>

          <CutoutText
            variant={'center'}
            fontSize={'10vw'}
            offset={(percentage - 60) * 5 > 100 ? 100 : (percentage - 60) * 5}
            display={percentage >= 60 && percentage < 80 ? 'block' : 'none'}
          >
            Dessuten kan man legge inn bilder, videoer, og andre ting, for å
            formidle historien på en effektiv måte.
          </CutoutText>

          <CutoutText
            variant={'center'}
            fontSize={'10vw'}
            offset={(percentage - 80) * 5 > 100 ? 100 : (percentage - 80) * 5}
            display={percentage >= 80 && percentage < 100 ? 'block' : 'none'}
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

function handleClick(): void {
  alert('asdasdd');
}
