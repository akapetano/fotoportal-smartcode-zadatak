import {
  Flex,
  Text,
  Checkbox,
  Icon,
  HStack,
  Box,
  Divider,
  FlexProps,
} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import { PhotoSizeAndPrice } from './PhotoSizeAndPrice/PhotoSizeAndPrice';
import { ActionButtons } from './ActionButtons/ActionButtons';

export const PhotoActions = ({ ...restProps }: FlexProps) => {
  return (
    <Flex
      h="600px"
      flexDirection="column"
      alignItems="left"
      justifyContent={{ base: 'center', md: 'start' }}
      {...restProps}
    >
      <Divider
        mb="1rem"
        mt={{ base: '1rem', md: '0' }}
        alignSelf={{ base: 'center', md: 'stretch' }}
        justifySelf={{ base: 'center', md: 'stretch' }}
        width={{ base: '60vw', md: 'auto' }}
      />
      <Flex alignItems="center" justifyContent="center" pb="1rem">
        <Text
          fontSize="sm"
          textAlign={{ base: 'center', md: 'left' }}
          p={{ base: '0.5rem 1rem 0 0', md: '0 0.5rem 0 1.5rem' }}
        >
          Kako mogu koristiti ovaj sadržaj?
        </Text>
        <Icon as={InfoIcon} />
      </Flex>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <PhotoSizeAndPrice />
        <Checkbox
          colorScheme="orange"
          size="sm"
          p={{ base: '1rem 0 0 0 ', md: '0.5rem 6.5rem 0 0' }}
        >
          Preuzmi s potpisom autora
        </Checkbox>
      </Flex>
      <ActionButtons />
      <Divider
        mt="2rem"
        alignSelf="center"
        justifySelf="center"
        width={{ base: '60vw', md: '80%' }}
      />
    </Flex>
  );
};
