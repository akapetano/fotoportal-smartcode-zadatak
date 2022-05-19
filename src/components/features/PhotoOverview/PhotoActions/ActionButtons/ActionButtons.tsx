import { Button, ButtonGroup, Flex, VStack } from '@chakra-ui/react';
import { ArrowDownIcon } from '@chakra-ui/icons';
import { useTranslation } from 'react-i18next';

export const ActionButtons = () => {
  const { t } = useTranslation();

  return (
    <VStack>
      <VStack
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        spacing="0.8rem"
        mt="1.5rem"
      >
        <Button
          variant="tertiary"
          textTransform="uppercase"
          w={{ base: '60vw', md: '80%' }}
          leftIcon={<ArrowDownIcon />}
        >
          {t('actionButtons.downloadContent')}
        </Button>
        <ButtonGroup
          w={{ base: '60vw', md: '100%' }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            variant="tertiary"
            fontWeight="normal"
            w={{ base: '50vw', md: '39%' }}
          >
            {t('actionButtons.sendToSystem')}
          </Button>
          <Button
            variant="tertiary"
            fontWeight="normal"
            w={{ base: '50vw', md: '39%' }}
          >
            {t('actionButtons.sendToCMS')}
          </Button>
        </ButtonGroup>
      </VStack>
      <VStack
        w={{ base: '80%', md: '100%' }}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <VStack
          mt="1rem"
          w={{ base: '60vw', md: '100%' }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            variant="primary"
            textTransform="uppercase"
            fontSize="sm"
            rounded="full"
            w={{ base: '60vw', md: '80%' }}
          >
            {t('actionButtons.addToCart')}
          </Button>
          <Button
            variant="secondary"
            fontSize="sm"
            rounded="full"
            w={{ base: '60vw', md: '80%' }}
            leftIcon={<ArrowDownIcon />}
          >
            {t('actionButtons.downloadSample')}
          </Button>
        </VStack>
      </VStack>
    </VStack>
  );
};
