import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export const AboutUsMenu = () => {
  return (
    <Menu>
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
        O nama <ChevronDownIcon />
      </MenuButton>
      <MenuList>
        <MenuItem _hover={{ bg: '#F68B1E' }}>FotoPortal</MenuItem>
        <MenuItem _hover={{ bg: '#F68B1E' }}>Naše usluge</MenuItem>
        <MenuItem _hover={{ bg: '#F68B1E' }}>Kontakti</MenuItem>
      </MenuList>
    </Menu>
  );
};
