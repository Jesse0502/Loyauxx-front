import React, { useState } from 'react';
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
  TabPanels,
  Button,
} from '@chakra-ui/react';
import { ImCross } from 'react-icons/im';
import { BiLinkExternal } from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import djNight from '../../assets/Group12.png';
import Footer from '../Footer/Footer';
import ProfileStats from './ProfileStats';
import { FaLink } from 'react-icons/fa';
import SimilarArtists from './SimilarArtists';
import ProfileTracks from './ProfileTracks';
import Navigation from './Navigation';
import Submit from './Submit';
import Settings from './Settings';

function Profile(props: any) {
  const profileId = props.match.params.id;
  const [showSubmitNow, setShowSubmitNow] = useState(true);
  const [profileNav, setProfileNav] = useState('Profile');

  return (
    <>
      <Stack direction='row' spacing='0'>
        <Box flex='1'>
          <Navigation setProfileNav={setProfileNav} current={profileNav} />
        </Box>
        <Box flex='6'>
          {profileNav == 'Profile' && (
            <Box>
              <Image src={djNight} h={'32vh'} w='full' objectFit={'cover'} />
              <Box pos='relative' px={{ lg: '10', base: '5' }}>
                <Avatar
                  pos='absolute'
                  size={'2xl'}
                  top='-16'
                  left={{ lg: '10', base: '5' }}
                />
                <Flex>
                  <Stack pt='16' pb='5' spacing='3'>
                    <Heading fontSize={{ lg: '5xl', base: '5xl' }}>
                      Name
                    </Heading>
                    <Text color='blackAlpha.700'>@username</Text>
                    <Text fontSize={{ base: 'md', md: 'lg' }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deleniti tempore consectetur illum adipisci odio
                      voluptatem sint incidunt cumque? vitae possimus harum
                      molestias culpa sit eum expedita modi officia?
                    </Text>
                    <HStack alignItems={'center'}>
                      <Box display={{ base: 'none', md: 'block' }}>
                        <FaLink color='#474747' size='' />
                      </Box>
                      <Link
                        fontSize={{ base: 'md', md: 'lg' }}
                        color='blue.600'
                        to={'https://github.com/Jesse0502/Loyauxx-front'}>
                        https://github.com/Jesse0502/Loyauxx-front
                      </Link>
                    </HStack>
                  </Stack>
                </Flex>
              </Box>
              <Tabs mt='5' isFitted variant='enclosed'>
                <TabList>
                  <Tab>Tracks</Tab>
                  <Tab>Top Tracks</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <ProfileTracks />
                  </TabPanel>
                  <TabPanel>
                    <ProfileTracks />
                  </TabPanel>
                </TabPanels>
              </Tabs>{' '}
            </Box>
          )}
          {profileNav === 'Stats' && <ProfileStats />}
          {profileNav === 'Submit your track' && <Submit />}
          {profileNav === 'Settings' && <Settings />}
          <Text
            zIndex={'0'}
            bg='main'
            color='white'
            w='85.7%'
            pos='absolute'
            bottom='0'
            textAlign={'center'}>
            Loyauxx.com
          </Text>
        </Box>
      </Stack>
    </>
  );
}

export default Profile;
