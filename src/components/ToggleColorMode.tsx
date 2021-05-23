import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react';
import React from 'react';
import { ContextActionButton } from './ContextActionButton';

export const ToggleColorMode: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <ContextActionButton onClick={toggleColorMode}>
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </ContextActionButton>
  );
};
