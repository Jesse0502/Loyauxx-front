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
import djNight from '../../assets/djNight.jpg';
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
        <Box flex='1' minH='112vh'>
          <Navigation setProfileNav={setProfileNav} current={profileNav} />
        </Box>
        <Box flex='5'>
          {profileNav == 'Profile' && (
            <>
              <Image src={djNight} h='32vh' w='full' objectFit={'cover'} />
              <Box pos='relative' px='10'>
                <Avatar pos='absolute' size={'2xl'} top='-16' left='10' />
                <Flex>
                  <Stack pt='16' pb='5' spacing='3'>
                    <Heading fontSize='5xl'>Name</Heading>
                    <Text>@username</Text>
                    <Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deleniti tempore consectetur illum adipisci odio
                      voluptatem sint incidunt cumque? vitae possimus harum
                      molestias culpa sit eum expedita modi officia?
                    </Text>
                    <HStack alignItems={'center'}>
                      <FaLink color='#474747' size='' />
                      <Link
                        color='blue.600'
                        to={'https://github.com/Jesse0502/Loyauxx-front'}>
                        https://github.com/Jesse0502/Loyauxx-front
                      </Link>
                    </HStack>
                  </Stack>
                </Flex>
              </Box>
              <Tabs mt='5' isFitted variant='enclosed'>
                <TabList mb='1em'>
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
            </>
          )}
          {profileNav === 'Stats' && <ProfileStats />}
          {profileNav === 'Submit your track' && <Submit />}
          {profileNav === 'Settings' && <Settings />}
        </Box>
      </Stack>
    </>
  );
}

export default Profile;
