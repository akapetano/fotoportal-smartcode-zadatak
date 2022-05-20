import { VStack, Heading, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const PhotoDescription = () => {
  const { t } = useTranslation();

  return (
    <VStack alignItems="left" mt="3rem">
      <Heading as="h3" fontSize="sm" textTransform="uppercase">
        {t('photoDescription.title')}
      </Heading>
      <Text fontSize="sm" width={{ base: '80vw', md: 'auto' }}>
        {t('photoDescription.text')}
      </Text>
    </VStack>
  );
};
