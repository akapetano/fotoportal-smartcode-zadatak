import { useRouter } from 'next/router';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Flex,
  HStack,
  Text,
  Box,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';

export const LanguageMenu = () => {
  const { locale, locales, defaultLocale, asPath } = useRouter();

  return (
    <Flex justifyContent="center" alignItems="center">
      <Menu>
        <Box
          w={8}
          h={8}
          rounded="full"
          backgroundImage="url(./images/hr-flag.svg)"
          backgroundPosition="center"
          backgroundSize="cover"
        />
        <MenuButton
          h="2.5rem"
          w="2.5rem"
          as={IconButton}
          bg="transparent"
          transition="all 0.2s"
          rounded="full"
          borderWidth="1px"
          border="none"
          icon={<ChevronDownIcon />}
          _hover={{ bg: 'none' }}
          _active={{ bg: 'none' }}
          _focus={{ outline: 'none' }}
        />
        <MenuList>
          <NextLink href={asPath} locale={locale}>
            <MenuItem bg={locale === 'hr-HR' ? '#F68B1E' : ''}>
              <HStack>
                <Box
                  w={8}
                  h={8}
                  rounded="full"
                  backgroundImage="url(./images/hr-flag.svg)"
                  backgroundPosition="center"
                  backgroundSize="cover"
                />
                <Text>HR</Text>
              </HStack>
            </MenuItem>
          </NextLink>
          <NextLink href={asPath} locale={locale}>
            <MenuItem bg={locale === 'en-US' ? '#F68B1E' : ''}>
              <HStack>
                <Box
                  bg="pink"
                  w={8}
                  h={8}
                  rounded="full"
                  backgroundImage="url(./images/uk-flag.svg)"
                  backgroundPosition="center"
                  backgroundSize="cover"
                />
                <Text>EN</Text>
              </HStack>
            </MenuItem>
          </NextLink>
        </MenuList>
      </Menu>
    </Flex>
  );
};
