import styles from "./Countdown.module.css";
import React, { useEffect, useState, ReactNode } from "react";
import { useConfetti } from "../hooks/Confetti";
import { Grid, Typography } from "@mui/material";

type CountdownProps = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<CountdownProps>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [confettiFired, setConfettiFired] = useState(false);
  const { run } = useConfetti();

  useEffect(() => {
    // Fire some confetti!
    run();
  });

  return (
    <React.Fragment>
      <Grid
        container
        textAlign='center'
        columns={8}
        width={200}
        sx={{
          zIndex: 1000,
          position: 'absolute',
          borderRadius: '0.25rem',
          left: '50%',
          transform: 'translateX(-50%)',
          marginTop: '1rem',
        }}
      >
        <Grid item xs={2}>
          <Typography fontSize={20} fontWeight={600}>
            0d
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography fontSize={20} fontWeight={600}>
            0t
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography fontSize={20} fontWeight={600}>
            0m
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography fontSize={20} fontWeight={600}>
            0s
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
