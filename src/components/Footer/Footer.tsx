import React from 'react';
import '../../App.css';
import {
  Box,
  Heading,
  HStack,
  Text,
  Center,
  List,
  ListItem,
  VStack,
  Flex,
  Stack,
  Wrap,
} from '@chakra-ui/react';
function Footer() {
  return (
    <Box>
      <HStack
        color='bgText'
        bg='main'
        h={{ lg: '72', base: '80' }}
        w='full'
        overflow='hidden'
        flexDir={{ base: 'column', lg: 'row' }}
        mt='20'
        px={{ lg: '24', md: '20', base: '6' }}
        spacing={{ lg: '40', md: '20', base: '16' }}>
        <Text fontSize={{ lg: '7xl', md: '6xl', base: '4xl' }} className='logo'>
          LOYAUXX
        </Text>
        <Box pb='0'>
          <Heading pb='5'>Navigation</Heading>
          <Wrap w='full' direction={'row'} spacing='3'>
            <Text>Lorem ipsum dolor andae eum labore earum!</Text>
            <Text>Loyauxx</Text>
            <Text>Loyauxx</Text>
            <Text>Loyauxx</Text>
          </Wrap>
        </Box>
      </HStack>
      <Box bg='mainLight'>
        <Center color='blackAlpha.700'>Loyauxx.com 2021</Center>
      </Box>
    </Box>
  );
}

export default Footer;
