import { Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const SignInButton = () => {
  const { t } = useTranslation();

  return (
    <Button
      variant="secondary"
      size="sm"
      rounded="full"
      fontSize="xs"
      fontWeight="400"
    >
      {t('signInButton')}
    </Button>
  );
};
