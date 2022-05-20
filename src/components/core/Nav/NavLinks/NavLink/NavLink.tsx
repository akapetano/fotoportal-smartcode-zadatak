import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

interface INavLinkProps extends LinkProps {
  to: string;
  linkName: string;
}

export const NavLink = ({ to, linkName, ...restProps }: INavLinkProps) => {
  const router = useRouter();
  const isActive = router.pathname === to;

  return isActive ? (
    <NextLink href={to} passHref>
      <ChakraLink
        color="#F68B1E"
        rounded="md"
        fontWeight="600"
        letterSpacing="-0.4px"
        fontSize="sm"
        textTransform="uppercase"
        p="0.7rem"
        _hover={{ color: '#F68B1E' }}
        _active={{ color: '#F68B1E' }}
        {...restProps}
      >
        {linkName}
      </ChakraLink>
    </NextLink>
  ) : (
    <NextLink href={to} passHref>
      <ChakraLink
        rounded={'md'}
        fontWeight="600"
        transition="color .3s ease-in, background-color .3s ease-in"
        fontSize="sm"
        textTransform="uppercase"
        p="0.7rem"
        _hover={{
          color: '#F68B1E',
          transition: 'color .3s ease-out, background-color .3s ease-out',
        }}
        _active={{ color: '#F68B1E' }}
        {...restProps}
      >
        {linkName}
      </ChakraLink>
    </NextLink>
  );
};
