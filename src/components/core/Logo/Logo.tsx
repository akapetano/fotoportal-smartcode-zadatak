import { Heading } from '@chakra-ui/react';
import NextLink from 'next/link';

export const Logo = () => {
  return (
    <NextLink href="/" passHref>
      <Heading cursor="pointer" as="h1" fontSize="2xl" fontWeight="800">
        FP
      </Heading>
    </NextLink>
  );
};
