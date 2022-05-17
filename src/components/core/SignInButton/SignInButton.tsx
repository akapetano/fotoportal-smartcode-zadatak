import { Button } from '@chakra-ui/react';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: { en: { translation: { 'Prijavi se': 'Sign In' } } },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export const SignInButton = () => {
  const { t } = useTranslation();

  return (
    <Button
      size="sm"
      rounded="full"
      fontSize="xs"
      fontWeight="400"
      bg="none"
      border="1px solid"
      _hover={{ bg: '#F68B1E' }}
    >
      {t('Prijavi se')}
    </Button>
  );
};
