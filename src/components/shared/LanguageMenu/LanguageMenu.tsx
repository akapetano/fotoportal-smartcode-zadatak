import { useRouter } from 'next/router';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Button,
  Flex,
  HStack,
  Text,
  Box,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { useTranslation } from 'react-i18next';
import { LanguageMenuFlag } from '../../core/LanguageMenuFlag/LanguageMenuFlag';
import { Locale } from '../../../enums/locale';

export const LanguageMenu = () => {
  const { asPath } = useRouter();
  const { i18n } = useTranslation();

  return (
    <Flex justifyContent="center" alignItems="center">
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton
              as={Button}
              bg="transparent"
              rounded="full"
              borderWidth="1px"
              border="none"
              rightIcon={
                <ChevronDownIcon
                  style={{
                    transform: isOpen ? 'rotate(180deg)' : 'none',
                    transition: 'transform .2s',
                  }}
                />
              }
              _hover={{ bg: 'none' }}
              _active={{ bg: 'none' }}
              _focus={{ outline: 'none' }}
            >
              <LanguageMenuFlag language={i18n.language} />
            </MenuButton>
            <MenuList>
              <NextLink href={asPath} locale={Locale.Hr}>
                <MenuItem
                  as={HStack}
                  bg={Locale.Hr ? '#F68B1E' : ''}
                  _hover={{ cursor: 'pointer' }}
                  onClick={() => i18n.changeLanguage('hr-HR')}
                >
                  <LanguageMenuFlag language="hr-HR" />
                  <Text>HR</Text>
                </MenuItem>
              </NextLink>
              <NextLink href={asPath} locale={Locale.En}>
                <MenuItem
                  as={HStack}
                  bg={Locale.En ? '#F68B1E' : ''}
                  _hover={{ cursor: 'pointer' }}
                  onClick={() => i18n.changeLanguage('en-US')}
                >
                  <LanguageMenuFlag language="en-US" />
                  <Text>EN</Text>
                </MenuItem>
              </NextLink>
            </MenuList>
          </>
        )}
      </Menu>
    </Flex>
  );
};
