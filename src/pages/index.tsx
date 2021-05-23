import React from 'react';
import { ChakraProvider, ColorModeScript, Box } from '@chakra-ui/react';
import theme from '../theme';
import ErrorBoundary from '../components/ErrorBounday';
import { InfiniteRoll } from './InfiniteRoll';
import { Footer } from '../components/Footer';

export const App: React.FC = () => {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ErrorBoundary>
        <Box minHeight={'100%'}>
          <InfiniteRoll />
        </Box>
        <Footer />
      </ErrorBoundary>
    </ChakraProvider>
  );
};
