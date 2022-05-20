import {
  Container,
  Flex,
  FlexProps,
  useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';

export const SelectedPhotoPreview = ({ ...restProps }: FlexProps) => {
  const selectedPhotoPreviewBackground = useColorModeValue(
    '#E5E5E5',
    'gray.700'
  );

  return (
    <Flex
      height={{ base: '40vh', md: '66vh' }}
      bg={selectedPhotoPreviewBackground}
      justifyContent="center"
      alignItems="center"
      position="relative"
      {...restProps}
    >
      <Image
        src="/images/norbert-velescu-web-unsplash.jpg"
        alt="Spider web"
        layout="fill"
        objectFit="contain"
        priority
      />
    </Flex>
  );
};
