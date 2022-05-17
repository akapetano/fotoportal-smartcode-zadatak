import { Container, Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { SearchBar } from '../src/components/core/SearchBar/SeachBar';
import { PhotoDetails } from '../src/components/features/PhotoDetails/PhotoDetails';
import { PhotoOverview } from '../src/components/features/PhotoOverview/PhotoOverview';
import { PhotoGallery } from '../src/components/features/PhotoGallery/PhotoGallery';
import { Layout } from '../src/components/shared/Layout/Layout';
import { LayoutMain } from '../src/components/shared/LayoutMain/LayoutMain';

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

      <LayoutMain>
        <SearchBar />
        <PhotoOverview />
        <PhotoDetails />
        <PhotoGallery />
      </LayoutMain>

      <footer></footer>
    </Layout>
  );
};

export default Home;
