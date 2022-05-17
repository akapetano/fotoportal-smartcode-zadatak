import { Flex, Heading, Stack, Badge } from '@chakra-ui/react';

export const PhotoKeywords = () => {
  return (
    <Flex flexDirection="column" mt="2rem">
      <Heading as="h3" fontSize="sm" textTransform="uppercase">
        Ključne riječi
      </Heading>
      <Stack direction="row" spacing="1rem" mt="1rem">
        <Badge
          p="0.2rem 1rem"
          fontWeight="normal"
          textTransform="capitalize"
          rounded="full"
          bg="transparent"
          border="1px solid lightgray"
        >
          Nogomet
        </Badge>
        <Badge
          p="0.2rem 1rem"
          fontWeight="normal"
          textTransform="capitalize"
          rounded="full"
          bg="transparent"
          border="1px solid lightgray"
        >
          Italija
        </Badge>
        <Badge
          p="0.2rem 1rem"
          fontWeight="normal"
          textTransform="capitalize"
          rounded="full"
          bg="transparent"
          border="1px solid lightgray"
        >
          Serie A
        </Badge>
        <Badge
          p="0.2rem 1rem"
          fontWeight="normal"
          textTransform="capitalize"
          rounded="full"
          bg="transparent"
          border="1px solid lightgray"
        >
          Genua
        </Badge>
        <Badge
          p="0.2rem 1rem"
          fontWeight="normal"
          textTransform="capitalize"
          rounded="full"
          bg="transparent"
          border="1px solid lightgray"
        >
          Italien
        </Badge>
        <Badge
          p="0.2rem 1rem"
          fontWeight="normal"
          textTransform="capitalize"
          rounded="full"
          bg="transparent"
          border="1px solid lightgray"
        >
          Fussball
        </Badge>
        <Badge
          p="0.2rem 1rem"
          fontWeight="normal"
          textTransform="capitalize"
          rounded="full"
          bg="transparent"
          border="1px solid lightgray"
        >
          Soccer
        </Badge>
      </Stack>
    </Flex>
  );
};
