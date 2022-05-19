import { Flex, Heading, Stack, Badge } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const PhotoKeywords = () => {
  const { t } = useTranslation();

  const keywords = [
    'Nogomet',
    'Italija',
    'Serie A',
    'Genua',
    'Italien',
    'Fussball',
    'Soccer',
  ];

  return (
    <Flex flexDirection="column" mt="2rem">
      <Heading as="h3" fontSize="sm" textTransform="uppercase">
        {t('photoKeywords')}
      </Heading>
      <Stack direction="row" spacing="1rem" mt="1rem">
        {keywords.map((keyword) => (
          <Badge key={keyword} variant="primary">
            {keyword}
          </Badge>
        ))}
      </Stack>
    </Flex>
  );
};
