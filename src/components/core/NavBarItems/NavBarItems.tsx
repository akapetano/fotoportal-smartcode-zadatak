import { Stack, StackProps } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { NavbarItem } from '../NavbarItem/NavbarItem';

export const NavbarItems = ({ ...restProps }: StackProps) => {
  const { t } = useTranslation();

  return (
    <Stack
      as="nav"
      spacing={4}
      {...restProps}
      display={{ base: 'none', md: 'flex' }}
    >
      <NavbarItem linkName={t('navItems.home')} to="/" />
      <NavbarItem linkName={t('navItems.navigation')} to="navigation" />
      <NavbarItem linkName={t('navItems.navigation')} to="navigation" />
      <NavbarItem linkName={t('navItems.navigation')} to="navigation" />
      <NavbarItem linkName={t('navItems.navigation')} to="navigation" />
    </Stack>
  );
};
