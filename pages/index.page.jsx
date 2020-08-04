import React from 'react';

import Head from 'next/head';

import TimerContainer from '../components/containers/TimerContainer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TimerContainer />
    </>
  );
}
