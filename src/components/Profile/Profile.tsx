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
} from '@chakra-ui/react';
import { ImCross } from 'react-icons/im';
import { BiLinkExternal } from 'react-icons/bi';
import djNight from '../../assets/djNight.jpg';
import Footer from '../Footer/Footer';
import ProfileStats from './ProfileStats';
import { FaLink } from 'react-icons/fa';
import SimilarArtists from './SimilarArtists';
import ProfileTracks from './ProfileTracks';
function Profile(props: any) {
  const profileId = props.match.params.id;
  const [showSubmitNow, setShowSubmitNow] = useState(true);

  return (
    <>
      <Stack direction='row' spacing='0'>
        <Box flex='1' w='full' display={{ base: 'none', md: 'block' }}>
          <ProfileStats id={profileId} />
        </Box>
        <Box flex='2' minH='112vh'>
          <Image src={djNight} h='44vh' w='full' objectFit={'cover'} />
          <Box pos='relative'>
            <Avatar pos='absolute' size={'2xl'} top='-16' left='5' />
            <Flex px='5'>
              <Stack pt='16'>
                <Heading fontSize='5xl'>Name</Heading>
                <Text>@username</Text>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti tempore consectetur illum adipisci odio voluptatem
                  sint incidunt cumque? vitae possimus harum molestias culpa sit
                  eum expedita modi officia?
                </Text>
                <HStack alignItems={'center'}>
                  <FaLink color='#474747' size='' />
                  <Link
                    color='blue'
                    to={'https://github.com/Jesse0502/Loyauxx-front'}>
                    https://github.com/Jesse0502/Loyauxx-front
                  </Link>
                </HStack>
              </Stack>
            </Flex>
            <Box py='5' px='5'>
              <hr />
            </Box>
            <Box px='5'>
              <ProfileTracks />
            </Box>
          </Box>

          <Tabs
            display={{ base: 'block', md: 'none' }}
            mt='5'
            isFitted
            variant='enclosed'>
            <TabList mb='1em'>
              <Tab>Tracks</Tab>
              <Tab>Stats</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <ProfileTracks />
              </TabPanel>
              <TabPanel>
                <ProfileStats />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Box flex='1' pos='relative' display={{ base: 'none', lg: 'block' }}>
          <SimilarArtists />
        </Box>
      </Stack>
    </>
  );
}

export default Profile;
