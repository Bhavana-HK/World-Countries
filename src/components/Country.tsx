import {
  Box,
  SimpleGrid,
  BoxProps,
  Text,
  Table,
  Tbody,
  Td,
  Th,
  Tr,
  Grid,
  HStack,
  Tag,
  useColorMode,
  Badge,
} from '@chakra-ui/react';
import React from 'react';
import countries from '../resources/countries';
import { GeoLocation } from './GeoLocation';
import { CountryType, Currencies, Langauages } from '../Country';
import { Flag } from './Flag';

interface CountryProps {
  countryIdx: number;
}

const Wrapper: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box m={2} p={2} {...props}>
      {children}
    </Box>
  );
};

const CurrencyComponent: React.FC<{ curr: Currencies }> = ({ curr }) => {
  const keys = Object.keys(curr);
  return (
    <HStack spacing={4}>
      {keys.map((key) => (
        <HStack spacing={4}>
          <Tag size={'md'} key={key} variant="solid" colorScheme="cyan">
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

const LanguagesComponent: React.FC<{ lang: Langauages }> = ({ lang }) => {
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

const DomainsComponent: React.FC<{ tlds: string[] }> = ({ tlds }) => {
  return (
    <HStack spacing={4}>
      {tlds.map((tld) => (
        <Badge variant="subtle" colorScheme="cyan" borderRadius={"sm"}>
          <Text p={1}>{tld}</Text>
        </Badge>
      ))}
    </HStack>
  );
};

const RegionComponent: React.FC<{ region: string }> = ({ region }) => {
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

const BorderCountries: React.FC<{ borders: string[] }> = ({ borders }) => {
  if (!borders.length) return null;
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

export const Country: React.FC<CountryProps> = ({ countryIdx }) => {
  const { colorMode } = useColorMode();
  const country: CountryType = countries[countryIdx];
  const flag = country.flag.replace(/\u([0-9A-F]{4})/gi, (_, g) =>
    String.fromCharCode(parseInt(`0x${g}`))
  );
  return (
    <Box m={[4]}>
      <Wrapper>
        <Text fontSize={'6xl'} fontWeight={'extrabold'}>
          {country.name.common} &nbsp; {flag}
        </Text>
      </Wrapper>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={4}>
        <Box>
          <Wrapper textAlign={'center'}>
            <Box
              bg={colorMode === 'light' ? 'cyan.100' : 'cyan.700'}
              px={4}
              py={1}
              borderRadius={'md'}
            >
              <Text fontSize={'3xl'}>{country.capital.join(', ')}</Text>
              <code style={{ textTransform: 'uppercase', fontSize: '0.9rem' }}>
                capital{country.capital.length > 1 && 's'}
              </code>
            </Box>
          </Wrapper>
          <Wrapper>
            <Table size="sm" borderRadius={'md'} boxShadow="lg">
              <Tbody>
                <Tr>
                  <Th>Currency</Th>
                  <Td>
                    <CurrencyComponent curr={country.currencies} />
                  </Td>
                </Tr>
                <Tr>
                  <Th>Domains</Th>
                  <Td>
                    <DomainsComponent tlds={country.tld} />
                  </Td>
                </Tr>
                <Tr>
                  <Th>Languages</Th>
                  <Td>
                    <LanguagesComponent lang={country.languages} />
                  </Td>
                </Tr>
                <BorderCountries borders={country.borders} />
              </Tbody>
            </Table>
          </Wrapper>
          <Wrapper>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              <RegionComponent region={country.region} />
              <RegionComponent region={country.subregion} />
            </Grid>
          </Wrapper>
          <Wrapper></Wrapper>
          <Wrapper borderRadius={'md'}>
            <Flag code={country.cca3.toLowerCase()} />
          </Wrapper>
        </Box>
        <Box borderRadius={'md'}>
          <GeoLocation code={country.cca3.toLowerCase()} />
        </Box>
      </SimpleGrid>
    </Box>
  );
};
