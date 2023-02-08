import { Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";

const RidderPage = () => {
  return (
    <div>
      <Typography
        maxWidth={900}
        variant="h1"
        fontSize="3rem"
        fontWeight="700"
        fontFamily="Oswald, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
        sx={{
          paddingLeft: "16px",
          paddingTop: "theme.spacing(2)",
          margin: 0,
        }}
      >
        Riddere
      </Typography>
      <Paper
        width="auto"
        component={Grid}
        container
        elevation={24}
        mx="auto"
        sx={{
          my: 2,
          marginLeft: "16px",
          marginRight: "16px",
          p: 3,
          border: "1px solid black",
        }}
        variant="outlined"
      >
        <Grid item xs={12} md={8}>
          <Typography sx={{ wordBreak: "break-word" }}>
            Riddere awdawsssssssssssssssssawdadawnsnsnsn
            hhhhhhhhnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnslkcsdckldncklcndcklzdncdklcndcklzdnczdklnc
            <br />
            awdad
          </Typography>
        </Grid>
        <Grid item xs={10} md={4} position="relative" sx={{ minHeight: 300 }}>
          <Image
            style={{ objectFit: "cover", borderRadius: 25 }}
            src="/stockman.png"
            alt="bilde av kajnwdwdjnkaw"
            fill
          />
        </Grid>
      </Paper>
      <Paper
        width="auto"
        component={Grid}
        container
        elevation={24}
        mx="auto"
        sx={{
          my: 2,
          marginLeft: "16px",
          marginRight: "16px",
          p: 3,
          border: "1px solid black",
        }}
        variant="outlined"
      >
        <Grid item xs={12} md={8}>
          <Typography sx={{ wordBreak: "break-word" }}>
            Riddere awdawsssssssssssssssssawdadawnsnsnsn
            hhhhhhhhnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnslkcsdckldncklcndcklzdncdklcndcklzdnczdklnc
            <br />
            awdad
          </Typography>
        </Grid>
        <Grid item xs={10} md={4} position="relative" sx={{ minHeight: 300 }}>
          <Image
            style={{ objectFit: "cover", borderRadius: 25 }}
            src="/stockman.png"
            alt="bilde av kajnwdwdjnkaw"
            fill
          />
        </Grid>
      </Paper>
    </div>
  );
};

export default RidderPage;
