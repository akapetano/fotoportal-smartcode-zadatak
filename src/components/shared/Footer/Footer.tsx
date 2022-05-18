import { Box, Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';

export const Footer = () => {
  const footerBorderColor = useColorModeValue('gray.100', 'gray.700');
  const smartcode = '{smart code}';

  return (
    <Flex
      as="footer"
      h="7rem"
      borderTop="1px solid"
      borderColor={footerBorderColor}
      mt="3rem"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text>
        Design by{' '}
        <Link
          href="https://smartcode.eu/"
          target="_blank"
          color="#F68B1E"
          _hover={{ textDecoration: 'underline' }}
        >
          {smartcode}
        </Link>
      </Text>
      <Text>
        2022 | Built by{' '}
        <Link
          href="https://www.andrijakapetanovic.com/"
          target="_blank"
          color="#F68B1E"
          _hover={{ textDecoration: 'underline' }}
        >
          Andrija Kapetanović
        </Link>
      </Text>
    </Flex>
  );
};
