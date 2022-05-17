import { Box, BoxProps } from '@chakra-ui/react';
import { Footer } from '../Footer/Footer';
import { Navbar } from '../Navbar/Navbar';

export const Layout = ({ children, ...restProps }: BoxProps) => {
  return (
    <Box h="100vh">
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};
