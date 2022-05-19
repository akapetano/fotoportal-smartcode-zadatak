import { Box, BoxProps } from '@chakra-ui/react';
import { Footer } from '../Footer/Footer';
import { Nav } from '../Nav/Nav';

export const Layout = ({ children, ...restProps }: BoxProps) => {
  return (
    <Box h="100vh">
      <Nav />
      {children}
      <Footer />
    </Box>
  );
};
