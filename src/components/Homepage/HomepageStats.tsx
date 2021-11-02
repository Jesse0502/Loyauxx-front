import React, { useState } from 'react';
import {
  Grid,
  Box,
  GridItem,
  Heading,
  Text,
  Flex,
  Image,
  Avatar,
  HStack,
  Stack,
  Link,
  Button,
  VStack,
} from '@chakra-ui/react';
import { setInterval } from 'timers';
import { motion } from 'framer-motion';
function HomepageStats() {
  const [numberAnimation, setNumberAnimation] = useState(0);
  const numberAnimate = (num: number) => {
    for (let i = 0; i <= num; i++) {
      setTimeout(() => {
        console.log(i);
        setNumberAnimation(i);
      }, 1000 + i * 100);
      return num;
    }
  };
  return (
    <Box>
      <Stack direction={'row'} spacing='5' justify='center'>
        {[
          { num: 23, text: 'Competitions Conducted' },
          { num: 40, text: 'Artists Signed up' },
          { num: 80, text: 'Total Winners in L-BAS' },
        ].map(({ num, text }) => (
          <Stack
            w='72'
            border='1px'
            textAlign={'center'}
            p='3'
            color='blackAlpha.900'
            borderBottomRadius={'lg'}
            borderTop={'0px'}>
            <Heading fontSize={'6xl'}>{numberAnimate(num)}</Heading>

            <Text fontSize={'sm'} color='blackAlpha.600'>
              {text}
            </Text>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}

export default HomepageStats;
