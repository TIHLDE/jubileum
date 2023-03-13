import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Header } from "../components/Header/Header";
import dark from "../styles/theme/dark";
import Footer from "../components/Footer";
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dark}>
      <Header />
      <CssBaseline />
      <Component {...pageProps} />
      <Analytics />
      <Footer />
    </ThemeProvider>
  );
}
