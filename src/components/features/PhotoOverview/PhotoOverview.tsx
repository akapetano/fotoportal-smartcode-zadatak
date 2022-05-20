import { Flex, Divider } from '@chakra-ui/react';
import { PhotoActions } from './PhotoActions/PhotoActions';
import { SelectedPhotoPreview } from './SelectedPhotoPreview/SelectedPhotoPreview';

export const PhotoOverview = () => {
  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems={{ base: 'center', md: 'start' }}
      justifyContent="center"
    >
      <SelectedPhotoPreview w={{ base: '80vw', md: '70vw' }} />
      <PhotoActions w={{ base: '80vw', md: '30vw' }} />
    </Flex>
  );
};
