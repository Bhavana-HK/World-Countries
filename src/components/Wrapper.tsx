import {
  Box,

  BoxProps
} from '@chakra-ui/react';
import React from 'react';

export const Wrapper: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box mb={2} p={2} {...props}>
      {children}
    </Box>
  );
};
