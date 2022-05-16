import { Stack, StackProps } from '@chakra-ui/react';
import { NavbarItem } from '../NavbarItem/NavbarItem';

const NAV_ITEMS = [
  'Naslovnica',
  'Navigacija',
  'Navigacija',
  'Navigacija',
  'Navigacija',
];

export const NavbarItems = ({ ...restProps }: StackProps) => {
  return (
    <Stack as="nav" spacing={4} {...restProps}>
      {NAV_ITEMS.map((navItem, index) => {
        return <NavbarItem key={navItem + index} to="/" linkName={navItem} />;
      })}
    </Stack>
  );
};
