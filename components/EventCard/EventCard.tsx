import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { Event } from '../../pages/api/events';
import ReactMarkdown from 'react-markdown';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export type EventCardProps = Pick<
  Event,
  | 'id'
  | 'image'
  | 'title'
  | 'limit'
  | 'list_count'
  | 'waiting_list_count'
  | 'description'
>;

const EventCard: React.FC<EventCardProps> = ({
  id,
  image,
  title,
  limit,
  list_count,
  waiting_list_count,
  description,
}) => {
  return (
    <Card
      variant='outlined'
      sx={{
        m: 1,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <span>
      <CardMedia sx={{ height: 140 }} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant='h5'>
          {title}
        </Typography>
        <ReactMarkdown>{description.substring(0, 150) + ' ...'}</ReactMarkdown>

        <Typography variant='body2' color='text.secondary'>
          {list_count} / {limit} påmeldt. Venteliste: {waiting_list_count}
        </Typography>
      </CardContent>
      </span>
      <CardActions sx={{justifyContent: "center"}}>
        <Button
          endIcon={<OpenInNewIcon />}
          component={Link}
          href={`https://www.tihlde.org/arrangementer/${id}`}
          variant='contained'
        >
          Til påmelding
        </Button>
      </CardActions>
    </Card>
  );
};

export const EventCardsLoading: React.FC = () => {
  return (
    <>
      <Grid item xs={12} md={6}>
        <Skeleton sx={{ m: 2 }} width='100%' height={200} variant='rounded' />
      </Grid>
      <Grid item xs={12} md={6}>
        <Skeleton sx={{ m: 2 }} width='100%' height={200} variant='rounded' />
      </Grid>
      <Grid item xs={12} md={6}>
        <Skeleton sx={{ m: 2 }} width='100%' height={200} variant='rounded' />
      </Grid>
      <Grid item xs={12} md={6}>
        <Skeleton sx={{ m: 2 }} width='100%' height={200} variant='rounded' />
      </Grid>
      <Grid item xs={12} md={6}>
        <Skeleton sx={{ m: 2 }} width='100%' height={200} variant='rounded' />
      </Grid>
    </>
  );
};

export default EventCard;
