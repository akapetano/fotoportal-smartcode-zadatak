import { Flex, Divider } from '@chakra-ui/react';
import { PhotoActions } from './PhotoActions/PhotoActions';
import { SelectedPhotoPreview } from './SelectedPhotoPreview/SelectedPhotoPreview';

export const PhotoOverview = () => {
  return (
    <Flex>
      <SelectedPhotoPreview />
      <PhotoActions />
    </Flex>
  );
};
