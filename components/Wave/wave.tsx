import { keyframes } from "@emotion/react";
import React from "react";
import classes from "./wave.module.css";
const moveWave = keyframes`
  0% {
    transform: translateX(0) translateZ(0) scaleY(1);
  }

  50% {
    transform: translateX(-25%) translateZ(0) scaleY(0.55);
  }

  100% {
    transform: translateX(-50%) translateZ(0) scaleY(1);
  }
`;

// const useStyles = makeStyles()((theme) => ({
//   root: {
//     padding: 0,
//     margin: "unset",
//     width: "100%",
//     maxWidth: "none",
//     height: 500,
//   },
//   content: {
//     margin: "auto",
//     maxWidth: 920,
//     padding: "150px 15px 100px",
//     position: "relative",
//     zIndex: 20,
//   },
//   logo: {
//     width: "70vw",
//     height: "auto",
//     maxWidth: 450,
//     minWidth: 250,
//     maxHeight: 90,
//   },
//   contentButtons: {
//     margin: theme.spacing(2, "auto", 0),
//     display: "flex",
//     justifyContent: "center",
//   },
//   contentButtonPrimary: {
//     color: theme.palette.text.primary,
//     backgroundColor: theme.palette.background.paper,
//     "&:hover": {
//       backgroundColor: `${theme.palette.background.paper}bb`,
//     },
//     margin: theme.spacing("auto", 1),
//   },

//   waveWrapperInner: {
//     position: "absolute",
//     left: 0,
//     right: 0,
//     width: "100%",
//     overflow: "hidden",
//     height: 130,
//     bottom: 0,
//     zIndex: 15,
//     background: `linear-gradient(to bottom, transparent 80%, ${theme.palette.background.smoke})`,
//   },
//   wave: {
//     position: "absolute",
//     left: 0,
//     bottom: 0,
//     width: "200%",
//     height: "100%",
//     fill: theme.palette.four.main,
//     display: "flex",
//   },
//   waveTop: {
//     zIndex: 18,
//     opacity: 0.5,
//     animation: `${moveWave} 60s linear alternate infinite`,
//     transformOrigin: "bottom center",
//   },
//   waveMiddle: {
//     zIndex: 17,
//     opacity: 0.6,
//     animation: `${moveWave} 20s linear alternate infinite`,
//     transformOrigin: "bottom left",
//   },
//   waveBottom: {
//     zIndex: 16,
//     opacity: 0.7,
//     width: "280%",
//     animation: `${moveWave} 25s linear alternate infinite`,
//     transformOrigin: "bottom right",
//   },
//   svg: {
//     position: "absolute",
//     bottom: 0,
//     width: "100%",
//     height: 120,
//     [theme.breakpoints.down("md")]: {
//       height: 90,
//     },
//   },
// }));

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
