import { Container, ContainerProps } from '@chakra-ui/react';

export const LayoutMain = ({ ...restProps }: ContainerProps) => {
  return <Container as="main" maxWidth="container.xl" {...restProps} />;
};
