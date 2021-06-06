import { Text, Badge, Box } from '@chakra-ui/react';
import React from 'react';

export const DomainsComponent: React.FC<{ tlds: string[] }> = ({ tlds }) => {
  return (
    <Box display={'block'} >
      {tlds.map((tld) => (
        <Badge
          variant="subtle"
          colorScheme="cyan"
          borderRadius={'sm'}
          key={tld}
          m={1}
          mr={2}
        >
          <Text p={1}>{tld}</Text>
        </Badge>
      ))}
    </Box>
  );
};
