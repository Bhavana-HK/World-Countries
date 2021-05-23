import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Box, Container, SimpleGrid, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useMemo } from 'react';
import { SwipeableHandlers, useSwipeable } from 'react-swipeable';
import { Country } from 'src/components/Country';
import { ToggleColorMode } from 'src/components/ToggleColorMode';
import { Flag } from '../components/Flag';
import { Wrapper } from '../components/Wrapper';
import { countryCodes } from '../resources/countryCodes';
import { shuffle } from '../utils/shuffle';
import { ContextActionButton } from '../components/ContextActionButton';

export const InfiniteRoll: React.FC = () => {
  const [indexPointer, setIndexPointer] = useState(0);
  const [isFlag, setIsFlag] = useState(true);
  const countryIndexes = useMemo(() => {
    const range = Array.apply(null, Array(countryCodes.length));
    const indexes = range.map((_value, index) => index);
    return shuffle(indexes);
  }, []);

  const handleNext = () => {
    if (!isFlag)
      setIndexPointer((index) => {
        if (index + 1 >= countryCodes.length) return 0;
        return index + 1;
      });
    setIsFlag((flag) => !flag);
  };

  const handlePrev = () => {
    setIndexPointer((index) => {
      if (index - 1 < 0) return 0;
      return index - 1;
    });
    setIsFlag(true);
  };

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
    <Box>
        {isFlag ? (
          <div {...handlers}>
          <Container maxW="container.md">
            <Wrapper pt={8}>
              <Flag code={countryCodes[countryIndexes[indexPointer]]} />
            </Wrapper>
          </Container>
          </div>
        ) : (
          <Country countryIdx={countryIndexes[indexPointer]} handlers={handlers}/>
        )}
      
      <Container maxW="container.md">
        <Flex p={4} mb={5}>
          <ToggleColorMode />
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={4} flex={1}>
            <ContextActionButton onClick={handlePrev}>
              <ArrowLeftIcon /> &nbsp;Previous
            </ContextActionButton>
            <ContextActionButton onClick={handleNext} primary>
              {isFlag ? 'Reveal Country' : 'Next'} &nbsp;
              <ArrowRightIcon />
            </ContextActionButton>
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
};
