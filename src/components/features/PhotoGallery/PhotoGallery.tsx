import { Container, Flex, Heading, Button } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { PhotoGalleryGrid } from './PhotoGalleryGrid/PhotoGalleryGrid';

export const PhotoGallery = () => {
  return (
    <Container
      h="55rem"
      maxWidth="container.xl"
      bg="#E5E5E5"
      p="4rem 2rem 0 2rem"
    >
      <Flex justifyContent="space-between">
        <Heading as="h3" fontSize="xl">
          Više iz galerije: Unsplash photos
        </Heading>
        <Button
          rightIcon={<ChevronRightIcon />}
          size="sm"
          fontWeight="normal"
          fontSize="sm"
          bg="none"
          _hover={{ bg: 'none', color: '#F68B1E' }}
        >
          Prikaži više
        </Button>
      </Flex>
      <PhotoGalleryGrid />
    </Container>
  );
};
