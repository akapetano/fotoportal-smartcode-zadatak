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
          variant="tertiary"
          textTransform="uppercase"
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
          <Button variant="tertiary" fontWeight="normal" w="39%">
            Pošalji u sustav
          </Button>
          <Button variant="tertiary" fontWeight="normal" w="39%">
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
            variant="primary"
            textTransform="uppercase"
            fontSize="sm"
            rounded="full"
            w="80%"
          >
            Dodaj u košaricu
          </Button>
          <Button
            variant="secondary"
            fontSize="sm"
            rounded="full"
            w="80%"
            leftIcon={<ArrowDownIcon />}
          >
            Preuzmi pregledni primjerak
          </Button>
        </VStack>
      </ButtonGroup>
    </>
  );
};
