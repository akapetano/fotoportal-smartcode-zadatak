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
          padding: '0.2rem 1rem',
          fontWeight: 'normal',
          textTransform: 'capitalize',
          rounded: 'full',
          backgroundColor: 'transparent',
          border: '1px solid lightgray',
        }),
      },
    },
    Button: {
      variants: {
        primary: (props: any) => ({
          rounded: 'full',
          color: mode('white', 'gray.800')(props),
          border: '1px solid',
          backgroundColor: mode('black', 'white')(props),
          borderColor: 'black',
          transition: 'all .3s ease',
          _hover: {
            color: mode('black', 'gray.800')(props),
            backgroundColor: mode('accent.50', 'accent.50')(props),
            borderColor: 'accent.50',
          },

          _active: {
            backgroundColor: mode('accent.50', 'accent.50')(props),
          },
        }),
        secondary: (props: any) => ({
          rounded: 'full',
          color: mode('black', 'brand.100')(props),
          backgroundColor: 'transparent',
          border: '1px solid',
          borderColor: mode('black', 'white')(props),
          transition: 'all .3s ease',
          _hover: {
            color: mode('accent.50', 'accent.50')(props),
            borderColor: mode('accent.50', 'accent.50')(props),
          },

          _active: {
            color: mode('accent.50', 'accent.50')(props),
          },
        }),
        tertiary: (props: any) => ({
          fontSize: 'sm',
          rounded: 'full',
          color: mode('black', 'white')(props),
          backgroundColor: mode('brand.100', 'gray.700')(props),
          transition: 'all .3s ease',
          _hover: {
            color: mode('black', 'black')(props),
            backgroundColor: 'accent.50',
          },

          _active: {
            color: mode('black', 'black')(props),
            backgroundColor: 'accent.50',
          },
        }),
      },
    },
  },
  breakpoints,
});

export default theme;
