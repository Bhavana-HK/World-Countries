import React from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from '../theme';
import { ToggleColorMode } from '../components/ToggleColorMode';
import { Flag } from '../components/Flag';
import { GeoLocation } from '../components/GeoLocation';
import ErrorBoundary from '../components/ErrorBounday';

export const App: React.FC = () => {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ErrorBoundary>
        <ToggleColorMode />
        {['aus', 'ind', 'swe', 'eew'].map((country) => (
          <div key={country}>
            <Flag code={country} />
            <GeoLocation code={country} />
          </div>
        ))}
      </ErrorBoundary>
    </ChakraProvider>
  );
};
