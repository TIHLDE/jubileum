import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import lightTheme from "../styles/theme/lightTheme";
import { Header } from "../components/Header/Header";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Header />
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
