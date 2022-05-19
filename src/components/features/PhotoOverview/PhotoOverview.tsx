import { Flex, Divider } from '@chakra-ui/react';
import { PhotoActions } from './PhotoActions/PhotoActions';
import { SelectedPhotoPreview } from './SelectedPhotoPreview/SelectedPhotoPreview';

export const PhotoOverview = () => {
  return (
    <Flex
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems="center"
      justifyContent="center"
    >
      <SelectedPhotoPreview w="70vw" />
      <PhotoActions w="30vw" />
    </Flex>
  );
};
