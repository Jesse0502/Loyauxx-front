import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Center,
  Link,
  FormControl,
  Input,
  FormLabel,
  Button,
  Image,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import '../../App.css';
import djNight from '../../assets/djNight.jpg';
function Signup() {
  const [LoginOrSignin, setLoginOrSignin] = useState(false);
  const handleLoginorSignup = () => {
    if (LoginOrSignin) {
      setLoginOrSignin(false);
    } else {
      setLoginOrSignin(true);
    }
  };
  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -50 },
  };
  return (
    <>
      <Flex
        overflowWrap={'break-word'}
        m='auto'
        w='90%'
        mt='9'
        bg='white'
        h={{ md: '82vh', base: 'max' }}
        shadow={'lg'}
        rounded='xl'>
        <Box flex='1'>
          <Flex
            display={{ base: 'flex', md: 'none' }}
            bgImage={djNight}
            justify={'center'}
            shadow={'lg'}
            h='36'
            roundedRight='sm'>
            <Center>
              <Text>
                <Text
                  className='logo'
                  color='white'
                  fontSize={{ lg: '8xl', base: '6xl' }}>
                  LOYAUXX
                </Text>
              </Text>
            </Center>
          </Flex>
          <Stack py='5' w={{ lg: '80%', base: '90%' }} m='auto' h='max'>
            {LoginOrSignin ? (
              <Text fontSize={'sm'}>
                New to Loyauxx?{' '}
                <Text
                  onClick={handleLoginorSignup}
                  color='blue.400'
                  as={Link}
                  display={'inline-block'}>
                  {' '}
                  Signup{' '}
                </Text>
              </Text>
            ) : (
              <Text fontSize={'sm'}>
                Already have an account?{' '}
                <Text
                  onClick={handleLoginorSignup}
                  color='blue.400'
                  as={Link}
                  display={'inline-block'}>
                  {' '}
                  Login{' '}
                </Text>
              </Text>
            )}
            <Stack spacing='6' py='5'>
              {LoginOrSignin ? (
                <LoginForm />
              ) : (
                <motion.div
                  initial='hidden'
                  animate='visible'
                  variants={variants}>
                  <SignupForm />
                </motion.div>
              )}
            </Stack>
          </Stack>
        </Box>
        <Flex
          display={{ base: 'none', md: 'flex' }}
          bgImage={djNight}
          justify={'center'}
          shadow={'lg'}
          objectFit={'cover'}
          color='bgText'
          flex='1'
          roundedRight='xl'>
          <Center>
            <Text>
              <Text className='logo' fontSize={{ lg: '8xl', base: '6xl' }}>
                LOYAUXX
              </Text>
              <Text
                display={{ base: 'none', lg: 'block' }}
                textAlign={'right'}
                fontSize={'sm'}
                fontStyle={'italic'}
                mt='-10'
                color='whiteAlpha.600'>
                where your brand gets to shine
              </Text>
            </Text>
          </Center>
        </Flex>
      </Flex>
    </>
  );
}

export default Signup;
