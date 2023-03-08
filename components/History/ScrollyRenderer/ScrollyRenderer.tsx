import { ButtonBaseProps, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import CutoutText from '../CutoutText/CutoutText';
import { entries } from '../../../pages/historie/historyEntries';
import CutoutBody from '../CutoutBody/CutoutBody';

type ScrollyProps = {
  durationProgress: number;
};

type Entry = {
  type: 'title' | 'body' | 'titlebody' | 'image' | 'card' | 'pause';
  title?: string;
  body?: string;
  src?: string;
  button?: ButtonBaseProps;
  duration: number;
  fadeIn?: number;
  fadeOut?: number;
  ignoreFadeIn?: boolean;
  disableBackgroundAnimations?: boolean;
};

const ScrollyRenderer = ({ durationProgress }: ScrollyProps) => {
  const [duration, setDuration] = useState(durationProgress);

  // Update the component state when new props are passed from the parent
  useEffect(() => {
    console.log(durationProgress);
    setDuration(durationProgress);
  }, [durationProgress]);

  // Get the current component
  let currentComponent: Entry = {
    type: 'title',
    duration: 0,
    title: 'Placeholder',
  };

  let absoluteDuration = 0;
  for (let e of entries) {
    if (
      absoluteDuration <= duration &&
      absoluteDuration + e.duration > duration
    ) {
      currentComponent = e;
      break;
    }
    absoluteDuration += e.duration;
  }

  if (currentComponent.type == 'title') {
    return (
      <CutoutText
        title={currentComponent.title || ''}
        totalDuration={currentComponent.duration}
        currentDuration={duration - absoluteDuration}
        variant='center'
        fadeIn={currentComponent.fadeIn}
        fadeOut={currentComponent.fadeOut}
        ignoreFadeIn={currentComponent.ignoreFadeIn}
      ></CutoutText>
    );
  } else if (currentComponent.type == 'body') {
    return (
    <CutoutBody
        body={currentComponent.body || ''}
        totalDuration={currentComponent.duration}
        currentDuration={duration - absoluteDuration}
        variant='center'
        fadeIn={currentComponent.fadeIn}
        fadeOut={currentComponent.fadeOut}
        ignoreFadeIn={currentComponent.ignoreFadeIn}
        disableBackgroundAnimations={currentComponent.disableBackgroundAnimations} />
    )
  } else {
    return (
      <CutoutText
        title={'Done'}
        totalDuration={currentComponent.duration}
        currentDuration={duration - absoluteDuration}
        variant='center'
      ></CutoutText>
    );
  }
};

export { ScrollyRenderer };

/**
 * 1. Find what component needs to be rendered
 * 2. Render this component, in addition to passing it a progress prop
 * 3. The component should handle all fade-ins animations etc. based on the progress prop
 */
