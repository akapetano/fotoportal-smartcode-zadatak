import { GridItem, GridItemProps } from '@chakra-ui/react';
import Image from 'next/image';
import { SRLWrapper, useLightbox } from 'simple-react-lightbox';

interface IPhotoProps extends GridItemProps {
  src: string;
  alt: string;
}

export const Photo = ({ src, alt }: IPhotoProps) => {
  const { openLightbox, closeLightbox } = useLightbox();

  return (
    <GridItem
      w="100%"
      h="347"
      position="relative"
      onClick={() => openLightbox()}
    >
      <SRLWrapper>
        <a href={src} data-attribute="SRL">
          <Image src={src} layout="fill" objectFit="cover" priority alt={alt} />
        </a>
      </SRLWrapper>
    </GridItem>
  );
};
