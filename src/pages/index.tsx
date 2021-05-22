import React from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from '../theme';
import { ToggleColorMode } from '../components/ToggleColorMode';
import { Flag } from '../components/Flag';
import { GeoLocation } from '../components/GeoLocation';

export const App: React.FC = () => {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ToggleColorMode />
      <Flag code={'ind'} />
      <GeoLocation code={'ind'} />
    </ChakraProvider>
  );
};
