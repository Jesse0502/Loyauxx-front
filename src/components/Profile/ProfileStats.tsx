import React from 'react';
import {
  Box,
  Heading,
  Text,
  Flex,
  Stack,
  Avatar,
  Link,
  Center,
  Image,
  HStack,
  Grid,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { BsThreeDots } from 'react-icons/bs';
import '../../App.css';
function ProfileStats(props: any) {
  const location = useLocation();
  return (
    <>
      <Box px='7' className='scrollBar' overflow={'auto'}>
        <Heading color='blackAlpha.800'>Current Rank : 23</Heading>
        <Stack>
          <Heading fontSize='4xl' color='blackAlpha.800'>
            Competitions participated (4)
          </Heading>
          <Stack pt='3' color='blackAlpha.700'>
            <Text>L-BAS May 2021</Text>
            <Text>L-BAS June 2021</Text>
            <Text>L-BAS July 2021</Text>
            <Text>L-BAS Aug 2021</Text>
          </Stack>
        </Stack>
        <Stack pt='5'>
          <Heading fontSize='4xl' color='blackAlpha.800'>
            Competitions won (2)
          </Heading>
          <Stack pt='3' color='blackAlpha.700'>
            <Text>L-BAS July 2021</Text>
            <Text>L-BAS Aug 2021</Text>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}

export default ProfileStats;
