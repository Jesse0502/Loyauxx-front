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
function SimilarArtists() {
  return (
    <Box pos='fixed' w='23%' ml='3'>
      <Box>
        <Heading color='blackAlpha.700' py='3' fontSize='200%'>
          Similar artists
        </Heading>

        <Stack
          py='3'
          rounded={'xl'}
          color='blackAlpha.700'
          w='full'
          bg='wall'
          px='3'>
          {Array.from(Array(4)).map(() => (
            <Flex py='2' color='blackAlpha.800' justify={'space-between'}>
              <Flex alignItems='center'>
                <Avatar size='md' />
                <Box pl='3'>
                  <Text fontSize={'lg'} fontWeight={'bold'}>
                    Name
                  </Text>
                  <Text fontSize={'sm'}>@username</Text>
                </Box>
              </Flex>
              <BsThreeDots size='24' />
            </Flex>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default SimilarArtists;
