import {
  Text,






  HStack,
  Tag
} from '@chakra-ui/react';
import React from 'react';
import { Currencies } from '../Country';

export const CurrencyComponent: React.FC<{ curr: Currencies; }> = ({ curr }) => {
  const keys = Object.keys(curr);
  return (
    <HStack spacing={4}>
      {keys.map((key) => (
        <HStack spacing={4} key={key}>
          <Tag
            size={'md'}
            key={curr[key].name}
            variant="solid"
            colorScheme="cyan"
          >
            <Text>
              {curr[key].name}
              <span
                style={{
                  fontWeight: 'lighter',
                  fontSize: '0.9rem',
                  marginLeft: '0.5rem',
                }}
              >
                {key}
              </span>
            </Text>
          </Tag>
          <Tag size={'md'} key={key} variant="outline" colorScheme="cyan">
            <Text fontWeight="extrabold">{curr[key].symbol}</Text>
          </Tag>
        </HStack>
      ))}
    </HStack>
  );
};
