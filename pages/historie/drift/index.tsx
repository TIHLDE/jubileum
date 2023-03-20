import * as React from "react";
import { Jumbotron } from "../../../components/Jumbotron/Jumbotron";
import HistoryIcon from "@mui/icons-material/History";
import Logo from "../../../components/Logo";
import Head from "next/head";

import {
  Button,
  Link as MuiLink,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
  ImageList,
  ImageListItem,
} from "@mui/material";

const Drift = () => {
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
          Mer om Tihlde Drift
        </Typography>
        <Typography fontSize={{ xs: 15, md: 30 }} gutterBottom>
          Drift var en gjeng som ønsket å drifte en studenttjener tilknyttet
          datidens EDB-avdeling ved Trondheim Ingeniørhøgskole (TIH). I dag
          består Drift av 9 medlemmer som har ansvaret for daglige gjøremål
          tilknyttet TIHLDEs datasystemer. Hovedtjenestene som leveres er
          medlemskonto på studenttjeneren “Colargol” for studenter og ansatte
          ved NTNU, organisasjonskontoer på “Balthazar” for organisasjoner
          tilknyttet NTNU, og virtuelle maskiner for TIHLDEs medlemmer på
          VMware-parken Nerdvana. I tillegg driftes det en rekke
          støttetjenester.
        </Typography>
        <Typography fontSize={{ xs: 15, md: 30 }} gutterBottom>
          Tidligere disponerte Drift et eget kontor i 2. etg. i Brygghuset
          (Kalvskinnet), som våren 2008 ble pusset skikkelig opp. Oppussingen
          medførte at vi fikk plass til flere kontorplasser, og fra og med
          høsten 2008 økte Drift til 9 medlemmer, for senere å ta inn 3
          medlemmer hvert år fra første klasse for å opprettholde kontinuitet i
          arbeidet.
        </Typography>
        <Typography fontSize={{ xs: 15, md: 30 }} gutterBottom>
          Januar 2017 ble alle ingeniørlinjene flyttet sammen i Teknologibygget,
          som medførte at TIHLDE Drift mistet sitt kontor i slutten av november
          2016. Dessverre for oss tok ikke NTNU hensyn til linjeforeninger og
          studentforeninger når Teknologibygget ble utarbeidet, så ingen
          linjeforeninger fikk tildelt areal i det nye bygget. Vi var heldige og
          fikk tildelt et rom i Studenthuset i Sverresgate 14, og vi har nå
          kontor der. Medlemmene i Drift opparbeider seg med årene en betydelig
          kompetanse innenfor UNIX, Linux spesielt samt nettverksoppsett/drift.
        </Typography>
      </Paper>
    </Stack>
  );
};

export default Drift;
