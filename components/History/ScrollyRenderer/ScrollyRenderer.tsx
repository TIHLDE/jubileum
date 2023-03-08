import { ButtonBaseProps, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import CutoutText from '../CutoutText/CutoutText';
import {
  Entry,
  ParentEntry,
  entries,
} from '../../../pages/historie/historyEntries';
import CutoutBody from '../CutoutBody/CutoutBody';
import CutoutTextWithBody from '../CutoutTextWithBody/CutoutTextWithBody';

type ScrollyProps = {
  durationProgress: number;
};

const ScrollyRenderer = ({ durationProgress }: ScrollyProps) => {
  const [duration, setDuration] = useState(durationProgress);

  // Update the component state when new props are passed from the parent
  useEffect(() => {
    setDuration(durationProgress);
  }, [durationProgress]);

  // Set a placeholder component
  let currentComponent: Array<Entry> = [
    {
      type: 'title',
      duration: 0,
      title: 'Placeholder',
    },
  ];

  // Find the currently active component
  let absoluteDuration = 0;
  for (let e of entries) {
    // If the entry type is a parent, we need to extract all the children, and put them in the currentComponent array
    if (e.type == 'parent') {
      if (
        absoluteDuration <= duration &&
        absoluteDuration + e.duration > duration
      ) {
        currentComponent = e.children;
        break;
      }

      // If the entry type is a child element, we need to put it into the currentComponent array
    } else {
      if (
        absoluteDuration <= duration &&
        absoluteDuration + e.duration > duration
      ) {
        currentComponent = [e];
        break;
      }
    }

    // Add to the absolute duration sum (the duration value when the current component should be shown)
    absoluteDuration += e.duration;
  }

  return (
    <>
      {currentComponent.map((e) =>
        makeComponent(e, duration - absoluteDuration)
      )}
    </>
  );
};

/**
 * This function takes an object of type Entry, and
 * transforms it into a react component.
 *
 * @param entry The entry object to transform
 */
function makeComponent(entry: Entry, currentDuration: number) {
  switch (entry.type) {
    case 'title':
      return (
        <CutoutText
          key={entry.type}
          title={entry.title ?? ''}
          totalDuration={entry.duration}
          currentDuration={currentDuration}
          ignoreFadeIn={entry.ignoreFadeIn}
        />
      );
      break;
    case 'body':
      return (
        <CutoutBody
          key={entry.type}
          body={entry.body ?? ''}
          totalDuration={entry.duration}
          currentDuration={currentDuration}
          ignoreFadeIn={entry.ignoreFadeIn}
          variant={entry.textAlign ?? 'center'}
          disableBackgroundAnimations={entry.disableBackgroundAnimations}
        />
      );
      break;
    case 'titlebody':
      return (
        <CutoutTextWithBody
          title={entry.title ?? ''}
          body={entry.body ?? ''}
          totalDuration={entry.duration}
          currentDuration={currentDuration}
        />
      );

    default:
      break;
  }
}

  
  


export { ScrollyRenderer };

/**
 * 1. Find what component needs to be rendered
 * 2. Render this component, in addition to passing it a progress prop
 * 3. The component should handle all fade-ins animations etc. based on the progress prop
 */
