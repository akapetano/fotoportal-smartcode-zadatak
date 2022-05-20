import {
  Button,
  Flex,
  FlexProps,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { LanguageMenu } from '../../../shared/LanguageMenu/LanguageMenu';
import { AboutUsMenu } from '../../AboutUsMenu/AboutUsMenu';
import { CartButton } from '../../CartButton/CartButton';
import { ColorModeButton } from '../../ColorModeButton/ColorModeButton';
import { NavLinks } from '../../Nav/NavLinks/NavLinks';
import { SignInButton } from '../../SignInButton/SignInButton';

interface IMobileMenuProps extends FlexProps {
  isOpen: boolean;
}

export const MobileMenu = ({ isOpen }: IMobileMenuProps) => {
  const overlayBgColor = useColorModeValue(
    'rgba(255,255,255,0.45)',
    'rgba(0,0,0,0.55)'
  );

  return (
    <Flex
      as="nav"
      flexDir="column"
      bg={overlayBgColor}
      backdropFilter="blur( 20px )"
      pt="10rem"
      height="100vh"
      width="100%"
      textAlign="center"
      position="fixed"
      top="0"
      right="0"
      transform={isOpen ? 'translateX(0)' : 'translateX(100%)'}
      transition="transform 0.3s ease-in-out"
      zIndex="20"
    >
      <VStack spacing={4}>
        <NavLinks
          display={{ base: 'flex', md: 'none' }}
          direction="column"
          justifyContent="center"
          alignItems="center"
        />
        <ColorModeButton aria-label="Toggle color mode" />
        <LanguageMenu />
        <AboutUsMenu />
        <CartButton />
        <SignInButton w="40vw" />
      </VStack>
    </Flex>
  );
};
