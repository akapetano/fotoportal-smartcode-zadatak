import { Burger } from './Burger/Burger';
import { MobileMenu } from './MobileMenu/MobileMenu';
import { Flex, FlexProps } from '@chakra-ui/react';
import { useState } from 'react';

export const MobileNav = ({ ...restProps }: FlexProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Flex {...restProps}>
      <Burger isopen={isOpen} setIsOpen={setIsOpen} />
      <MobileMenu isopen={isOpen} />
    </Flex>
  );
};
