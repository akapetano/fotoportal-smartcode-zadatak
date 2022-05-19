import { Button, ButtonGroup, Flex, VStack } from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';

export const ActionButtons = () => {
  return (
    <VStack>
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
          variant="tertiary"
          textTransform="uppercase"
          w={{ base: '60vw', md: '80%' }}
          leftIcon={<ArrowDownIcon />}
        >
          Preuzmi sadržaj
        </Button>
        <ButtonGroup
          w={{ base: '60vw', md: '100%' }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            variant="tertiary"
            fontWeight="normal"
            w={{ base: '50vw', md: '39%' }}
          >
            Pošalji u sustav
          </Button>
          <Button
            variant="tertiary"
            fontWeight="normal"
            w={{ base: '50vw', md: '39%' }}
          >
            Pošalji u CMS
          </Button>
        </ButtonGroup>
      </VStack>
      <VStack
        w={{ base: '80%', md: '100%' }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <VStack
          mt="1rem"
          w={{ base: '60vw', md: '100%' }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            variant="primary"
            textTransform="uppercase"
            fontSize="sm"
            rounded="full"
            w={{ base: '60vw', md: '80%' }}
          >
            Dodaj u košaricu
          </Button>
          <Button
            variant="secondary"
            fontSize="sm"
            rounded="full"
            w={{ base: '60vw', md: '80%' }}
            leftIcon={<ArrowDownIcon />}
          >
            Preuzmi pregledni primjerak
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
};
