import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import styles from './Gallery.module.css';
import Button from '@mui/material/Button';
import Link from 'next/link';

export function Gallery() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.button_wrapper}>
        <Button
          component={Link}
          href='https://neartail.com/no/tihldejubileum'
          fullWidth
          variant='contained'
        >
          BESTILL
        </Button>
      </div>
      <Box
        className={styles.image_box}
        sx={{
          width: 'auto',
          height: 'auto',
          overflowX: 'hidden',
          overflowY: 'hidden',
        }}
      >
        <ImageList
          sx={{
            columnCount: {
              sm: '1 !important',
              md: '2 !important',
              lg: '4 !important',
            },
            overflow: 'hidden',
          }}
          className={styles.image_list}
          variant='masonry'
          gap={10}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img} className={styles.gallery__image}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading='lazy'
              />
              <ImageListItemBar
                sx={{ fontSize: '100px' }}
                className={styles.image_info}
                position='bottom'
                title={item.title}
                subtitle={item.price}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
}

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
];
