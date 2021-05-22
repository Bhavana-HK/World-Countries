import { Button, useColorMode } from '@chakra-ui/react';
import React from 'react';

export const ToggleColorMode: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button onClick={toggleColorMode}>
      Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
    </Button>
  );
};
