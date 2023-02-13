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

  // Define a target date for the countdown timer
  const targetDate = new Date("Mar 20, 2023 12:00:00");

  // Code for updating the timer values
  const updateTimer = () => {
    if (targetDate.getTime() - new Date().getTime() <= 0) {
      // There is no remaining time!
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });

      // Fire the confetti only once!
      if (!confettiFired) {
        setConfettiFired(true);
        run();
      }

      return;
    }

    // Calculate the remaining time
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the timeLeft hook
    setTimeLeft({
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    });
  };

  useEffect(() => {
    // Update the time remaining immedeately upon component mount
    updateTimer();

    // Create an interval which updates the component every second
    const interval = setInterval(updateTimer, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, [confettiFired]);

  return (
    <>
      <Grid
        container
        textAlign="center"
        columns={8}
        width={200}
        sx={{
          zIndex: 1000,
          position: "absolute",
        }}
      >
        <Grid item xs={2}>
          <Typography fontSize={20} fontWeight={600}>
            {timeLeft.days} d
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography fontSize={20} fontWeight={600}>
            {timeLeft.hours} t
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography fontSize={20} fontWeight={600}>
            {timeLeft.minutes} m
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography fontSize={20} fontWeight={600}>
            {timeLeft.seconds} s
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
