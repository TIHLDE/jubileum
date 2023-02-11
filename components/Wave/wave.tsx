import { keyframes } from "@emotion/react";
import React from "react";
import classes from "./wave.module.css";

const Wave = () => {
  return (
    <div className={classes.root}>
      <div className={classes.waveWrapperInner}>
        <div className={classes.waveTop}>
          <img src="waves/wave-top.svg" className={classes.svg} />
        </div>
        <div className={classes.waveMiddle}>
          <img src="waves/wave-mid.svg" className={classes.svg} />
        </div>
        <div className={classes.waveBottom}>
          <img src="waves/wave-bottom.svg" className={classes.svg} />
        </div>
      </div>
    </div>
  );
};

export default Wave;
