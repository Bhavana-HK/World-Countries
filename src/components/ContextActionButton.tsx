import {
  Button,
  ButtonProps,


  useColorMode
} from '@chakra-ui/react';
import React from 'react';

export const ContextActionButton: React.FC<ButtonProps> = (props) => {
  const { colorMode } = useColorMode();
  return (
    <Button
      bg={colorMode === 'light' ? 'cyan.100' : 'cyan.800'}
      _hover={{ bg: colorMode === 'light' ? 'cyan.300' : 'cyan.600' }}
      mr={2}
      {...props}
    >
      {props.children}
    </Button>
  );
};
