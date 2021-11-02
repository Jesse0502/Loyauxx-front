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
} from '@chakra-ui/react';
import { ImCross } from 'react-icons/im';
import { BiLinkExternal } from 'react-icons/bi';
import djNight from '../../assets/djNight.jpg';
import Footer from '../Footer/Footer';
function Profile(props: any) {
  const profileId = props.match.params.id;
  // const theme = { bg: 'white', color: 'main' };
  const theme = { bg: 'main', color: 'white' };
  const [showSubmitNow, setShowSubmitNow] = useState(true);

  return (
    <>
      <Box color={theme.color} bg={theme.bg} bgPos={'djNight'}>
        <Flex justify={'space-between'} py='2' px='5'>
          <Text>Settings</Text>
          <HStack>
            <Text>Spotify</Text>
            <Text>Youtube</Text>
          </HStack>
        </Flex>
        <Stack alignItems={'center'} spacing={'3'} py='3' px='5'>
          <Avatar size='2xl' />
          <Heading>Name</Heading>
          <Text opacity={'0.6'}>@username</Text>
          <Text textAlign={'center'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            assumenda consectetur soluta? Voluptate eveniet quam sunt quisquam
            ducimus. Vel eaque inventore architecto temporibus! Maxime, modi.
            Alias nam, pariatur nesciunt dicta non magni laudantium
            consequuntur. Optio dolorum id est. Voluptates, rerum! Alias
            tenetur, consectetur amet cumque ut autem harum obcaecati unde.
          </Text>
          <Link opacity={'0.7'} to='#'>
            http://localhost:3000/profile/123
          </Link>
        </Stack>
      </Box>
      <Box pos='relative' display={showSubmitNow ? 'block' : 'none'}>
        <Text
          bg={theme.color}
          textAlign={'center'}
          color={theme.bg}
          fontSize='lg'
          py='4'>
          Submit your track for L-BAS now!
        </Text>
        <Text
          onClick={() => {
            setShowSubmitNow(false);
          }}
          pos='absolute'
          right='5'
          _hover={{ bg: 'whiteAlpha.400' }}
          p='2'
          color={theme.bg}
          cursor='pointer'
          rounded='xl'
          top='4'>
          <ImCross size='14' color={'black'} />
        </Text>
      </Box>
      <Box px='10'>
        <Stack pt='5'>
          <Heading>Achievements</Heading>
          <Text w='max' as={Link} color='blackAlpha.700'>
            Landed in Top 3 (2)
          </Text>
          <Text w='max' as={Link} color='blackAlpha.700'>
            Landed in Top 5 (5)
          </Text>
          <Text w='max' as={Link} color='blackAlpha.700'>
            Landed in Top 10 (6)
          </Text>
        </Stack>
        <Stack pt='5'>
          <Heading>Competitions Participated</Heading>
          <Text bg={theme.bg} color={theme.color} py='1' px='4' rounded='lg'>
            L-BAS May 2020
          </Text>
          <Text bg={theme.bg} color={theme.color} py='1' px='4' rounded='lg'>
            L-BAS JUNE 2020
          </Text>
          <Text bg={theme.bg} color={theme.color} rounded='lg' py='1' px='4'>
            L-BAS July 2020
          </Text>
        </Stack>
        <Stack pt='10'>
          <Box>
            <Heading>Top Tracks</Heading>
            <Stack py='4' spacing={'4'}>
              {Array.from(Array(2)).map(() => (
                <Flex
                  boxShadow={'lg'}
                  alignItems={'center'}
                  justify={'space-between'}
                  bg={theme.bg}
                  color={theme.color}
                  py='2'
                  px='4'
                  rounded='2xl'>
                  <Flex alignItems={'center'}>
                    <Image src={djNight} h='16' rounded='lg'></Image>

                    <Box pl='3'>
                      <Text fontWeight={'bold'}>Name</Text>
                      <Text opacity='0.6'>Artist 1</Text>
                    </Box>
                  </Flex>
                  <Flex>
                    <Text>Listen it on Spotify</Text>
                    <Text
                      rounded='2xl'
                      border='2px'
                      px='2'
                      ml='2'
                      borderColor='whiteAlpha.400'>
                      {' '}
                      &gt;{' '}
                    </Text>
                  </Flex>
                </Flex>
              ))}
            </Stack>
            <Heading pt='5'>Artist Picks</Heading>
            <Stack py='4' spacing={'4'}>
              {Array.from(Array(4)).map(() => (
                <Flex
                  boxShadow={'lg'}
                  alignItems={'center'}
                  justify={'space-between'}
                  bg={theme.bg}
                  color={theme.color}
                  py='2'
                  px='4'
                  rounded='2xl'>
                  <Flex alignItems={'center'}>
                    <Image src={djNight} h='16' rounded='lg'></Image>
                    <Box pl='3'>
                      <Text fontWeight={'bold'}>Name</Text>
                      <Text opacity='0.6'>Artist 1</Text>
                    </Box>
                  </Flex>
                  <Flex>
                    <Text>Listen it on Spotify</Text>
                    <Text
                      rounded='2xl'
                      border='2px'
                      px='2'
                      ml='2'
                      borderColor='whiteAlpha.400'>
                      {' '}
                      &gt;{' '}
                    </Text>
                  </Flex>
                </Flex>
              ))}
            </Stack>
            <Heading pt='5'>Learn more...</Heading>
            <Stack spacing='5' direction={'row'} mt='3'>
              {Array.from(Array(2)).map(() => (
                <Box pos='relative'>
                  <Image
                    _hover={{
                      opacity: '0.8',
                      cursor: 'pointer',
                    }}
                    src={djNight}
                    h='48'
                    w='80'
                    objectFit={'cover'}
                    rounded='lg'
                  />
                  <HStack
                    pos='absolute'
                    bottom='2'
                    left='2'
                    _hover={{ color: 'mainLight', cursor: 'pointer' }}>
                    <Text color='bgText'>Lorem ipsum dolor sit amet.</Text>
                    <BiLinkExternal color='white' />
                  </HStack>
                </Box>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Box>
      <Text
        py='3'
        mt='10'
        textAlign={'center'}
        bg={theme.color}
        border='1px'
        borderColor='blackAlpha.300'
        color={theme.bg}>
        Loyauxx.com
      </Text>
    </>
  );
}

export default Profile;
