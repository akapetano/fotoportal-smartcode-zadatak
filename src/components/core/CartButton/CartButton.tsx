import { IconButton, Box, useColorModeValue } from '@chakra-ui/react';
import { MdShoppingCart, MdOutlineShoppingCart } from 'react-icons/md';

export const CartButton = () => {
  const iconHoverColor = useColorModeValue('white', 'gray.700');

  return (
    <IconButton
      css={{
        position: 'relative',
      }}
      aria-label="Cart button"
      rounded="full"
      p="0.5rem"
      bg="none"
      _hover={{ bg: '#F68B1E', color: iconHoverColor }}
      icon={
        <>
          <MdShoppingCart fontSize={24} />
          <Box
            as={'span'}
            color={'white'}
            position={'absolute'}
            top={'2px'}
            right={'4px'}
            fontSize={'0.6rem'}
            bgColor={'red'}
            borderRadius={'lg'}
            zIndex={9999}
            p="1px"
            px="4px" // If items in cart is less than 9
          >
            6
          </Box>
        </>
      }
    />
  );
};
