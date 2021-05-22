import React from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from '../theme';
import { ToggleColorMode } from '../components/ToggleColorMode';

export const App: React.FC = () => {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ToggleColorMode/>
      <>hi</>
    </ChakraProvider>
  );
};
