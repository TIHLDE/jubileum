import { ButtonBaseProps, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import CutoutText from '../CutoutText/CutoutText';
import {
  EntryAggregate,
  entries,
} from '../../../pages/historie/historyEntries';
import CutoutBody from '../CutoutBody/CutoutBody';
import CutoutTextWithBody from '../CutoutTextWithBody/CutoutTextWithBody';
import ScrollyImage from '../ScrollyImage/ScrollyImage';
import ScrollyContainer from '../ScrollyContainer/ScrollyContainer';
import { Quote } from '../Quote/Quote';

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
  let currentComponent: Array<EntryAggregate> = [
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
        // Force the children to have same duration as parent. This feature might be removed later on
        for (let n of e.children) {
          n.duration = e.duration;
        }
        currentComponent = [e];
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
function makeComponent(entry: EntryAggregate, currentDuration: number) {
  switch (entry.type) {
    case 'title':
      return (
        <CutoutText
          key={entry.type}
          title={entry.title ?? ''}
          totalDuration={entry.duration}
          currentDuration={currentDuration}
          ignoreFadeIn={entry.ignoreFadeIn}
          scaleTransition={entry.scaleTransition}
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
          key={entry.type}
          title={entry.title ?? ''}
          body={entry.body ?? ''}
          totalDuration={entry.duration}
          currentDuration={currentDuration}
          fontSize='3rem'
        />
      );
      break;
    case 'image':
      return (
        <ScrollyImage
          key={entry.type}
          title={entry.title ?? ''}
          src={entry.src ?? ''}
          totalDuration={entry.duration}
          currentDuration={currentDuration}
          width={entry.width ?? 100}
          fadeIn={entry.fadeIn}
          fadeOut={entry.fadeOut}
        />
      );
      break;
    case 'quote':
      return <Quote />;
      break;
    case 'parent':
      return (
        <ScrollyContainer
          key={entry.type}
          currentDuration={currentDuration}
          totalDuration={entry.duration}
          contentFlow={entry.flowDirection}
          itemSpacing={entry.itemSpacing}
        >
          {entry.children.map(
            (e) => makeComponent(e, currentDuration) ?? <></>
          )}
        </ScrollyContainer>
      );
      break;

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
