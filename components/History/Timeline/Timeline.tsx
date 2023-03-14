import { Box, Card, Typography } from '@mui/material';
import { DefaultComponentType, TextComponentProps } from '../ComponentType';
import { useEffect, useState } from 'react';
import { EntryAggregate } from '../../../pages/historie/historyEntries';
import { makeComponent } from '../ScrollyRenderer/ScrollyRenderer';

type TimelineProps = {
  entries: Array<EntryAggregate>;
  contentFlow?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
} & DefaultComponentType;

export const ScrollyTimeline = ({ ...props }: TimelineProps) => {
  const [opacity, setOpacity] = useState(1);

  props.fadeIn = props.fadeIn ?? 15;
  props.fadeOut = props.fadeOut ?? 85;
  props.ignoreFadeIn = props.ignoreFadeIn ?? false;

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
        height: '70%',
        width: '100%',
        position: 'relative',
      }}
    >
      <div
        style={{
          background:
            'linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7203256302521008) 63%, rgba(0,0,0,1) 100%)',
          height: '20%',
          width: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      ></div>
      <div
        style={{
          display: 'flex',
          flexDirection: props.contentFlow ?? 'column',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: opacity,
        }}
      >
        {props.entries.map((e) => (
          <TimelineEntry
            extend={true}
            key={e.key}
            currentDuration={props.currentDuration}
            totalDuration={e.duration}
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
} & DefaultComponentType;

export const TimelineEntry = ({ ...props }: TimelineEntryProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: '100%',
        width: '50vw',
        alignItems: 'center',
        justifyContent: 'left',
      }}
    >
      <div
        style={{
          width: '2px',
          height: '100%',
          background: 'white',
        }}
      />
      <div
        style={{
          width: props.extend ? '30%' : '10%',
          height: '0.5px',
          background: 'white',
          marginRight: 10,
          transition: 'all 500ms ease-in-out',
        }}
      />
      <Card
        variant='outlined'
        sx={{
          maxWidth: '30vw',
        }}
      >
        {props.children}
      </Card>
    </Box>
  );
};
