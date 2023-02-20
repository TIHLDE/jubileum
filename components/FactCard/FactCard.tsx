import { Card, CardMedia, CardContent, Typography } from "@mui/material"

export default function FactCard() {
    return (
      <Card sx={{ minWidth: 400, maxWidth: 500, borderRadius: 0.2, margin: "1rem", width: 500, backgroundColor:'rgba(14, 36, 59, 1)' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent sx={{ height: 250, padding:'2.5rem' }}>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </Card>
    );
  }