import { Container, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { SearchBar } from '../src/components/core/SearchBar/SeachBar';
import { PhotoDetails } from '../src/components/features/PhotoDetails/PhotoDetails';
import { PhotoOverview } from '../src/components/features/PhotoOverview/PhotoOverview';
import { Layout } from '../src/components/shared/Layout/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>FotoPortal</title>
        <meta
          name="description"
          content="FotoPortal - web portal za fotografije"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container as="main" maxWidth="container.xl">
        <SearchBar />
        <PhotoOverview />
        <PhotoDetails />
      </Container>

      <footer></footer>
    </Layout>
  );
};

export default Home;
