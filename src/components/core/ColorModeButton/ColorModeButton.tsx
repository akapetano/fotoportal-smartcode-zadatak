import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const ColorModeButton = ({ ...restProps }: IconButtonProps) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(SunIcon, MoonIcon);
  const iconHoverColor = useColorModeValue('white', 'gray.700');

  return (
    <IconButton
      size="md"
      rounded="full"
      onClick={toggleColorMode}
      bg="none"
      _hover={{ bg: '#F68B1E', color: iconHoverColor }}
      icon={<SwitchIcon />}
      {...restProps}
    />
  );
};
