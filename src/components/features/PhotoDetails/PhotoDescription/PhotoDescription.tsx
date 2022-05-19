import { VStack, Heading, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const PhotoDescription = () => {
  const { t } = useTranslation();

  return (
    <VStack alignItems="left" mt="3rem">
      <Heading as="h3" fontSize="sm" textTransform="uppercase">
        {t('photoDescription.title')}
      </Heading>
      <Text fontSize="sm">{t('photoDescription.text')}</Text>
    </VStack>
  );
};
