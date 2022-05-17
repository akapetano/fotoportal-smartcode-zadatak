import { Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';

export const Footer = () => {
  const footerBorderColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <Flex
      as="footer"
      h="10rem"
      borderTop="1px solid"
      borderColor={footerBorderColor}
      mt="3rem"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text>
        Designed by{' '}
        <Link
          href="https://smartcode.eu/"
          target="_blank"
          color="#F68B1E"
          _hover={{ textDecoration: 'underline' }}
        >
          Smart Code
        </Link>
      </Text>
      <Text>
        2022 |{' '}
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
