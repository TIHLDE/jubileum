import * as React from "react";
import StaticTimeline from "../../../components/StaticTimeline/StaticTimeline";
import { Link as MuiLink, Paper, Stack, Typography } from "@mui/material";

const timelineItems = [
  "Kontoret på Kalvskinnet ble pusset opp",
  "17.mai frokost og julegrøt ble innført som faste årlige arrangementer",
  "Julebord ble til galla",
  "Vi begynte Åretradisjonen",
  "TIHLDE sverdet ble kjøpt",
  "Generalforsamling høst - PR (nå Promo) ble til en undergruppe.",
  "Generalforsamling høst - De Eldstes Raad blir etablert. Dette er tidligere medlemmer av hovedstyret, samt tidligere medlemmer av Drift. Raadet bistår HS med råd og kunnskap ved behov",
];
const Tihlde2011 = () => {
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
        }}
      >
        <Typography
          fontSize={{ xs: 17, md: 35 }}
          textAlign="left"
          fontWeight={600}
        >
          Året 2011 for Tihlde
        </Typography>
        <StaticTimeline items={timelineItems} />
      </Paper>
    </Stack>
  );
};

export default Tihlde2011;
