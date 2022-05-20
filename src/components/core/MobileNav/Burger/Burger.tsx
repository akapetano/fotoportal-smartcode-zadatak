import { Button, ButtonProps } from '@chakra-ui/react';
import { BurgerLine } from './BurgerLine/BurgerLine';

interface IBurgerProps extends ButtonProps {
  isopen: boolean;
  setIsOpen: (param: boolean) => void;
}

export const Burger = ({ isopen, setIsOpen, ...restProps }: IBurgerProps) => {
  return (
    <Button
      isopen={isopen}
      onClick={() => setIsOpen(!isopen)}
      position="fixed"
      top="1rem"
      right="1rem"
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
      width="2rem"
      height="2rem"
      background="transparent"
      border="none"
      cursor="pointer"
      padding="0"
      zIndex="25"
      _hover={{ background: 'transparent' }}
      _active={{ background: 'transparent' }}
      _focus={{ outline: 'none' }}
      {...restProps}
    >
      <BurgerLine isopen={isopen} />
      <BurgerLine isopen={isopen} />
      <BurgerLine isopen={isopen} />
    </Button>
  );
};
