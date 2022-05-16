import { Button } from '@chakra-ui/react';

export const SignInButton = () => {
  return (
    <Button
      size="sm"
      rounded="full"
      fontSize="xs"
      fontWeight="400"
      bg="none"
      border="1px solid"
      _hover={{ bg: '#F68B1E' }}
    >
      Prijavi se
    </Button>
  );
};
