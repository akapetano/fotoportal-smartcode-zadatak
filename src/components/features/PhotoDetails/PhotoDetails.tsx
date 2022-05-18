import { Flex, Stack } from '@chakra-ui/react';
import { PhotoDescription } from './PhotoDescription/PhotoDescription';
import { PhotoKeywords } from './PhotoKeywords/PhotoKeywords';
import { PhotoInfoBlock } from './PhotoInfoBlock/PhotoInfoBlock';

export const PhotoDetails = () => {
  return (
    <Flex>
      <Flex p="3rem 2rem" w="70vw" flexDirection="column">
        <Stack spacing={[24, 32, 48, 64, 64]} direction="row">
          <PhotoInfoBlock heading="Galerija" text="Stock" />
          <PhotoInfoBlock heading="Autor" text="Ivan Horvat" />
          <PhotoInfoBlock heading="Agencija" text="Smart Code" />
        </Stack>
        <PhotoDescription />
        <PhotoKeywords />
      </Flex>
      <Stack p="0 0 3rem 3rem" w="30vw" flexDirection="column" spacing="1.5rem">
        <PhotoInfoBlock
          heading="Posebne napomene"
          text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
        <PhotoInfoBlock
          heading="Posebne napomene"
          text="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
        />
        <PhotoInfoBlock
          heading="Posebne napomene"
          text="It has survived not only five centuries, but also the leap into electronic typesetting."
        />
      </Stack>
    </Flex>
  );
};
