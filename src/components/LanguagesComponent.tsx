import {
  Text,






  HStack,
  Tag
} from '@chakra-ui/react';
import React from 'react';
import { Langauages } from '../Country';

export const LanguagesComponent: React.FC<{ lang: Langauages; }> = ({ lang }) => {
  const keys = Object.keys(lang);

  return (
    <HStack spacing={4}>
      {keys.map((key) => (
        <Tag size={'md'} key={key} variant="solid" colorScheme="cyan">
          <Text>{lang[key]}</Text>
        </Tag>
      ))}
    </HStack>
  );
};
