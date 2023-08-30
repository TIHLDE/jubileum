import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import styles from './Gallery.module.css';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { MerchItems } from '../MerchBox/MerchItems';
import { Grid, useTheme, Typography } from '@mui/material';
import { MerchBox } from '../MerchBox/MerchBox';

interface GalleryProps {
  items: typeof MerchItems;
}

export function Gallery({ items }: GalleryProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: '90vw',
        margin: 'auto',
        [theme.breakpoints.down('lg')]: {
          width: '90vw',
        },
        [theme.breakpoints.up('xl')]: {
          width: '50vw',
        },
      }}
    >
      <Grid
        container
        sx={{
          mx: 'auto',
          position: 'relative',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        {items.length ? (
          items.map((item) => (
            <Grid item={true} key={item.title} xs={12} md={6} lg={4}>
              <MerchBox
                title={item.title}
                url={item.url}
                price={item.price}
                available={item.available}
              />
            </Grid>
          ))
        ) : (
          <Typography>Det er dessverre ikke noe merch igjen 🫣</Typography>
        )}
      </Grid>
    </Box>
  );
}