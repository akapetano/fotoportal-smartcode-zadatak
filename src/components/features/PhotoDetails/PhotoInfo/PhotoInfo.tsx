import { VStack, StackProps, Heading, Text } from '@chakra-ui/react';

interface IPhotoInfoProps extends StackProps {
  heading: string;
  text: string;
}

export const PhotoInfo = ({ heading, text }: IPhotoInfoProps) => {
  return (
    <VStack alignItems="left">
      <Heading as="h3" fontSize="sm" textTransform="uppercase">
        {heading}
      </Heading>
      <Text fontSize="sm">{text}</Text>
    </VStack>
  );
};
