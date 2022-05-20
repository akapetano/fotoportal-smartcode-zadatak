import { Button, ButtonProps } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const SignInButton = ({ ...restProps }: ButtonProps) => {
  const { t } = useTranslation();

  return (
    <Button
      variant="secondary"
      size="sm"
      rounded="full"
      fontSize="xs"
      fontWeight="400"
      {...restProps}
    >
      {t('signInButton')}
    </Button>
  );
};
