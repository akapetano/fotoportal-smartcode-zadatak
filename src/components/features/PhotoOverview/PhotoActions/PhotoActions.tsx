import {
  Flex,
  Text,
  Checkbox,
  Icon,
  HStack,
  Box,
  Divider,
} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import { PhotoSizeAndPrice } from '../PhotoSizeAndPrice/PhotoSizeAndPrice';
import { ActionButtons } from '../ActionButtons/ActionButtons';

export const PhotoActions = () => {
  return (
    <Flex h="600px" w="20vw" flexDirection="column" alignItems="center">
      <Divider />
      <Flex justifyContent="space-between" alignItems="center" pt="1rem">
        <Text fontSize="sm" p="0.5rem">
          Kako mogu koristiti ovaj sadržaj?
        </Text>
        <Icon as={InfoIcon} />
      </Flex>
      <PhotoSizeAndPrice />

      <Checkbox colorScheme="orange" size="sm" p="0.5rem">
        Preuzmi s potpisom autora
      </Checkbox>
      <ActionButtons />
      <Divider mt="3rem" w="80%" />
    </Flex>
  );
};
