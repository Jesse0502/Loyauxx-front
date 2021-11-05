import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import {
  Grid,
  Box,
  GridItem,
  Heading,
  Text,
  Flex,
  Image,
  Avatar,
  HStack,
  Stack,
  Link,
  Button,
  VStack,
} from '@chakra-ui/react';
import './Home.css';
import { BsArrowRight } from 'react-icons/bs';
import djNight from '../../assets/djNight.jpg';
import { BiLinkExternal } from 'react-icons/bi';
import Footer from '../Footer/Footer';
import { CgLogIn } from 'react-icons/cg';
import {
  addSeconds,
  format,
  formatDistance,
  formatDistanceToNowStrict,
  getSeconds,
  subDays,
} from 'date-fns';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { motion } from 'framer-motion';
import djImage from '../../assets/unsplashDJ3.jpg';
import { useHistory } from 'react-router-dom';
import HomepageStats from './HomepageStats';
function Home() {
  const history = useHistory();
  const variants = {
    visible: { x: 2 },
    hidden: { x: 0 },
  };
  const [signupButtonHover, setSignupButtonHover] = useState(true);
  return (
    <Box zIndex='0'>
      <Box pos='relative' zIndex='0' bg='black'>
        <Image
          src={djImage}
          h='96'
          opacity={0.7}
          objectFit={'cover'}
          w='full'></Image>
        <Box
          pos='absolute'
          color='white'
          px='2'
          bottom='20'
          zIndex={999}
          textAlign={'center'}
          w='full'>
          <Text fontSize={'4xl'}>
            Music Competitions for the next <br /> generation artists
          </Text>
          <Text fontSize='sm' color='whiteAlpha.800' pt='2'>
            We Conduct music competitions to help grow your brand as an artist.{' '}
            <br /> Sign up today to participate and win amazing prizes!
          </Text>
          <Button
            _hover={{ bg: 'main', color: 'mainLight' }}
            _active={{ bg: 'mainLight', color: 'main' }}
            bg={'main'}
            onMouseOverCapture={() => {
              setSignupButtonHover(true);
            }}
            onMouseLeave={() => {
              setSignupButtonHover(false);
            }}
            w='40'
            onClick={() => {
              history.push('/signup');
            }}
            mt='5'>
            <Stack spacing='2' direction='row' alignItems={'center'}>
              <Text fontWeight={'light'}>Signup</Text>
              <motion.div
                initial={signupButtonHover ? 'hidden' : 'visible'}
                animate={signupButtonHover ? 'visible' : 'hidden'}
                variants={variants}>
                <CgLogIn size='20' />
              </motion.div>
            </Stack>
          </Button>
        </Box>
      </Box>
      <HomepageStats />
      <Box px='32' pt='20'>
        <Heading fontSize={'5xl'}>What is Loyauxx?</Heading>
        <Box p='4' bg='mainLight' rounded='2xl' mt='5'>
          <Text pb='4' color='blackAlpha.800'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque
            dolorem nesciunt laboriosam, aut optio veritatis veniam ut velit,
            repellendus explicabo fugiat eum? Obcaecati repellendus dicta
            commodi dolorem ipsam consequatur perferendis dolorum dolore
            laboriosam omnis molestiae, recusandae doloribus hic necessitatibus
            velit facere. Minus repellendus dolor pariatur architecto est nihil
            esse sint?
          </Text>
          <Link color='main'>Know more</Link>
        </Box>
        <Heading pt='5'>Learn more...</Heading>
        <Stack spacing='5' direction={'row'} mt='3'>
          {Array.from(Array(2)).map(() => (
            <Box pos='relative'>
              <Image
                transition={'0.6s ease'}
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
      </Box>{' '}
      <Box mt='16' bg='mainLight' color='blackAlpha.800' py='16'>
        <Heading px='32' fontSize={'5xl'}>
          How our music competitions can increase your brand awareness?
        </Heading>

        <Box py='10'>
          {Array.from(Array(3)).map(() => (
            <Stack
              mt='10'
              justify='center'
              px='32'
              alignItems={'center'}
              spacing='10'
              direction={'row-reverse'}>
              <Image src={djNight} w='72' rounded='2xl'></Image>
              <Stack direction={'column'} spacing='4'>
                <Heading>Discoverability</Heading>
                <Text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Error omnis commodi reprehenderit repellendus odio distinctio
                  quasi at fugit que quas deleniti, dignissimos dolores!
                  Veritatis!
                </Text>
                <Link color='blackAlpha.700'>Know more</Link>
              </Stack>
            </Stack>
          ))}
        </Box>
      </Box>
      <Stack px='32' my='20'>
        <Heading fontSize='5xl'>Next competition starts in...</Heading>
        <Heading fontSize='7xl' py='7' color='blackAlpha.600'>
          13 days
        </Heading>
        <Heading as={Link} fontSize='20' color='main' w='max'>
          Submit your track now!
        </Heading>
      </Stack>
      <Footer />
    </Box>
  );
}

export default Home;
