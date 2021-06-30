import { Button, ButtonProps, useColorMode } from '@chakra-ui/react';
import React from 'react';

export const ContextActionButton: React.FC<
  ButtonProps & { primary?: boolean }
> = ({ primary, ...props }) => {
  const { colorMode } = useColorMode();
  const primaryColor = colorMode === 'light' ? 'cyan.100' : 'cyan.900';
  const secondaryColor = colorMode === 'light' ? 'gray.200' : 'gray.700';
  return (
    <Button
      bg={primary ? primaryColor : secondaryColor}
      _hover={{ bg: colorMode === 'light' ? 'cyan.300' : 'cyan.700' }}
      mr={2}
      {...props}
    >
      {props.children}
    </Button>
  );
};
