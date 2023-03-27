import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

function StaticTimeline({ items }: { items: Array<string> }) {
  return (
    <Timeline sx={{ xs: 20, md: 20 }} position={"alternate"}>
      {items.map((item, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot color="primary" />
            {index !== items.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>{item}</TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}

export default StaticTimeline;
