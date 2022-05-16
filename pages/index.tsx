import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <Box bg="white">
      <Head>
        <title>FotoPortal</title>
        <meta
          name="description"
          content="FotoPortal - web portal za fotografije"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>FotoPortal - web portal za fotografije</h1>
      </main>

      <footer></footer>
    </Box>
  );
};

export default Home;
