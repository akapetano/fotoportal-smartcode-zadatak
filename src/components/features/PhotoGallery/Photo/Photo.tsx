import { GridItem, GridItemProps } from '@chakra-ui/react';
import Image from 'next/image';

interface IPhotoProps extends GridItemProps {
  src: string;
  alt: string;
}

export const Photo = ({ src, alt }: IPhotoProps) => {
  return (
    <GridItem w="100%" h="347" position="relative">
      <Image src={src} layout="fill" objectFit="fill" priority alt={alt} />
    </GridItem>
  );
};
