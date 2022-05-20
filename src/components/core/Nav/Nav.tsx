import { HStack, Flex, Container, useDisclosure } from '@chakra-ui/react';
import { VerticalDivider } from '../VerticalDivider/VerticalDivider';
import { ColorModeButton } from '../ColorModeButton/ColorModeButton';
import { Logo } from '../Logo/Logo';
import { NavLinks } from './NavLinks/NavLinks';
import { NavbarWrapper } from './NavbarWrapper/NavbarWrapper';
import { LanguageMenu } from '../../shared/LanguageMenu/LanguageMenu';
import { AboutUsMenu } from '../AboutUsMenu/AboutUsMenu';
import { SignInButton } from '../SignInButton/SignInButton';
import { CartButton } from '../CartButton/CartButton';
import { MobileNav } from '../MobileNav/MobileNav';

export const Nav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <NavbarWrapper>
      <Container maxWidth="container.xl">
        <Flex
          justifyContent={{ base: 'space-between', md: 'space-evenly' }}
          alignItems="center"
        >
          <Logo />
          <VerticalDivider display={{ base: 'none', md: 'flex' }} />
          <HStack spacing={{ base: 16, md: 32 }}>
            <NavLinks
              direction="row"
              display={{ base: 'none', md: 'none', lg: 'none', xl: 'flex' }}
            />
            <HStack display={{ base: 'none', md: 'flex' }}>
              <ColorModeButton aria-label="Color Mode button" />
              <LanguageMenu />
              <AboutUsMenu />
              <CartButton count={6} />
              <VerticalDivider />
              <SignInButton />
            </HStack>
          </HStack>
          <MobileNav display={{ base: 'flex', md: 'none' }} />
        </Flex>
      </Container>
    </NavbarWrapper>
  );
};
