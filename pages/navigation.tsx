import type { NextPage } from 'next';
import { NextHead } from '../src/components/shared/NextHead/NextHead';
import { Flex, Icon, Heading, useColorModeValue } from '@chakra-ui/react';
import { MdConstruction } from 'react-icons/md';
import { Layout } from '../src/components/shared/Layout/Layout';
import { LayoutMain } from '../src/components/shared/LayoutMain/LayoutMain';

const Navigation: NextPage = () => {
  const constructionColor = useColorModeValue('brand.200', 'accent.50');

  return (
    <Layout>
      <NextHead
        title="FotoPortal | Navigacija"
        description="FotoPortal - web portal za fotografije"
      />
      <LayoutMain>
        <Flex
          height="100vh"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
          color={constructionColor}
        >
          <Icon as={MdConstruction} w={150} h={150} />
          <Heading>Under Construction...</Heading>
        </Flex>
      </LayoutMain>
    </Layout>
  );
};

export default Navigation;
