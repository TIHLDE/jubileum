import { Paper, Stack, Link as MuiLink } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Paper
      variant="outlined"
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
          <Stack direction="row" gap={1} alignItems="center">
            <MuiLink
              component={Link}
              href="https://instagram.com/@tihldejubileum"
              color="#ffffff"
              fontWeight={600}
            >
              @tihldejubileum
            </MuiLink>
            <Image
              alt="instagram"
              src="/icons/instagram.svg"
              width={35}
              height={35}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={3}>
          <Typography>Laget med kjærlighet av TIHLDE Index ❤️</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Footer;
