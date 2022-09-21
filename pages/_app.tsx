import '../styles/globals.scss'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import { useEffect } from 'react';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  // const router = useRouter();
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>

    </>
  )
}

export default MyApp
