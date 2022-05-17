import { Button, ButtonGroup, Flex, VStack } from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';

export const ActionButtons = () => {
  return (
    <>
      <VStack
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        spacing="0.8rem"
        mt="1.5rem"
      >
        <Button
          textTransform="uppercase"
          fontSize="sm"
          rounded="full"
          w="80%"
          leftIcon={<ArrowDownIcon />}
        >
          Preuzmi sadržaj
        </Button>
        <ButtonGroup
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button fontSize="sm" fontWeight="normal" rounded="full" w="39%">
            Pošalji u sustav
          </Button>
          <Button fontSize="sm" fontWeight="normal" rounded="full" w="39%">
            Pošalji u CMS
          </Button>
        </ButtonGroup>
      </VStack>
      <ButtonGroup
        mt="1rem"
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <VStack w="100%">
          <Button
            textTransform="uppercase"
            fontSize="sm"
            rounded="full"
            w="80%"
            bg="black"
            color="white"
            border="1px solid black"
            transition="all .3s ease"
            _hover={{ bg: 'white', color: 'black' }}
          >
            Dodaj u košaricu
          </Button>
          <Button
            fontSize="sm"
            rounded="full"
            w="80%"
            bg="white"
            color="black"
            border="1px solid black"
            leftIcon={<ArrowDownIcon />}
            transition="all .3s ease"
            _hover={{ bg: 'black', color: 'white' }}
          >
            Preuzmi pregledni primjerak
          </Button>
        </VStack>
      </ButtonGroup>
    </>
  );
};
