import { Grid, Heading, Stack, Badge, Box, GridItem } from '@chakra-ui/react';
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
    <Box mt="1rem">
      <Heading as="h3" fontSize="sm" textTransform="uppercase">
        {t('photoKeywords')}
      </Heading>
      <Grid
        templateColumns={{ base: 'repeat(3, 1fr)', md: 'repeat(7, 1fr)' }}
        templateRows="repeat(2, 1fr)"
        gap={2}
        mt="0.5rem"
        maxWidth="container.sm"
      >
        {keywords.map((keyword) => (
          <GridItem key={keyword}>
            <Badge variant="primary" w="5rem">
              {keyword}
            </Badge>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
