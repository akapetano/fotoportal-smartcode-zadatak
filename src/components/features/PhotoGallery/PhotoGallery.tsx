import {
  Container,
  Flex,
  Heading,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { PhotoGalleryGrid } from './PhotoGalleryGrid/PhotoGalleryGrid';
import { useTranslation } from 'react-i18next';

export const PhotoGallery = () => {
  const photoGalleryBg = useColorModeValue('#E5E5E5', 'gray.700');
  const { t } = useTranslation();

  return (
    <Container
      h="55rem"
      maxWidth="container.xl"
      bg={photoGalleryBg}
      p="4rem 2rem 0 2rem"
    >
      <Flex justifyContent="space-between">
        <Heading as="h3" fontSize="xl">
          {t('moreFromGallery')} Unsplash photos
        </Heading>
        <Button
          className="showMoreBtn"
          rightIcon={
            <ChevronRightIcon
              sx={{
                transition: 'transform .2s',
                '.showMoreBtn: hover &': {
                  transform: 'translateX(0.5rem)',
                  transition: 'transform .2s',
                },
              }}
            />
          }
          size="sm"
          fontWeight="normal"
          fontSize="sm"
          bg="none"
          _hover={{ bg: 'none', color: '#F68B1E' }}
        >
          {t('galleryShowMoreButton')}
        </Button>
      </Flex>
      <PhotoGalleryGrid />
    </Container>
  );
};
