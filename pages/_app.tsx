import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import lightTheme from "../styles/theme/lightTheme";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
  );
}
