import { Box, Paper, Stack, Link as MuiLink } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Paper
      sx={{
        p: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      square
    >
      <Grid container spacing={5} sx={{ maxWidth: 1000 }} alignItems="center">
        <Grid item xs={12} md={4}>
          <Typography>TIHLDE feirer 30 år! 🥳</Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Stack
            direction="row"
            gap={1}
            alignItems="center"
            component={Link}
            href="/"
          >
            <MuiLink color="#ffffff" fontWeight={600}>
              @Tihldejubileum
            </MuiLink>
            <Image
              alt="instagram"
              src="/icons/instagram.svg"
              width={35}
              height={35}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do minim
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Footer;
