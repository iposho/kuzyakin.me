import 'styles/globals.scss';

import appConfig from 'config/appConfig';
import Head from 'next/head';
import React from 'react';

function MyApp({ Component, pageProps }) {
  if (process.env.NODE_ENV === 'development') {
    /* eslint-disable */
    console.log(`${appConfig.name} app starting`);
    console.log(`v. ${appConfig.version}`);
    /* eslint-enable */
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content={appConfig.author} />
        <meta name="description" content={appConfig.description} />
        <meta property="og:image" content="/images/avatar.png" />
        <link rel="icon" href="/favicon.ico" />
        <title>{appConfig.name}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
