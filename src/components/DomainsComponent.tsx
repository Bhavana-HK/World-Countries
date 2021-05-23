import {
  Text,






  HStack,


  Badge
} from '@chakra-ui/react';
import React from 'react';

export const DomainsComponent: React.FC<{ tlds: string[]; }> = ({ tlds }) => {
  return (
    <HStack spacing={4}>
      {tlds.map((tld) => (
        <Badge
          variant="subtle"
          colorScheme="cyan"
          borderRadius={'sm'}
          key={tld}
        >
          <Text p={1}>{tld}</Text>
        </Badge>
      ))}
    </HStack>
  );
};
