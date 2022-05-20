import { Divider, DividerProps, useColorModeValue } from '@chakra-ui/react';

export const VerticalDivider = ({ ...restProps }: DividerProps) => {
  const dividerColor = useColorModeValue('#B6B6B6', 'gray.600');
  return (
    <Divider
      orientation="vertical"
      h="22px"
      borderColor={dividerColor}
      {...restProps}
    />
  );
};
