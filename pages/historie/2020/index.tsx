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
  List,
  ListItem,
} from "@mui/material";

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
        }}
      >
        <Typography textAlign="left" fontWeight={600}>
          Året 2020 for Tihlde
        </Typography>
        <List></List>
      </Paper>
    </Stack>
  );
};

export default Tihlde2020;
