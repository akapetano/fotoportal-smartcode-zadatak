import { Box, Flex, FlexProps, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';

export const SelectedPhotoPreview = ({ ...restProps }: FlexProps) => {
  const selectedPhotoPreviewBackground = useColorModeValue(
    '#E5E5E5',
    'gray.700'
  );

  return (
    <Flex
      h="600px"
      bg={selectedPhotoPreviewBackground}
      justifyContent="center"
      p="2rem"
      {...restProps}
    >
      <Box position="relative" height="527px" width="448px">
        <Image
          src="/images/norbert-velescu-web-unsplash.jpg"
          alt="Spider web"
          layout="fill"
          priority
        />
      </Box>
    </Flex>
  );
};
