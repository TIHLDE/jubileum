import { Grid, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";

const RidderPage = () => {
  return (
    <div>
      <Paper
        gap={0}
        maxWidth={800}
        component={Grid}
        container
        justifyContent="space-between"
        elevation={24}
        sx={{ m: 2, p: 3, border: "1px solid black", overflow: "hidden" }}
        variant="outlined"
      >
        <Grid item xs={6}>
          <Typography>
            Riddere awdawdawgggggvvvvvvvvvssssssssssssss
            <br />
            awdad
          </Typography>
        </Grid>
        <Grid item xs={6} padding={2}>
          <Image
            style={{ objectFit: "contain" }}
            src="/stockman.png"
            alt="bilde av kajnwdwdjnkaw"
            width={500}
            height={500}
          ></Image>
        </Grid>
      </Paper>
    </div>
  );
};

export default RidderPage;
