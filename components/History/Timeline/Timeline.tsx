import { Box, Card, Typography } from '@mui/material';
import { DefaultComponentType, TextComponentProps } from '../ComponentType';
import { useEffect, useState } from 'react';
import { TimelineEntryItem } from '../../../pages/historie/historyEntries';
import { makeComponent } from '../ScrollyRenderer/ScrollyRenderer';
import styles from './Timeline.module.css';

type TimelineProps = {
  entries: Array<TimelineEntryItem>;
  contentFlow?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
} & DefaultComponentType;

function joinAll(...classes) {
  return classes.join(' ');
}

export const ScrollyTimeline = ({ ...props }: TimelineProps) => {
  const [opacity, setOpacity] = useState(1);

  props.fadeIn = props.fadeIn ?? 15;
  props.fadeOut = props.fadeOut ?? 85;
  props.ignoreFadeIn = props.ignoreFadeIn ?? false;

  useEffect(() => {
    const percent = props.currentDuration / props.totalDuration;
    console.log(percent);
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
          percent * 100 <= props.fadeOut
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
  ]);

  return (
    <Box
      sx={{
        height: 'fit-content',
        width: '70%',
        position: 'relative',
        maxWidth: '70%',
        overflowX: 'hidden',
        paddingLeft: '80px',
        paddingRight: '80px',
      }}
    >
      <div className={joinAll(styles.timelineShadow, styles.left)} />
      <div className={joinAll(styles.timelineShadow, styles.right)} />

      <div
        style={{
          display: 'block',
          height: '100%',
          width: '100%',
          opacity: opacity,
          whiteSpace: 'nowrap',
          transform: `translateX(-${
            (props.currentDuration / props.totalDuration) * 100
          }%)`,
        }}
      >
        {props.entries.map((e) => (
          <TimelineEntry
            extend={true}
            key={e.key}
            currentDuration={props.currentDuration}
            totalDuration={props.totalDuration}
            ignoreFadeIn={true}
            title={e.title}
          >
            {makeComponent(e, props.currentDuration)}
          </TimelineEntry>
        ))}
      </div>
      <div
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7203256302521008) 63%, rgba(0,0,0,1) 100%)',
          height: '20%',
          width: '100%',
          position: 'absolute',
          bottom: 0,
          left: 0,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      ></div>
    </Box>
  );
};

type TimelineEntryProps = {
  label?: string;
  children?: JSX.Element;
  extend: boolean;
  title: string;
} & DefaultComponentType;

export const TimelineEntry = ({ ...props }: TimelineEntryProps) => {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        flexFlow: 'column',
        height: '100%',
        width: 'fit-content',
        alignItems: 'left',
        justifyContent: 'left',
      }}
    >
      <Box
        sx={{
          width: '100%',
          position: 'relative',
        }}
        className={styles.timelineEntryHeader}
      >
        <Typography
          sx={{
            backgroundColor: 'white',
            color: 'black',
            width: 'fit-content',
            borderRadius: '0.25rem',
            padding: '0rem 0.5rem',
          }}
          fontWeight={'bold'}
        >
          {props.title}
        </Typography>
      </Box>
      <Box
        sx={{
          paddingRight: '100px',
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
};
