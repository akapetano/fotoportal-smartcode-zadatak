import { HStack, Flex, Container } from '@chakra-ui/react';
import { VerticalDivider } from '../../core/VerticalDivider/VerticalDivider';
import { ColorModeButton } from '../../core/ColorModeButton/ColorModeButton';
import { Logo } from '../../core/Logo/Logo';
import { NavbarItems } from '../../core/NavBarItems/NavBarItems';
import { NavbarWrapper } from '../../core/NavbarWrapper/NavbarWrapper';
import { LanguageMenu } from '../../core/LanguageMenu/LanguageMenu';
import { AboutUsMenu } from '../../core/AboutUsMenu/AboutUsMenu';
import { SignInButton } from '../../core/SignInButton/SignInButton';

import { CartButton } from '../../core/CartButton/CartButton';

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <Container maxWidth="container.xl">
        <Flex justifyContent="space-evenly" alignItems="center">
          <Logo />
          <VerticalDivider />
          <HStack spacing={{ base: 16, md: 32 }}>
            <NavbarItems direction={{ base: 'column', md: 'row' }} />
            <HStack>
              <ColorModeButton aria-label="Color Mode button" />
              <LanguageMenu />
              <AboutUsMenu />
              <CartButton />
              <VerticalDivider />
              <SignInButton />
            </HStack>
          </HStack>
        </Flex>
      </Container>
    </NavbarWrapper>
  );
};
