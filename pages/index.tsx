import type { NextPage } from 'next';
import { NextHead } from '../src/components/shared/NextHead/NextHead';
import { SearchBar } from '../src/components/core/SearchBar/SeachBar';
import { PhotoDetails } from '../src/components/features/PhotoDetails/PhotoDetails';
import { PhotoOverview } from '../src/components/features/PhotoOverview/PhotoOverview';
import { PhotoGallery } from '../src/components/features/PhotoGallery/PhotoGallery';
import { Layout } from '../src/components/shared/Layout/Layout';
import { LayoutMain } from '../src/components/shared/LayoutMain/LayoutMain';

const Home: NextPage = () => {
  return (
    <Layout>
      <NextHead
        title="FotoPortal"
        description="FotoPortal - web portal za fotografije"
      />
      <LayoutMain>
        <SearchBar />
        <PhotoOverview />
        <PhotoDetails />
        <PhotoGallery />
      </LayoutMain>
    </Layout>
  );
};

export default Home;
