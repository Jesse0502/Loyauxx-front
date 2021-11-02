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
      <Box
        w={{ lg: '25em' }}
        px='2'
        pos={{ lg: 'fixed' }}
        bg={{ lg: 'wall' }}
        h={{ lg: '92vh' }}
        className='scrollBar'
        overflow={'auto'}>
        <Heading
          display={{ lg: 'block', base: 'none' }}
          fontSize={'5xl'}
          textAlign={'center'}
          color='blackAlpha.800'
          pt='2'>
          {props.id}'s stats
        </Heading>
        <Stack pt={{ lg: '10' }}>
          <Heading fontSize='2xl' color='blackAlpha.800'>
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
          <Heading fontSize='2xl' color='blackAlpha.800'>
            Competitions won (2)
          </Heading>
          <Stack pt='3' color='blackAlpha.700'>
            <Text>L-BAS July 2021</Text>
            <Text>L-BAS Aug 2021</Text>
          </Stack>
        </Stack>
        <Stack pt='5' pr='5'>
          <Heading fontSize='4xl' color='blackAlpha.800'>
            Top Tracks
          </Heading>
          <Stack pt='3' color='blackAlpha.700'>
            {Array.from(Array(4)).map(() => (
              <Flex py='2' justify={'space-between'}>
                <Flex alignItems='center'>
                  <Avatar size='lg' />
                  <Box pl='3'>
                    <Text fontSize={'xl'} fontWeight={'bold'}>
                      Track Name
                    </Text>
                    <Text fontSize={'sm'}>Artist 1</Text>
                  </Box>
                </Flex>
                <BsThreeDots size='24' />
              </Flex>
            ))}
          </Stack>
        </Stack>
      </Box>
    </>
  );
}

export default ProfileStats;
