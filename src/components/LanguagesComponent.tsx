import { Text, Box, Tag } from '@chakra-ui/react';
import React from 'react';
import { Langauages } from '../Country';

export const LanguagesComponent: React.FC<{ lang: Langauages }> = ({
  lang,
}) => {
  const keys = Object.keys(lang);

  return (
    <Box display={'block'}>
      {keys.map((key) => (
        <Tag size={'md'} key={key} variant="solid" colorScheme="cyan" m={1} mr={2}>
          <Text>{lang[key]}</Text>
        </Tag>
      ))}
    </Box>
  );
};
