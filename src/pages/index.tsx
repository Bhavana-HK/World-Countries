import React from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from '../theme';
import ErrorBoundary from '../components/ErrorBounday';
import { InfiniteRoll } from './InfiniteRoll';

export const App: React.FC = () => {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ErrorBoundary>
        <InfiniteRoll />
      </ErrorBoundary>
    </ChakraProvider>
  );
};
