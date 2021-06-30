import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Box, Container, SimpleGrid, Flex } from '@chakra-ui/react';
import React, { useEffect, useReducer } from 'react';
import { useMemo } from 'react';
import { SwipeableHandlers, useSwipeable } from 'react-swipeable';
import { Country } from '../components/Country';
import { ToggleColorMode } from '../components/ToggleColorMode';
import { Flag } from '../components/Flag';
import { Wrapper } from '../components/Wrapper';
import { countryCodes } from '../resources/countryCodes';
import { shuffle } from '../utils/shuffle';
import { ContextActionButton } from '../components/ContextActionButton';
import { independantCountryIndexs } from '../resources/independantCountryIndexs';
import { reducer, initialState } from './state';
import { NEXT_CLICK, PREV_CLICK, REGION_CHANGE } from './actions';
import { regionIndexes, Region } from '../resources/regions';

export const InfiniteRoll: React.FC<{ region?: Region }> = ({ region }) => {
  const shuffledIndexes = useMemo(
    () =>
      region
        ? shuffle(regionIndexes[region])
        : shuffle(independantCountryIndexs),
    [region]
  );

  const [{ index, flag }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    handleRegion(region);
  }, [region]);

  const handleNext = () => dispatch({ type: NEXT_CLICK });
  const handlePrev = () => dispatch({ type: PREV_CLICK });
  const handleRegion = (region?: Region) =>
    dispatch({ type: REGION_CHANGE, region });

  const handlers: SwipeableHandlers = useSwipeable({
    delta: 30,
    onSwipedLeft: (eventData) => {
      console.log('User Swiped!', eventData);
      handleNext();
    },
    onSwipedRight: (eventData) => {
      console.log('User swiped right!', eventData);
      handlePrev();
    },
  });

  return (
    <Box pb={8} minH={'90vh'}>
      {flag ? (
        <div {...handlers}>
          <Container maxW="container.md">
            <Wrapper pt={8}>
              <Flag code={countryCodes[shuffledIndexes[index]]} />
            </Wrapper>
          </Container>
        </div>
      ) : (
        <Country countryIdx={shuffledIndexes[index]} handlers={handlers} />
      )}

      <Container maxW="container.md">
        <Flex p={4} mb={5}>
          <ToggleColorMode />
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={4} flex={1}>
            <ContextActionButton onClick={handlePrev} disabled={index === 0}>
              <ArrowLeftIcon /> &nbsp;Previous
            </ContextActionButton>

            <ContextActionButton onClick={handleNext} primary>
              {flag ? 'Reveal Country' : 'Next'} &nbsp;
              <ArrowRightIcon />
            </ContextActionButton>
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
};
