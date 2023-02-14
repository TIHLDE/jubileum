import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

type MerchBoxInterface = {
  title: string;
  price: string;
  url: string;
};

export const MerchBox: React.FC<MerchBoxInterface> = ({
  title,
  price,
  url,
}) => {
  return (
    <Card
      variant='outlined'
      sx={{
        position: 'relative',
        objectFit: 'contain',
        m: 1,
      }}
    >
      <CardMedia
        sx={{ height: 200, backgroundColor: '#fff' }}
        image={url}
        title={title}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
          sx={{
            whiteSpace: 'nowrap',
            paddingRight: '2rem',
            overflow: 'hidden',
          }}
        >
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {price}kr
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          variant='contained'
          component={Link}
          href={'https://neartail.com/no/tihldejubileum'}
          endIcon={<OpenInNewIcon />}
        >
          Bestill
        </Button>
      </CardActions>
    </Card>
  );
};