import { Grid } from '@chakra-ui/react';
import { Photo } from '../Photo/Photo';

export const PhotoGalleryGrid = () => {
  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 2fr)', md: 'repeat(4, 2fr)' }}
      gap={2}
      mt="1rem"
    >
      <Photo src="/images/snail-unsplash.jpg" alt="A photo of a snail" />
      <Photo
        src="/images/wolfgang-hasselmann-horses-unsplash.jpg"
        alt="A photo of two horses"
      />
      <Photo
        src="/images/kyaw-tun-goldfish-unsplash.jpg"
        alt="A photo of a goldfish"
      />
      <Photo
        src="/images/lance-anderson--parachute-unsplash.jpg"
        alt="A photo of a man parachuting"
      />
      <Photo
        src="/images/slashio-photography-cake-unsplash.jpg"
        alt="A photo of a cake"
      />
      <Photo
        src="/images/lachlan-dempsey-field-unsplash.jpg"
        alt="A photo of a man in a field"
      />
      <Photo
        src="/images/sharon-mccutcheon-paint-unsplash.jpg"
        alt="A photo of a painted hand"
      />
      <Photo
        src="/images/terra-slaybaugh-apples-unsplash.jpg"
        alt="A photo of apples"
      />
    </Grid>
  );
};
