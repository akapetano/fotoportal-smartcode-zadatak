import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

export const AboutUsMenu = () => {
  const { t } = useTranslation();

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            h="2.5rem"
            w="5rem"
            fontSize="sm"
            transition="all 0.2s"
            rounded="full"
            borderWidth="1px"
            border="none"
            _hover={{ bg: 'none' }}
            _active={{ bg: 'none' }}
            _focus={{ outline: 'none' }}
          >
            {t('aboutUs.aboutUs')}{' '}
            <ChevronDownIcon
              style={{
                transform: isOpen ? 'rotate(180deg)' : 'none',
                transition: 'transform .2s',
              }}
            />
          </MenuButton>
          <MenuList>
            <MenuItem _hover={{ bg: '#F68B1E' }}>
              {t('aboutUs.fotoportal')}
            </MenuItem>
            <MenuItem _hover={{ bg: '#F68B1E' }}>
              {t('aboutUs.ourServices')}
            </MenuItem>
            <MenuItem _hover={{ bg: '#F68B1E' }}>
              {t('aboutUs.contacts')}
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};
