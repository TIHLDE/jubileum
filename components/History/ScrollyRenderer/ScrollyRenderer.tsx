import { useEffect, useState } from 'react';
import CutoutText from '../CutoutText/CutoutText';

import CutoutBody from '../CutoutBody/CutoutBody';
import CutoutTextWithBody from '../CutoutTextWithBody/CutoutTextWithBody';
import ScrollyImage from '../ScrollyImage/ScrollyImage';
import ScrollyContainer from '../ScrollyContainer/ScrollyContainer';
import { Quote } from '../Quote/Quote';
import { ScrollyButton } from '../Button/Button';
import { ScrollyTimeline, TimelineEntry } from '../Timeline/Timeline';
import { Typography } from '@mui/material';
import { EntryAggregate, entries } from '../historyEntries';

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
  let currentComponent: Array<EntryAggregate> = [];

  const formatChildren = (entry: EntryAggregate) => {
    if (entry.type == 'timeline') {
      for (let e of entry.entries) {
        e.key = entry.entries.indexOf(e);
        e.ignoreFadeIn = true;
        e.ignoreFadeOut = true;

        if (e.type == 'parent') {
          e.variant = 'left';
          formatChildren(e);
        }
      }
    } else if (entry.type == 'parent') {
      entry.variant = 'left';
      for (let e of entry.children) {
        e.key = entry.children.indexOf(e);
        e.ignoreFadeIn = true;
        e.ignoreFadeOut = true;

        if (e.type == 'parent') {
          formatChildren(e);
        }
      }
    }
  };

  // Find the currently active component
  let absoluteDuration = 0;
  for (let e of entries) {
    if (e.type == 'timeline') {
      if (
        absoluteDuration <= duration &&
        absoluteDuration + e.duration > duration
      ) {
        // Set a unique key for each component
        e.key = entries.indexOf(e);

        // Format all of the contents in the timeline object
        formatChildren(e);

        currentComponent = [e];
        break;
      }
    }
    // If the entry type is a parent, we need to extract all the children, and put them in the currentComponent array
    else if (e.type == 'parent') {
      if (
        absoluteDuration <= duration &&
        absoluteDuration + e.duration > duration
      ) {
        // Set a unique key for each component
        e.key = entries.indexOf(e);

        for (let n of e.children) {
          // Force the children to have same duration as parent. This feature might be removed later on
          n.duration = e.duration;

          // Add unique keys for each child component
          n.key = e.children.indexOf(n);
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
export function makeComponent(entry: EntryAggregate, currentDuration: number) {
  switch (entry.type) {
    case 'title':
      return (
        <CutoutText
          key={entry.key}
          title={entry.title ?? ''}
          totalDuration={entry.duration}
          currentDuration={currentDuration}
          ignoreFadeIn={entry.ignoreFadeIn}
          ignoreFadeOut={entry.ignoreFadeOut}
          scaleTransition={entry.scaleTransition}
          fadeOut={entry.fadeOut}
          fadeIn={entry.fadeIn}
        />
      );
      break;
    case 'body':
      return (
        <CutoutBody
          key={entry.key}
          body={entry.body ?? ''}
          totalDuration={entry.duration}
          currentDuration={currentDuration}
          ignoreFadeIn={entry.ignoreFadeIn}
          ignoreFadeOut={entry.ignoreFadeOut}
          variant={entry.textAlign ?? 'center'}
          disableBackgroundAnimations={entry.disableBackgroundAnimations}
        />
      );
      break;
    case 'titlebody':
      return (
        <CutoutTextWithBody
          key={entry.key}
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
          key={entry.key}
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
      return (
        <Quote
          key={entry.key}
          label={entry.label ?? ''}
          totalDuration={entry.duration}
          currentDuration={currentDuration}
          fontSize={entry.fontSize}
          ignoreFadeIn={entry.ignoreFadeIn}
          ignoreFadeOut={entry.ignoreFadeOut}
        />
      );
      break;
    case 'button':
      /*       return (
        <ScrollyButton
          key={entry.key}
          label={entry.label ?? ''}
          totalDuration={entry.duration}
          currentDuration={currentDuration}
          fontSize={entry.fontSize}
          ignoreFadeIn={entry.ignoreFadeIn}
          ignoreFadeOut={entry.ignoreFadeOut}
          onClick={entry.onClick}
          href={entry.href}
        />
      ); */
      break;
    case 'parent':
      return (
        <ScrollyContainer
          key={entry.key}
          currentDuration={currentDuration}
          totalDuration={entry.duration}
          ignoreFadeIn={entry.ignoreFadeIn}
          ignoreFadeOut={entry.ignoreFadeOut}
          contentFlow={entry.flowDirection}
          itemSpacing={entry.itemSpacing}
          variant={entry.variant}
        >
          {entry.children.map(
            (e) => makeComponent(e, currentDuration) ?? <></>
          )}
        </ScrollyContainer>
      );
      break;
    case 'timeline':
      return (
        <ScrollyTimeline
          currentDuration={currentDuration}
          totalDuration={entry.duration}
          contentFlow={entry.flowDirection}
          ignoreFadeIn={entry.ignoreFadeIn}
          ignoreFadeOut={entry.ignoreFadeOut}
          fadeIn={entry.fadeIn}
          fadeOut={entry.fadeOut}
          key={entry.key}
          entries={entry.entries}
        ></ScrollyTimeline>
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
