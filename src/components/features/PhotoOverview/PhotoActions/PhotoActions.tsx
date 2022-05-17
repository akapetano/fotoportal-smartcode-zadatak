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
import { PhotoSizeAndPrice } from '../PhotoSizeAndPrice/PhotoSizeAndPrice';
import { ActionButtons } from '../ActionButtons/ActionButtons';

export const PhotoActions = ({ ...restProps }: FlexProps) => {
  return (
    <Flex h="600px" flexDirection="column" alignItems="left" {...restProps}>
      <Divider />
      <Flex alignItems="center" p="1rem">
        <Text fontSize="sm" p="0 0.5rem 0 1.5rem">
          Kako mogu koristiti ovaj sadržaj?
        </Text>
        <Icon as={InfoIcon} />
      </Flex>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <PhotoSizeAndPrice />
        <Checkbox colorScheme="orange" size="sm" p="0.5rem 6.5rem 0 0">
          Preuzmi s potpisom autora
        </Checkbox>
      </Flex>
      <ActionButtons />
      <Divider mt="3rem" alignSelf="center" justifySelf="center" w="80%" />
    </Flex>
  );
};
