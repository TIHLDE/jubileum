import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import styles from './Gallery.module.css';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { MerchItems } from '../MerchBox/MerchItems';
import { Grid } from '@mui/material';
import { MerchBox } from '../MerchBox/MerchBox';

export function Gallery() {
  return (
    <Box
      sx={{
        width: '70vw',
        margin: 'auto',
      }}
    >
      <Grid
        container
        sx={{
          mx: 'auto',
          position: 'relative',
        }}
      >
        {MerchItems.map((item) => (
          <Grid key={item.title} xs={12} md={6} lg={4}>
            <MerchBox title={item.title} url={item.url} price={item.price} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}