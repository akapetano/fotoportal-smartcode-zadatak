import { Flex, Heading, Stack, Badge } from '@chakra-ui/react';

export const PhotoKeywords = () => {
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
        Ključne riječi
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
