import { Box, BoxProps } from '@chakra-ui/react';
import { Navbar } from '../Navbar/Navbar';

export const Layout = ({ children, ...restProps }: BoxProps) => {
  return (
    <Box h="100vh">
      <Navbar />
      {children}
    </Box>
  );
};
