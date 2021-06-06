import { Td, Th, Tr, Box, Tag } from '@chakra-ui/react';
import React from 'react';

export const BorderCountries: React.FC<{ borders: string[] }> = ({
  borders,
}) => {
  if (!borders.length) return null;
  return (
    <Tr>
      <Th>Borders</Th>
      <Td>
        <Box display={'block'}>
          {borders.map((border) => (
            <Tag size={'md'} key={border} variant="outline" colorScheme="cyan" m={1} mr={2}>
              {border}
            </Tag>
          ))}
        </Box>
      </Td>
    </Tr>
  );
};
