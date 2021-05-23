type NativeName = {
  official: string;
  common: string;
};

type NativeNames = Record<string, NativeName>;

interface Name {
  common: string;
  official: string;
  native: NativeNames;
}

type TopLevelDomain = string[];

type Currency = {
  name: string;
  symbol: string;
};

// key is currency code
export type Currencies = Record<string, Currency>;

type InternationalDirectDialinginfo = {
  root: string;
  suffixes: string[];
};

// key is the language code
export type Langauages = Record<string, string>;

type Translation = {
  official: string; // official name translation
  common: string; // common name translation
};
// key is the langauge code
export type Translations = Record<string, Translation>;

type LatLng = [number, number];

type Demonym = {
  f: string;
  m: string;
};
type Demonyms = Record<string, Demonym>;

export interface CountryType {
  name: Name;
  tld: TopLevelDomain;
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: InternationalDirectDialinginfo;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Langauages;
  latlng: LatLng;
  landlocked: boolean;
  borders: string[];
  area: number;
  flag: string;
  demonyms: Demonyms;
  translations: Translations;
}
