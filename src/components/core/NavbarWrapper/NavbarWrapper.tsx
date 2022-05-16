import { Flex, FlexProps } from '@chakra-ui/react';

export const NavbarWrapper = ({ ...restProps }: FlexProps) => {
  return (
    <Flex
      justifyContent="space-around"
      alignItems="center"
      h="62px"
      boxShadow="0 3px 10px 0 rgba(0, 0, 0, 0.1 )"
      {...restProps}
    />
  );
};
