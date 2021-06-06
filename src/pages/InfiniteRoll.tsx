import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Box, Container, SimpleGrid, Flex } from '@chakra-ui/react';
import React, { useReducer } from 'react';
import { useMemo } from 'react';
import { SwipeableHandlers, useSwipeable } from 'react-swipeable';
import { Country } from 'src/components/Country';
import { ToggleColorMode } from 'src/components/ToggleColorMode';
import { Flag } from '../components/Flag';
import { Wrapper } from '../components/Wrapper';
import { countryCodes } from '../resources/countryCodes';
import { shuffle } from '../utils/shuffle';
import { ContextActionButton } from '../components/ContextActionButton';
import { independantCountryIndexs } from '../resources/indCountryIdx';

type state = {
  index: number;
  flag: boolean;
};
const initialState: state = {
  index: 0,
  flag: true,
};

const NEXT_CLICK = 'NEXT_CLICK';
const PREV_CLICK = 'PREV_CLICK';

interface nextClickAction {
  type: typeof NEXT_CLICK;
}

interface prevClickAction {
  type: typeof PREV_CLICK;
}

type actions = nextClickAction | prevClickAction;

const reducer = (state = initialState, action: actions): state => {
  switch (action.type) {
    case NEXT_CLICK:
      if (state.flag)
        return {
          ...state,
          flag: false,
        };
      return {
        index:
          state.index + 1 >= independantCountryIndexs.length
            ? 0
            : state.index + 1,
        flag: true,
      };

    case PREV_CLICK:
      if (!state.flag)
        return {
          ...state,
          flag: true,
        };
      return {
        index:
          state.index - 1 < 0
            ? independantCountryIndexs.length - 1
            : state.index - 1,
        flag: false,
      };
    default:
      return state;
  }
};

export const InfiniteRoll: React.FC = () => {
  const [{ index, flag }, dispatch] = useReducer(reducer, initialState);
  const shuffledIndexes = useMemo(() => shuffle(independantCountryIndexs), []);

  const handleNext = () =>
    dispatch({ type: NEXT_CLICK });

  const handlePrev = () => 
    dispatch({ type: PREV_CLICK });

  const handlers: SwipeableHandlers = useSwipeable({
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
            <ContextActionButton onClick={handlePrev}>
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
