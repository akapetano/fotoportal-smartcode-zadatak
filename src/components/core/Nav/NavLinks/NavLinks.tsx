import { Stack, StackProps } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { NavLink } from './NavLink/NavLink';

export const NavLinks = ({ ...restProps }: StackProps) => {
  const { t } = useTranslation();

  return (
    <Stack as="nav" spacing={4} {...restProps}>
      <NavLink linkName={t('navItems.home')} to="/" />
      <NavLink linkName={t('navItems.navigation')} to="navigation" />
      <NavLink linkName={t('navItems.navigation')} to="navigation" />
      <NavLink linkName={t('navItems.navigation')} to="navigation" />
      <NavLink linkName={t('navItems.navigation')} to="navigation" />
    </Stack>
  );
};
