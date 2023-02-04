import styles from './Timeline.module.css'
import React, { useEffect, useState, ReactNode } from 'react'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import { Paper, Typography, styled } from '@mui/material'

type Entry = {
  date: string
  title: string
  body: string
}

const StyledSpan = styled('span')(({ theme }) => ({
  color: theme.palette.text.primary,
}))

export const TIHLDETimeline = ({ ...props }) => {
  return (
    <Timeline>
      {props.items.map((timelineEntry: Entry, index: number) => (
        <TimelineItem key={index}>
          <TimelineOppositeContent color={'text.secondary'}>
            {timelineEntry.date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            {props.items.length - 1 > index ? <TimelineConnector /> : null}
          </TimelineSeparator>
          <TimelineContent color={'text.primary'}>
            <TimelinePaper>{timelineEntry}</TimelinePaper>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

const TimelinePaper = ({...props}) => {
  return (
    <Paper variant="outlined" className={styles.timelinePaper}>
      <Paper elevation={1} className={styles.titlePaper}>
        {props.children.title}
      </Paper>
      {props.children.body ? (
        <div className={styles.timelineBodyWrapper}>
          <StyledSpan className={styles.timelineBody}>{props.children.body}</StyledSpan>
        </div>
      ) : null}
    </Paper>
  )
}

{
  /* <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          09:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          09:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          09:30 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
    </Timeline> */
}
