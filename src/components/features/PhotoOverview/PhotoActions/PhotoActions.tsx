import {
  Flex,
  Text,
  Checkbox,
  Icon,
  Divider,
  FlexProps,
} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import { PhotoSizeAndPrice } from './PhotoSizeAndPrice/PhotoSizeAndPrice';
import { ActionButtons } from './ActionButtons/ActionButtons';
import { useTranslation } from 'react-i18next';

export const PhotoActions = ({ ...restProps }: FlexProps) => {
  const { t } = useTranslation();

  return (
    <Flex
      h="600px"
      flexDirection="column"
      alignItems="left"
      justifyContent={{ base: 'center', md: 'start' }}
      {...restProps}
    >
      <Divider
        mb={{ base: '0', md: '2rem' }}
        mt={{ base: '2rem', md: '0' }}
        alignSelf={{ base: 'center', md: 'stretch' }}
        justifySelf={{ base: 'center', md: 'stretch' }}
        width={{ base: '80vw', md: 'auto' }}
      />
      <Flex
        alignItems="center"
        justifyContent={{ base: 'center', md: 'start' }}
        pl={{ base: '0', md: '1rem' }}
        pb="1rem"
        mt={{ base: '1rem', md: '0' }}
      >
        <Text
          fontSize="sm"
          textAlign={{ base: 'center', md: 'left' }}
          p={{ base: '0 0.5rem', md: '0 0.5rem 0 1.5rem' }}
        >
          {t('howToUseContent')}
        </Text>
        <Icon as={InfoIcon} />
      </Flex>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <PhotoSizeAndPrice />
        <Checkbox
          colorScheme="orange"
          size="sm"
          p={{ base: '1rem 0 0 0', md: '0.5rem 6.5rem 0 2rem' }}
          w={{ base: '70vw', md: 'auto' }}
        >
          {t('downloadWithAuthorSignature')}
        </Checkbox>
      </Flex>
      <ActionButtons mb="1rem" />
      <Divider
        mt={{ base: '1rem', md: '2rem' }}
        alignSelf="center"
        justifySelf="center"
        width={{ base: '80vw', md: '80%' }}
      />
    </Flex>
  );
};
