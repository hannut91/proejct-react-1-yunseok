import React from 'react';

import Head from 'next/head';

import Timer from '../components/presentational/Timer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Timer />
    </div>
  );
}
