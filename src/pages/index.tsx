import React from 'react';
import { ChakraProvider, ColorModeScript, Box } from '@chakra-ui/react';
import theme from '../theme';
import ErrorBoundary from '../components/ErrorBounday';
import { InfiniteRoll } from './InfiniteRoll';
import { Footer } from '../components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { regions, Region } from '../resources/regions';

export const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Router>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ErrorBoundary>
          <Box minHeight={'100%'}>
            <Switch>
              {regions.map((region: Region) => (
                <Route
                  key={region}
                  path={`/${region}`}
                  exact={true}
                  render={() => <InfiniteRoll region={region} />}
                />
              ))}
              <Route exact path={'/'}>
                <InfiniteRoll />
              </Route>
              <Redirect to={'/'} />
            </Switch>
          </Box>
          <Footer />
        </ErrorBoundary>
      </Router>
    </ChakraProvider>
  );
};
