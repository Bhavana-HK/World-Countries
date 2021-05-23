import { Box, Text } from '@chakra-ui/react';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <Box
      my={8}
      bottom={0}
      width={'100%'}
      textAlign={'center'}
    >
      <Text fontSize={'0.7rem'} fontWeight={'thin'}>
        By Bhavana HK
      </Text>
    </Box>
  );
};
