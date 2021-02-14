import 'styles/globals.scss';

import { APP_NAME } from 'config/constants';
import Head from 'next/head';
import { version } from 'package.json';
import React from 'react';

function MyApp({ Component, pageProps }) {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log(`${APP_NAME} app starting`);
    // eslint-disable-next-line no-console
    console.log(`v. ${version}`);
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content={APP_NAME} />
        <meta name="description" content="Personal website" />
        <meta property="og:image" content="/images/avatar.png" />
        <link rel="icon" href="/favicon.ico" />
        <title>{APP_NAME}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
