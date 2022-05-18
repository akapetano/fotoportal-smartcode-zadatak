import { Box, BoxProps } from '@chakra-ui/react';

interface ILanguageMenuFlagProps extends BoxProps {
  language: string | undefined;
}

export const LanguageMenuFlag = ({ language }: ILanguageMenuFlagProps) => {
  return (
    <Box
      w={8}
      h={8}
      rounded="full"
      backgroundImage={`url(./images/${language}-flag.svg)`}
      backgroundPosition={language === 'en-US' ? 'left' : 'center'}
      backgroundSize="cover"
    />
  );
};
