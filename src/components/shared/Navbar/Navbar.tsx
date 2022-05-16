import { HStack, Flex, Divider, useColorModeValue } from '@chakra-ui/react';
import { ColorModeButton } from '../../core/ColorModeButton/ColorModeButton';
import { Logo } from '../../core/Logo/Logo';
import { NavbarItems } from '../../core/NavBarItems/NavBarItems';
import { NavbarWrapper } from '../../core/NavbarWrapper/NavbarWrapper';
import { LanguageMenu } from '../../core/LanguageMenu/LanguageMenu';
import { AboutUsMenu } from '../../core/AboutUsMenu/AboutUsMenu';
import { SignInButton } from '../../core/SignInButton/SignInButton';

export const Navbar = () => {
  const dividerColor = useColorModeValue('#B6B6B6', 'gray.600');

  return (
    <NavbarWrapper>
      <Logo />
      <Divider orientation="vertical" h="22px" borderColor={dividerColor} />
      <Flex justifyContent="space-evenly" alignItems="center">
        <NavbarItems direction={{ base: 'column', md: 'row' }} />
        <HStack>
          <ColorModeButton aria-label="Color Mode button" />
          <LanguageMenu />
          <AboutUsMenu />
        </HStack>
      </Flex>
      <Divider orientation="vertical" h="22px" borderColor={dividerColor} />
      <SignInButton />
    </NavbarWrapper>
  );
};
