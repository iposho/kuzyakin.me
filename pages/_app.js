import React from 'react';
import Head from 'next/head';

import { APP_NAME } from '../config/constants';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content={APP_NAME} />
        <meta name="description" content="Personal website" />
        <meta property="og:image" content="/avatar.png" />
        <link rel="icon" href="/favicon.ico" />
        <title>{APP_NAME}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
