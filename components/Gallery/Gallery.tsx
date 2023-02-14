import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import styles from './Gallery.module.css';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Card from '@mui/material/Card';
import { CardContent, Grid, Typography } from '@mui/material';
import { WaveOne } from '../Waves/waves';

export function Gallery() {
  return (
    <React.Fragment>
      <Grid
        container
        spacing={2}
        sx={{
          zIndex: 3,
          position: 'relative',
          margin: 'auto',
          width: '60vw',
          height: 'fit-content',
        }}
      >
        {itemData.map((item) => (
          <Grid key={item.img} sm={12} md={6} lg={3} p={1}>
            <MerchEntry
              key={item.img}
              title={item.title}
              url={item.img}
              price={item.price}
            />
          </Grid>
          /*             <ImageListItem key={item.img} className={styles.gallery__image}>
              <Image
                width={248}
                height={500}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title + ''}
                loading={'lazy'}
                style={{ height: '100%' }}
              />
              <ImageListItemBar
                sx={{ fontSize: '100px' }}
                className={styles.image_info}
                position='bottom'
                title={item.title}
                subtitle={item.price}
              />
            </ImageListItem> */
        ))}
      </Grid>
    </React.Fragment>
  );
}

interface CardProps {
  key: string;
  title: string;
  url: string;
  price: string;
}

const MerchEntry: React.FC<CardProps> = ({ key, title, url, price }) => {
  return (
    <Card
      key={key}
      variant='outlined'
      sx={{
        position: 'relative',
        objectFit: 'contain',
        m: 1,
      }}
    >
      <CardContent sx={{ position: 'relative', height: 300 }}>
        <Image
          src={url}
          alt={url}
          width={248}
          height={300}
          style={{
            height: '300px',
            width: 'auto',
            margin: 'auto',
            display: 'block',
          }}
        />
      </CardContent>

      <CardContent>
        <Typography width={'100%'} variant='h5' textAlign={'left'} gutterBottom>
          {title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {price}
        </Typography>
      </CardContent>
    </Card>
  );
};

const itemData = [
  {
    img: '/hettegenser.png',
    title: 'Genser',
    author: 'swabdesign',
    price: '69,-',
  },
  {
    img: '/hettegenser.png',
    title: 'Genser',
    author: 'swabdesign',
    price: '69,-',
  },
  {
    img: '/hettegenser.png',
    title: 'Genser',
    author: 'swabdesign',
    price: '69,-',
  },
  {
    img: '/hettegenser.png',
    title: 'Lue',
    author: 'Pavel Nekoranec',
    price: '69,-',
  },
  {
    img: '/hettegenser.png',
    title: 'Lue',
    author: 'Pavel Nekoranec',
    price: '69,-',
  },
  {
    img: '/hettegenser.png',
    title: 'Lue',
    author: 'Pavel Nekoranec',
    price: '69,-',
  },
  {
    img: '/hettegenser.png',
    title: 'Lue',
    author: 'Pavel Nekoranec',
    price: '69,-',
  },
];