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
  Tabs,
  Tab,
  TabList,
  TabPanel,
  Wrap,
  TabPanels,
  Button,
  Divider,
} from '@chakra-ui/react';
import { ImUser, ImStatsDots } from 'react-icons/im';
import { GrSettingsOption } from 'react-icons/gr';
import { MdOutlineSend } from 'react-icons/md';
import { BsSpotify } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
function Navigation(props: any) {
  return (
    <Box pos='relative' h='92vh' w='full' zIndex={'1'}>
      <Stack
        pos='fixed'
        h='92vh'
        overflowX={'hidden'}
        overflowWrap={'anywhere'}
        w='14.5%'
        bg='wall'
        pt='7'>
        {[
          { text: 'Profile', icon: <ImUser size='28' /> },
          { text: 'Stats', icon: <ImStatsDots size='28' /> },
          { text: 'Submit your track', icon: <MdOutlineSend size='28' /> },
          { text: 'Settings', icon: <GrSettingsOption size='28' /> },
        ].map(({ text, icon }) => (
          <Box>
            <Stack
              bg={props.current === text ? 'whitesmoke' : 'wall'}
              borderLeft={props.current === text ? '4px' : '0px'}
              borderLeftColor='main'
              onClick={() => props.setProfileNav(text)}
              mt='-2'
              justify={{ base: 'center', md: 'flex-start' }}
              py='5'
              fontWeight={props.current === text ? 'bold' : 'normal'}
              px={'5'}
              _hover={{
                bg: props.current === text ? '' : 'blackAlpha.200',
                cursor: 'pointer',
              }}
              direction={'row'}>
              <Box opacity={props.current === text ? '1' : '0.5'}>{icon}</Box>
              <Text
                display={{ base: 'none', md: 'flex' }}
                fontSize='xl'
                opacity={0.8}>
                {text}
              </Text>
            </Stack>

            <Divider color='black' />
          </Box>
        ))}
        <Stack
          px='4'
          spacing='3'
          display={{ base: 'none', md: 'flex' }}
          direction={{ xl: 'row', base: 'column' }}
          color='blackAlpha.700'>
          <Stack direction={'row'} alignItems={'center'} spacing='2'>
            <BsSpotify color='#1DB954' />
            <Text display={{ base: 'none', md: 'flex' }}>Spotify</Text>
          </Stack>
          <Stack direction={'row'} alignItems={'center'} spacing='2'>
            <AiFillYoutube size='24' color='#FF0000' />

            <Text display={{ base: 'none', md: 'flex' }}>Youtube</Text>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Navigation;
