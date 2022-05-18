import { Divider, useColorModeValue } from '@chakra-ui/react';

export const VerticalDivider = () => {
  const dividerColor = useColorModeValue('#B6B6B6', 'gray.600');
  return <Divider orientation="vertical" h="22px" borderColor={dividerColor} />;
};
