import { Box, Flex, Link, Text, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const footerBorderColor = useColorModeValue('gray.100', 'gray.700');
  const { t } = useTranslation();
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
        {t('footer.designBy')}{' '}
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
        2022 | {t('footer.builtBy')}{' '}
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
