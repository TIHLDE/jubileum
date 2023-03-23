import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Countdown } from '../components/Countdown/Countdown';
import { Jumbotron } from '../components/Jumbotron/Jumbotron';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import HistoryIcon from '@mui/icons-material/History';
import EastIcon from '@mui/icons-material/East';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import {
  Button,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material';
import { WaveOne } from '../components/Waves/waves';
import Wave from '../components/Wave/wave';
import { MerchItems } from '../components/MerchBox/MerchItems';
import { MerchBox } from '../components/MerchBox/MerchBox';
import { ROUTES } from '../utility/constants/routes';
import Logo from '../components/Logo';
import { Event } from './api/events';
import EventCard, {
  EventCardsLoading,
} from '../components/EventCard/EventCard';

export default function Home() {
  const lgBreakpoint = useMediaQuery('(min-width:800px)');
  const smBreakpoint = useMediaQuery('(min-width:500px)');
  const [events, setEvents] = useState<Event[]>([]);

  let currentDay: null | number = null;

  const dayRow = function dayRow(date: Date) {
    const thisDay = new Date(date).getDay();
    if (currentDay === thisDay) {
      return <></>;
    }
    currentDay = thisDay;
    return (
      <Grid item xs={12}>
        <Typography variant='h4' textAlign='center' sx={{ py: 2 }}>
          {date.toLocaleDateString('no', { day: '2-digit', month: 'long' })}
        </Typography>
        <Divider />
      </Grid>
    );
  };

  useEffect(() => {
    fetch('/api/events')
      .then((resp) => resp.json())
      .then((data) => setEvents(data.events));
  }, []);

  var imageListWidth = 2;
  const theme = useTheme();
  if (lgBreakpoint) {
    imageListWidth = 2;
  } else if (smBreakpoint) {
    imageListWidth = 2;
  } else {
    imageListWidth = 1;
  }

  return (
    <>
      <Head>
        <title>TIHLDE | Jubileum</title>
        <meta
          name='description'
          content='Tihlde feirer 30 år - Se merch, arrangementer og mer!'
        />
        <link rel='canonical' href='https://jubileum.tihlde.org/' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Jumbotron>
          <Stack
            alignItems='center'
            justifyContent='center'
            spacing={1}
            sx={{ height: '80vh', width: '100%', padding: 3 }}
          >
            <Logo sx={{ width: '100%', maxWidth: '25rem' }} />
            <Box>
              <Typography textAlign='center' fontWeight={600}>
                TIHLDE feirer 30 år! Det blir fest, moro, merch, CTF og mye mer!
              </Typography>
            </Box>
            <Box>
              <Countdown />
            </Box>
          </Stack>
        </Jumbotron>
        <Wave />

        <Paper
          square
          variant='elevation'
          sx={{
            py: 3,
            px: 1,
          }}
        >
          <Grid
            container
            columns={10}
            sx={{ maxWidth: { xs: '60vw', md: '70vw' }, mx: 'auto' }}
            gap={{ xs: 1, md: 0 }}
          >
            {Buttons.map((item) => (
              <Grid item={true} key={item.title} xs={10} md={5} lg={2} p={1}>
                <Button
                  startIcon={item.startIcon}
                  fullWidth
                  component={Link}
                  href={item.href}
                  variant={item.variant}
                  color={item.color}
                  disabled={item.disabled}
                  target={item.target}
                >
                  {item.title}
                </Button>
              </Grid>
            ))}
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
        <Paper square sx={{ position: 'relative' }}>
          <Typography variant='h4' textAlign='center' py={2} pt={4}>
            Arrangementer 🥳
          </Typography>
          <Grid container sx={{ maxWidth: 1000, mx: 'auto' }} rowGap={2}>
            {events.length === 0 && <EventCardsLoading />}
            {events.map((event, i) => (
              <React.Fragment key={event.id}>
                <>
                  {dayRow(new Date(event.start_date))}
                  <Grid xs={12} md={6}>
                    <EventCard
                      key={i}
                      title={event.title}
                      description={event.description}
                      image={event.image}
                      limit={event.limit}
                      id={event.id}
                      list_count={event.list_count}
                      waiting_list_count={event.waiting_list_count}
                    />
                  </Grid>
                </>
              </React.Fragment>
            ))}
          </Grid>
        </Paper>
        <Paper>
          <Typography variant='h4' textAlign='center' py={2}>
              Flagg?
              CTF 🚩
            </Typography>
            <Typography textAlign='center' py={2}>
            11111110110111100110001111111
10000010110100000111101000001
10111010101001000001101011101
10111010001011100110001011101
10111010110010000011101011101
10000010000101001100001000001
11111110101010101010101111111
00000000011111100001000000000
10011111101000100101010010111
00100001001000111011010011100
10101010110001110110100101000
01111001101000011100100111011
11110010000100111011011000011
00100001000010011000101011001
00000110010011010111100000101
10111000011100011000011011101
00110011101101010011100100001
11100000101100010101000010000
11100011111100110101111000001
11011101110111111011101111101
11100111100010110110111110101
00000000110111011101100011100
11111110110010010111101010100
10000010101010111100100011000
10111010110101110011111111010
10111010101101110110010101101
10111010011110011000010010111
10000010010110010001001100101
11111110101110011010100011000
 </Typography>

        </Paper>
      </main>
    </>
  );
}

type Button = {
  href: string;
  title: string;
  variant: 'contained' | 'outlined' | 'text';
  disabled: true | false;
  color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
  startIcon?: React.ReactNode;
  target?: '_blank' | 'unset' | '';
};

export const Buttons: Array<Button> = [
  {
    title: 'Merch',
    href: '/merch',
    variant: 'contained',
    disabled: false,
    color: 'primary',
    startIcon: <CheckroomIcon />,
    target: 'unset',
  },
  {
    title: 'Tøddel',
    href: 'https://tihlde.org/toddel/',
    variant: 'contained',
    disabled: false,
    color: 'primary',
    startIcon: <OpenInNewIcon />,
    target: '_blank',
  },
  {
    title: 'Tihlde.org',
    href: 'https://tihlde.org/toddel/',
    variant: 'contained',
    disabled: false,
    color: 'primary',
    startIcon: <OpenInNewIcon />,
    target: '_blank',
  },
  {
    title: 'Historie',
    href: '/historie',
    variant: 'contained',
    disabled: false,
    color: 'primary',
    startIcon: <HistoryIcon />,
    target: '',
  },
  {
    title: 'Daljer',
    href: 'https://tihlde.org/toddel/',
    variant: 'contained',
    disabled: true,
    color: 'primary',
    startIcon: <WorkspacePremiumIcon />,
    target: 'unset',
  },
];
