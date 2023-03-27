import * as React from "react";
import StaticTimeline from "../../../components/StaticTimeline/StaticTimeline";

import { Link as MuiLink, Paper, Stack, Typography } from "@mui/material";

const timelineItems = [
  "Januar, vi flytter til Gløshaugen",
  "Januar, den store innflyttningsfesten på A-blokka med Abakus og Online til ære for TIHLDE",
  "Vi begynner å gå fra et par bedriftpresentasjoner i semesteret, til et kurs og en bedriftpresentasjon i uken",
  "Drift har ikke lenger ansvar for mailinglistene, og vi går over til Google Workspace",
  "Immeball september, skiller oss med Nucleus på immeballet",
  "Generalforsamling høsten 2020, dagens TIHLDE logo godkjennes på generalforsamling. Det blir vedtatt at medlemmer av Drift ikke lenger automatisk blir en del av De Eldstes Raad.",
];
const Tihlde2020 = () => {
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
          Året 2020 for Tihlde
        </Typography>
        <StaticTimeline items={timelineItems} />
      </Paper>
    </Stack>
  );
};

export default Tihlde2020;
