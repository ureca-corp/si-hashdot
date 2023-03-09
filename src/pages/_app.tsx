import { Layout } from "@/common/components/Layout";
import { findTheme, ThemeTypes } from "@/common/theme/customTheme";
import "@/common/theme/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={findTheme(ThemeTypes.Light)}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
