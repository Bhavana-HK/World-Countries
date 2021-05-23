import {
  Box,

  Text,








  useColorMode
} from '@chakra-ui/react';
import React from 'react';

export const RegionComponent: React.FC<{ region: string; }> = ({ region }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      bg={colorMode === 'light' ? 'cyan.700' : 'cyan.900'}
      py={1}
      color={'white'}
      textAlign={'center'}
      borderRadius={'md'}
    >
      <Text textTransform={'capitalize'}>{region}</Text>
    </Box>
  );
};
