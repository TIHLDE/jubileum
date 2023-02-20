import styles from './FactCard.module.css';
import { Card, CardMedia, CardContent, Typography } from "@mui/material"

export default function FactCard() {
    return (
      <Card sx={{ minWidth: 400, maxWidth: 500, borderRadius: 0.2, margin: "1rem", width: 500}}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        />
        <CardContent className={styles.content}>
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