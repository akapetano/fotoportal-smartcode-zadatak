import { Flex, Stack } from '@chakra-ui/react';
import { PhotoDescription } from './PhotoDescription/PhotoDescription';
import { PhotoKeywords } from './PhotoKeywords/PhotoKeywords';
import { PhotoInfo } from './PhotoInfo/PhotoInfo';

export const PhotoDetails = () => {
  return (
    <Flex>
      <Flex p="3rem 2rem" w="80vw" flexDirection="column">
        <Stack spacing={[24, 32, 48, 80, 96]} w="100%" direction="row">
          <PhotoInfo heading="Galerija" text="Stock" />
          <PhotoInfo heading="Autor" text="Ivan Horvat" />
          <PhotoInfo heading="Agencija" text="Smart Code" />
        </Stack>
        <PhotoDescription />
        <PhotoKeywords />
      </Flex>
      <Stack
        p="0 2rem 3rem 2rem"
        w="20vw"
        flexDirection="column"
        spacing="1.5rem"
      >
        <PhotoInfo
          heading="Posebne napomene"
          text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
        <PhotoInfo
          heading="Posebne napomene"
          text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <PhotoInfo
          heading="Posebne napomene"
          text="It has survived not only five centuries, but also the leap into electronic typesetting."
        />
      </Stack>
    </Flex>
  );
};
