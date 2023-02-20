import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Countdown } from '../components/Countdown/Countdown';
import { Jumbotron } from '../components/Jumbotron/Jumbotron';
import Facts from '../components/FactCard/Facts';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import HistoryIcon from '@mui/icons-material/History';
import EastIcon from '@mui/icons-material/East';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import {
  Button,
  ButtonGroup,
  Link as MuiLink,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  Box,
} from '@mui/material';
import TihldeLogo, { TihldeJubLogo } from '../components/TihldeLogo/TihldeLogo';
import Image from 'next/image';
import { WaveOne, WaveThree } from '../components/Waves/waves';
import Wave from '../components/Wave/wave';
import { MerchItems } from '../components/MerchBox/MerchItems';
import { MerchBox } from '../components/MerchBox/MerchBox';
import { ROUTES } from '../utility/constants/routes';

export default function Home({ data }: { data: any }) {
  const [height, setheight] = useState(100);
  const [width, setwidth] = useState(100);
  useEffect(() => {
    setheight(window.innerHeight);
    setwidth(window.innerWidth);
  }, []);
  return (
    <>
      <Head>
        <title>TIHLDE | Jubileum</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Jumbotron>
          <Grid
            container
            direction='column'
            sx={{ height: '100%', zIndex: 100 }}
          >
            <Grid item xs={9} p={2}>
              <Stack direction='row' mt={'20vh'} height={100} mb={2}>
                <TihldeLogo
                  logoColor='white'
                  size='large'
                  sx={{
                    margin: 0,
                    height: '100%',
                    width: '100%',
                  }}
                />
              </Stack>
              <Typography
                textAlign='center'
                fontWeight={600}
                sx={{
                  width: '100%',
                  px: '3',
                  margin: 'auto',
                }}
              >
                TIHLDE feirer 30 år! Det blir fest, moro, merch, CTF og mye mer!
              </Typography>
              <Countdown />
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
            ></Grid>
            <Grid
              item
              xs={1}
              sx={{
                display: 'flex',
                alignItems: 'end',
                justifyContent: 'center',
              }}
            >
              <IconButton onClick={() => window.scrollTo(0, 550)} title='ned'>
                <KeyboardArrowDownIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Jumbotron>
        <Wave />

        <Paper
          square
          variant='elevation'
          sx={{
            py: 2,
            px: 1,
          }}
        >
          <Grid container sx={{ maxWidth: 500, mx: 'auto' }}>
            <Grid item xs={6} md={4} p={1}>
              <Button
                variant='contained'
                color='primary'
                fullWidth
                startIcon={<CheckroomIcon />}
                component={Link}
                href='/merch'
              >
                Merch
              </Button>
            </Grid>
            <Grid item xs={6} md={4} p={1}>
              <Button
                fullWidth
                startIcon={<HistoryIcon />}
                variant='contained'
                component={Link}
                disabled
                href='https://tihlde.org/toddel/'
              >
                Historie
              </Button>
            </Grid>
            <Grid item xs={6} md={4} p={1}>
              <Button
                fullWidth
                startIcon={<WorkspacePremiumIcon />}
                variant='contained'
                component={Link}
                disabled
                href='https://tihlde.org/toddel/'
              >
                Daljer
              </Button>
            </Grid>
            <Grid item xs={6} md={4} p={1}>
              <Button
                fullWidth
                startIcon={<OpenInNewIcon />}
                variant='contained'
                component={Link}
                href='https://tihlde.org/toddel/'
              >
                Tøddel
              </Button>
            </Grid>
            <Grid item xs={6} md={4} p={1}>
              <Button
                fullWidth
                variant='contained'
                color='primary'
                startIcon={<OpenInNewIcon />}
                component={Link}
                href='https://tihlde.org/'
              >
                Tihlde.org
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Divider />
        <Paper square sx={{ p: 3, position: 'relative' }}>
          <Link href='/merch'>
            <Typography variant='h4' textAlign='center' my={2}>
              Jubileumsmerch ⏳
            </Typography>
          </Link>
          <Grid
            container
            sx={{ maxWidth: 800, mx: 'auto', zIndex: 1, position: 'relative' }}
          >
            {MerchItems.slice(0, 2).map((item) => (
              <Grid item xs={12} md={6} key={item.title}>
                <MerchBox
                  title={item.title}
                  price={item.price}
                  url={item.url}
                  available={item.available}
                />
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              display: 'block',
              width: 'fit-content',
              margin: 'auto',
            }}
          >
            <Button
              endIcon={<EastIcon />}
              variant='contained'
              sx={{
                position: 'relative',
                zIndex: '2',
                mt: 2,
              }}
              href={ROUTES.MERCH}
            >
              Se mer
            </Button>
          </Box>
          <WaveOne sx={{ color: 'four.main', height: '50%' }} />
        </Paper>
        <Divider />
        <Paper square sx={{ p: 3, position: 'relative' }}>
        <Typography variant='h4' textAlign='center' my={2}>
            Fakta
          </Typography>
          <Facts />
        </Paper>
        <Divider />
        <Paper square sx={{ p: 3, position: 'relative' }}>
          <Typography variant='h4' textAlign='center' my={2}>
            Arrangementer 🥳
          </Typography>
          <Card
            variant='outlined'
            sx={{ maxWidth: 400, mx: 'auto', position: 'relative', zIndex: 1 }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image={data.image}
              title='green iguana'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {data.title}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {data.description}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {data.list_count} / {data.limit} påmeldt. Venteliste:{' '}
                {data.waiting_list_count}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                endIcon={<OpenInNewIcon />}
                component={Link}
                href='https://tihlde.org/arrangementer/489/tihlde-30-ar/'
                variant='contained'
              >
                Til påmelding
              </Button>
            </CardActions>
          </Card>

          <WaveThree
            sx={{
              height: '50%',
              color: 'two.main',
              transform: 'flipY',
            }}
          />
        </Paper>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.tihlde.org/events/489/`);
  const data = await res.json();
  return {
    props: { data }, // will be passed to the page component as props
  };
}
