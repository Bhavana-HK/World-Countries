import {
  Box,
  SimpleGrid,
  Text,
  Table,
  Tbody,
  Td,
  Th,
  Tr,
  Grid,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import countries from '../resources/countries';
import { GeoLocation } from './GeoLocation';
import { CountryType } from '../Country';
import { Flag } from './Flag';
import { Wrapper } from './Wrapper';
import { CurrencyComponent } from './CurrencyComponent';
import { LanguagesComponent } from './LanguagesComponent';
import { DomainsComponent } from './DomainsComponent';
import { RegionComponent } from './RegionComponent';
import { BorderCountries } from './BorderCountries';

interface CountryProps {
  countryIdx: number;
}

export const Country: React.FC<CountryProps> = ({ countryIdx }) => {
  const { colorMode } = useColorMode();
  const country: CountryType = countries[countryIdx];
  const flag = country.flag.replace(/\u([0-9A-F]{4})/gi, (_, g) =>
    String.fromCharCode(parseInt(`0x${g}`))
  );
  return (
    <Box p={4}>
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
            <Table size="sm" borderRadius={'md'}>
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
          <Wrapper borderRadius={'md'}>
            <Flag code={country.cca3.toLowerCase()} />
          </Wrapper>
        </Box>
        <Wrapper borderRadius={'md'}>
          <GeoLocation code={country.cca3.toLowerCase()} />
        </Wrapper>
      </SimpleGrid>
    </Box>
  );
};
