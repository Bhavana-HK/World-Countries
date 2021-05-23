import {
  Td,
  Th,
  Tr,

  HStack,
  Tag
} from '@chakra-ui/react';
import React from 'react';

export const BorderCountries: React.FC<{ borders: string[]; }> = ({ borders }) => {
  if (!borders.length)
    return null;
  return (
    <Tr>
      <Th>Borders</Th>
      <Td>
        <HStack spacing={4}>
          {borders.map((border) => (
            <Tag size={'md'} key={border} variant="outline" colorScheme="cyan">
              {border}
            </Tag>
          ))}
        </HStack>
      </Td>
    </Tr>
  );
};
