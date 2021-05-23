import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonProps,
  Container,
  SimpleGrid,
  useColorMode,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useMemo } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Country } from 'src/components/Country';
import { Flag } from '../components/Flag';
import { Wrapper } from '../components/Wrapper';
import { countryCodes } from '../resources/countryCodes';
import { shuffle } from '../utils/shuffle';

const ContextActionButton: React.FC<ButtonProps> = (props) => {
  const { colorMode } = useColorMode();
  return (
    <Button
      bg={colorMode === 'light' ? 'cyan.100' : 'cyan.800'}
      _hover={{ bg: colorMode === 'light' ? 'cyan.300' : 'cyan.600' }}
      {...props}
    >
      {props.children}
    </Button>
  );
};

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

  const handlers = useSwipeable({
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
      <div {...handlers}>
        {isFlag ? (
          <Container maxW="container.md">
            <Wrapper>
              <Flag code={countryCodes[countryIndexes[indexPointer]]} />
            </Wrapper>
          </Container>
        ) : (
          <Country countryIdx={countryIndexes[indexPointer]} />
        )}
      </div>
      <Container maxW="container.md">
        <SimpleGrid p={4} mb={5} columns={{ sm: 1, md: 2 }} spacing={4}>
          <ContextActionButton onClick={handlePrev}>
            <ArrowLeftIcon /> &nbsp;Previous
          </ContextActionButton>
          <ContextActionButton onClick={handleNext}>
            {isFlag ? 'Reveal Country' : 'Next'} &nbsp;
            <ArrowRightIcon />
          </ContextActionButton>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
