import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

const RidderPage = () => {
  return (
    <div>
      <Box sx={{ backgroundColor: "#001328" }}>
        <Typography
          maxWidth={900}
          variant="h1"
          fontSize="4.125rem"
          //fontWeight="700"
          fontFamily="Oswald, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
          sx={{
            paddingLeft: "16px",
            paddingTop: "theme.spacing(2)",
            margin: 0,
            color: "white",
            wordBreak: "break-word",
            borderBottom: 1,
            borderBlock: 1,
            borderBottomStyle: "solid",
            borderBottomWidth: "4px",
            boxSizing: "border-box",
            display: "block",
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
      </Box>
    </div>
  );
};

export default RidderPage;
