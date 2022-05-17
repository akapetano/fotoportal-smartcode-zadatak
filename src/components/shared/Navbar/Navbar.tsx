import {
  HStack,
  Flex,
  Divider,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';
import { ColorModeButton } from '../../core/ColorModeButton/ColorModeButton';
import { Logo } from '../../core/Logo/Logo';
import { NavbarItems } from '../../core/NavBarItems/NavBarItems';
import { NavbarWrapper } from '../../core/NavbarWrapper/NavbarWrapper';
import { LanguageMenu } from '../../core/LanguageMenu/LanguageMenu';
import { AboutUsMenu } from '../../core/AboutUsMenu/AboutUsMenu';
import { SignInButton } from '../../core/SignInButton/SignInButton';

import { CartButton } from '../../core/CartButton/CartButton';

export const Navbar = () => {
  const dividerColor = useColorModeValue('#B6B6B6', 'gray.600');

  return (
    <NavbarWrapper>
      <Container maxWidth="container.xl">
        <Flex justifyContent="space-evenly" alignItems="center">
          <Logo />
          <Divider orientation="vertical" h="22px" borderColor={dividerColor} />
          <HStack spacing={{ base: 16, md: 32 }}>
            <NavbarItems direction={{ base: 'column', md: 'row' }} />
            <HStack>
              <ColorModeButton aria-label="Color Mode button" />
              <LanguageMenu />
              <AboutUsMenu />
              <CartButton />
              <Divider
                orientation="vertical"
                h="22px"
                borderColor={dividerColor}
              />
              <SignInButton />
            </HStack>
          </HStack>
        </Flex>
      </Container>
    </NavbarWrapper>
  );
};
