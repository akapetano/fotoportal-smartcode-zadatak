import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { I18nextProvider } from 'react-i18next';
import theme from '../src/theme';
import i18n from '../i18n';
import SimpleReactLightbox from 'simple-react-lightbox';

function App({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <ChakraProvider theme={theme}>
        <SimpleReactLightbox>
          <Component {...pageProps} />
        </SimpleReactLightbox>
      </ChakraProvider>
    </I18nextProvider>
  );
}

export default App;
