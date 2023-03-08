import CardContent from '@mui/material/CardContent';
import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const ScrollyCard = ({ ...props }) => {
  return (
    <Card variant='outlined'>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Vi kan til og med
        </Typography>
        <Typography variant='h5' sx={{ mb: 1.5 }}>
          Ha sånne kule kort
        </Typography>
        <Typography variant='body2'>
          Det kan være kult, kanskje? Flere kan plasseres ved siden av hverandre
          <br />i en wrapper som scroller sidelengs når man blar ned
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained'>Les mer</Button>
      </CardActions>
    </Card>
  );
};

export default ScrollyCard;
