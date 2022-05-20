import { Flex, Stack } from '@chakra-ui/react';
import { PhotoDescription } from './PhotoDescription/PhotoDescription';
import { PhotoKeywords } from './PhotoKeywords/PhotoKeywords';
import { PhotoInfoBlock } from './PhotoInfoBlock/PhotoInfoBlock';
import { useTranslation } from 'react-i18next';

export const PhotoDetails = () => {
  const { t } = useTranslation();

  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      width={{ base: '80vw', md: 'auto' }}
    >
      <Flex
        p={{ base: '1rem', md: '3rem 2rem' }}
        w="70vw"
        flexDirection="column"
      >
        <Stack
          spacing={[6, 12, 24, 64, 64]}
          direction={{ base: 'column', md: 'row' }}
        >
          <PhotoInfoBlock heading="Galerija" text="Stock" />
          <PhotoInfoBlock heading="Autor" text="Ivan Horvat" />
          <PhotoInfoBlock heading="Agencija" text="Smart Code" />
        </Stack>
        <PhotoDescription />
        <PhotoKeywords />
      </Flex>
      <Stack
        p={{ base: '0 1rem 1rem', md: '0 0 3rem 3rem' }}
        w={{ base: '80vw', md: '30vw' }}
        flexDirection="column"
        spacing="1.5rem"
      >
        <PhotoInfoBlock
          heading={t('annotations.title')}
          text={t('annotations.annotation1')}
        />
        <PhotoInfoBlock
          heading={t('annotations.title')}
          text={t('annotations.annotation2')}
        />
        <PhotoInfoBlock
          heading={t('annotations.title')}
          text={t('annotations.annotation3')}
        />
      </Stack>
    </Flex>
  );
};
