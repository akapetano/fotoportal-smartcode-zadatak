import { Input, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const SearchBar = () => {
  const { t } = useTranslation();

  return (
    <Flex justifyContent="center" alignItems="center" h="7rem">
      <Input
        rounded="full"
        w="80vw"
        placeholder={t('searchBarPlaceholder')}
        px="5rem"
        fontSize="sm"
        _focus={{ borderColor: '#F68B1E' }}
      />
    </Flex>
  );
};
