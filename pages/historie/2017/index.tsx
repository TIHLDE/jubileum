import * as React from "react";
import { Link as MuiLink, Paper, Stack, Typography } from "@mui/material";
import StaticTimeline from "../../../components/StaticTimeline/StaticTimeline";

const timelineItems = [
  "TIHLDE flytte til Akrinn.",
  "Vi går fra HIST til NTNU i 2017. Det var stor usikkerhet i om linjeforeningen kom til å leve videre eller om vi kom til å måtte slå oss sammen med andre linjeforeninger.",
  "Vi gifter oss med Nucleus, linjeforeningen for bioingeniører",
  "TIHLDE ble med i TTS - Trondheim Teknikersamfunn",
];

const Tihlde2017 = () => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      spacing={1}
      paddingTop={"4 rem"}
      borderRadius={0}
    >
      <Paper
        sx={{
          pt: 10,
          px: 5,
          borderRadius: 0,
          minHeight: "100vh",
          width: "100vw",
        }}
      >
        <Typography
          textAlign="left"
          fontWeight={600}
          fontSize={{ xs: 17, md: 35 }}
        >
          Året 2017 for Tihlde
        </Typography>
        <StaticTimeline items={timelineItems} />
      </Paper>
    </Stack>
  );
};

export default Tihlde2017;
