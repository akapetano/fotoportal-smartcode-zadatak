import { extendTheme, theme as base } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em',
};

const theme = extendTheme({
  colors: {
    brand: {
      50: '#E5E5E5',
      100: '#E8E8E8',
      200: '#212121',
    },
    accent: {
      50: '#F68B1E',
      100: '#F52489',
    },
  },
  fonts: {
    heading: `Open Sans, ${base.fonts?.heading}`,
    body: `Open Sans, ${base.fonts?.body}`,
  },
  components: {
    IconButton: {
      variants: {
        primary: (props: any) => ({
          color: mode('black', 'gray.800')(props),
          transition: 'background-color .3s ease',
          _hover: {
            backgroundColor: mode('accent.50', 'accent.50')(props),
          },
        }),
        secondary: (props: any) => ({
          backgroundColor: 'black',
          color: mode('white', 'gray.800')(props),
          transition: 'background-color .3s ease',
          _hover: {
            _disabled: {
              backgroundColor: 'transparent',
              color: 'brand.300',
            },
            backgroundColor: mode('brand.300', 'brand.50')(props),
          },
        }),
      },
    },
    Link: {
      baseStyle: (props: any) => ({
        color: mode('brand.200', 'brand.50')(props),
        _hover: {
          color: mode('brand.300', 'brand.100')(props),
        },
      }),
    },
    Badge: {
      variants: {
        primary: (props: any) => ({
          backgroundColor: mode('gray.600', 'gray.400')(props),
          color: mode('gray.100', 'gray.800')(props),
          borderRadius: '10px',
          padding: '0.3rem 0.5rem',
        }),
      },
    },
    Button: {
      variants: {
        primary: (props: any) => ({
          rounded: 'full',
          color: mode('pink', 'gray.800')(props),
          backgroundColor: mode('gray.600', 'brand.100')(props),

          _hover: {
            backgroundColor: mode('brand.300', 'brand.50')(props),
          },

          _active: {
            backgroundColor: mode('brand.300', 'brand.50')(props),
          },
        }),
        secondary: (props: any) => ({
          rounded: 'md',

          color: mode('brand.200', 'brand.100')(props),
          backgroundColor: 'transparent',
          border: '2px solid',

          _hover: {
            color: mode('white', 'gray.800')(props),
            backgroundColor: mode('brand.200', 'brand.100')(props),
            borderColor: mode('brand.200', 'brand.100')(props),
          },

          _active: {
            color: mode('brand.300', 'brand.50')(props),
          },
        }),
      },
    },
  },
  breakpoints,
});

export default theme;
