import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import styles from './Gallery.module.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';

export function GalleryV3() {
  const matches = useMediaQuery('(min-width:79px)');
  return (
    <div className={styles.wrapper}>
      <div className={styles.button_wrapper}>
        <Button fullWidth variant="contained" href="#contained-buttons">BESTILL</Button>
      </div>
      <Box sx={{ width: "100%", height: "auto", overflowX: "hidden", overflowY: 'hidden'}}>
        <ImageList className={styles.image_list} variant="masonry" cols={matches ? 4 : 1} gap={30}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} className={styles.gallery__image}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar sx={{fontSize: "100px"}} className={styles.image_info} position="bottom" title={item.title} subtitle={item.price} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </div>
  );
}

const itemData = [
  {
    img: 'https://raw.githubusercontent.com/TIHLDE/Kvark/dev/public/browser-icons/cover-image.jpg',
    title: 'Genser',
    author: 'swabdesign',
    price: '69,-',
  },
  {
    img: 'https://raw.githubusercontent.com/TIHLDE/Kvark/dev/public/browser-icons/cover-image.jpg',
    title: 'Lue',
    author: 'Pavel Nekoranec',
    price: '69,-',
  },
  {
    img: 'https://raw.githubusercontent.com/TIHLDE/Kvark/dev/public/browser-icons/cover-image.jpg',
    title: 'Bøff',
    author: 'Charles Deluvio',
    price: '69,-',
  },
  {
    img: 'https://raw.githubusercontent.com/TIHLDE/Kvark/dev/public/browser-icons/cover-image.jpg',
    title: 'Jakke',
    author: 'Christian Mackie',
    price: '69,-',
  },
  {
    img: 'https://raw.githubusercontent.com/TIHLDE/Kvark/dev/public/browser-icons/cover-image.jpg',
    title: 'Genser',
    author: 'Darren Richardson',
    price: '69,-',
  },
  {
    img: 'https://raw.githubusercontent.com/TIHLDE/Kvark/dev/public/browser-icons/cover-image.jpg',
    title: 'Crewneck',
    author: 'Taylor Simpson',
    price: '69,-',
  },
  {
    img: 'https://raw.githubusercontent.com/TIHLDE/Kvark/dev/public/browser-icons/cover-image.jpg',
    title: 'Jakke',
    author: 'Ben Kolde',
    price: '69,-',
  },
  {
    img: 'https://raw.githubusercontent.com/TIHLDE/Kvark/dev/public/browser-icons/cover-image.jpg',
    title: 'T-skjorte',
    author: 'Philipp Berndt',
    price: '69,-',
  },
  {
    img: 'https://raw.githubusercontent.com/TIHLDE/Kvark/dev/public/browser-icons/cover-image.jpg',
    title: 'T-skjorte',
    author: 'Jen P.',
    price: '69,-',
  },
  {
    img: 'https://raw.githubusercontent.com/TIHLDE/Kvark/dev/public/browser-icons/cover-image.jpg',
    title: 'Crewneck',
    author: 'Douglas Sheppard',
    price: '69,-',
  },
  {
    img: 'https://raw.githubusercontent.com/TIHLDE/Kvark/dev/public/browser-icons/cover-image.jpg',
    title: 'Sko',
    author: 'Fi Bell',
    price: '69,-',
  },
  {
    img: 'https://raw.githubusercontent.com/TIHLDE/Kvark/dev/public/browser-icons/cover-image.jpg',
    title: 'Genser',
    author: 'Hutomo Abrianto',
    price: '69,-',
  },
];