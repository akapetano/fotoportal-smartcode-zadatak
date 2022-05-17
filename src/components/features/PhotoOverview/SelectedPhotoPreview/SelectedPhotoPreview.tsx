import { Flex, FlexProps, useColorModeValue } from '@chakra-ui/react';
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
      <Image
        src="https://i2-prod.hulldailymail.co.uk/incoming/article5880829.ece/ALTERNATES/s1200c/0_cobweb-921039_1920.jpg"
        alt="Spider web"
        height="527px"
        width="448px"
        unoptimized
      />
    </Flex>
  );
};
