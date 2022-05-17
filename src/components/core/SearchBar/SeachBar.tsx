import { Input, Flex } from '@chakra-ui/react';

export const SearchBar = () => {
  return (
    <Flex justifyContent="center" alignItems="center" h="101px" w="100vw">
      <Input
        rounded="full"
        w="80vw"
        placeholder="Pretraži ponudu agencija"
        px="5rem"
        fontSize="sm"
        _focus={{ borderColor: '#F68B1E' }}
      />
    </Flex>
  );
};
