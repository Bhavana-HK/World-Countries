import {
  Button,
  ButtonProps,


  useColorMode
} from '@chakra-ui/react';
import React from 'react';

export const ContextActionButton: React.FC<ButtonProps & {primary?:boolean}> = ({primary, ...props}) => {
  const { colorMode } = useColorMode();
  return (
    <Button
      bg={primary ? colorMode === 'light' ? 'cyan.100' : 'cyan.900': undefined}
      _hover={{ bg: colorMode === 'light' ? 'cyan.300' : 'cyan.700' }}
      mr={2}
      {...props}
    >
      {props.children}
    </Button>
  );
};
