import { useState } from 'react';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  IconButton,
  Flex,
  HStack,
  Text,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { FlagIcon } from 'react-flag-kit';

export const LanguageMenu = () => {
  const [selectedCountry, setSelectedCountry] = useState('HR');

  return (
    <Flex justifyContent="center" alignItems="center">
      <FlagIcon code={selectedCountry === 'HR' ? 'HR' : 'GB'} size={32} />
      <Menu>
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
          // _expanded={{ bg: '#F68B1E' }}
          _focus={{ outline: 'none' }}
        ></MenuButton>
        <MenuList>
          <MenuItem
            bg={selectedCountry === 'HR' ? '#F68B1E' : ''}
            onClick={() => setSelectedCountry('HR')}
          >
            <HStack>
              <FlagIcon code="HR" size={32} />
              <Text>HR</Text>
            </HStack>
          </MenuItem>
          <MenuItem
            bg={selectedCountry === 'GB' ? '#F68B1E' : ''}
            onClick={() => setSelectedCountry('GB')}
          >
            <HStack>
              <FlagIcon code="GB" size={32} />
              <Text>EN</Text>
            </HStack>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
