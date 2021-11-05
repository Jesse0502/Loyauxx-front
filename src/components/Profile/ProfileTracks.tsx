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
  AspectRatio,
  Button,
} from '@chakra-ui/react';
function ProfileTracks() {
  return (
    <Box px='5'>
      <Heading color='blackAlpha.700'>2021</Heading>
      <Stack my='5'>
        <AspectRatio ratio={1} h='20'>
          <iframe src='https://embed.spotify.com/?uri=spotify:track:5nTtCOCds6I0PHMNtqelas'></iframe>
        </AspectRatio>
        <AspectRatio ratio={1} h='20'>
          <iframe src='https://embed.spotify.com/?uri=spotify:track:5nTtCOCds6I0PHMNtqelas'></iframe>
        </AspectRatio>
        <AspectRatio ratio={1} h='20'>
          <iframe src='https://embed.spotify.com/?uri=spotify:track:5nTtCOCds6I0PHMNtqelas'></iframe>
        </AspectRatio>
      </Stack>
      <Heading color='blackAlpha.700'>2020</Heading>
      <Stack my='5'>
        <AspectRatio ratio={1} h='20'>
          <iframe src='https://embed.spotify.com/?uri=spotify:track:5nTtCOCds6I0PHMNtqelas'></iframe>
        </AspectRatio>
        <AspectRatio ratio={1} h='20'>
          <iframe src='https://embed.spotify.com/?uri=spotify:track:5nTtCOCds6I0PHMNtqelas'></iframe>
        </AspectRatio>
      </Stack>
    </Box>
  );
}

export default ProfileTracks;
