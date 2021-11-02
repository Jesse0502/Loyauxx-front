import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Link,
  ScaleFade,
  Text,
  Wrap,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
  DrawerFooter,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import djNight from '../../assets/djNight.jpg';
import { FiMenu } from 'react-icons/fi';
import { FiLogIn } from 'react-icons/fi';
import { FaHistory } from 'react-icons/fa';
import { useHistory, useLocation } from 'react-router-dom';
import { MdHome } from 'react-icons/md';
import './Navbar.css';
import NavSearch from './NavSearch';
function Navbar(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
  const btnRef = React.useRef();
  const history = useHistory();

  return (
    <Box pos='relative' h='8vh' zIndex='999' w='100%'>
      <Flex
        h='8vh'
        pos='fixed'
        top='0'
        shadow='lg'
        px={{ lg: '10', base: '5' }}
        w='full'
        justify={'space-between'}
        alignItems={'center'}
        bg='main'
        color='bgText'>
        <Flex>
          <Text
            display={{ md: 'block', base: 'none' }}
            onClick={() => {
              history.push('/');
            }}
            fontSize={{ md: '4xl', base: '3xl' }}
            className='logo'
            cursor={'pointer'}>
            LOYAUXX
          </Text>
          <Box display={{ base: 'block', md: 'none' }}>
            <Box cursor={'pointer'} onClick={onOpen} p='1' rounded='lg'>
              <FiMenu size='28' />
            </Box>
            <Drawer isOpen={isOpen} placement='left' onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                {/* <DrawerCloseButton /> */}
                <DrawerHeader
                  as={Flex}
                  objectFit={'cover'}
                  h='40'
                  bgImg={djNight}>
                  <Text className='logo' fontSize={'3xl'} color='white' py='20'>
                    LOYAUXX
                  </Text>
                </DrawerHeader>
                <DrawerBody color='blackAlpha.800' bg='mainLight'>
                  <Stack textAlign={'left'} flexDir={'column'}>
                    <Stack
                      cursor='pointer'
                      direction={'row'}
                      alignItems={'center'}>
                      <MdHome size='28' color='#313033' />
                      <Text
                        fontSize={'2xl'}
                        onClick={() => {
                          history.push('/');
                        }}
                        fontWeight={location.pathname === '/' ? 'bold' : ''}>
                        Home
                      </Text>
                    </Stack>
                    <hr />
                    <Stack
                      cursor='pointer'
                      direction={'row'}
                      alignItems={'center'}>
                      <FaHistory size='24' color='#313033' />
                      <Text
                        fontSize={'2xl'}
                        onClick={() => {
                          history.push('/history');
                        }}
                        fontWeight={
                          location.pathname === '/history' ? 'bold' : ''
                        }>
                        History
                      </Text>
                    </Stack>

                    <hr />
                    <Stack
                      cursor='pointer'
                      direction={'row'}
                      alignItems={'center'}>
                      <FiLogIn size='28' color='#313033' />
                      <Text
                        fontSize={'2xl'}
                        onClick={() => {
                          history.push('/signup');
                        }}
                        fontWeight={
                          location.pathname === '/signup' ? 'bold' : ''
                        }>
                        Signup
                      </Text>
                    </Stack>
                    <Box pt='3'>
                      <NavSearch drawer={true} />
                    </Box>
                  </Stack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
          <HStack
            pl='10'
            fontSize={'lg'}
            spacing='5'
            display={{ base: 'none', md: 'flex' }}>
            <Link
              onClick={() => {
                history.push('/history');
              }}>
              History
            </Link>
          </HStack>
          <HStack
            pl='10'
            fontSize={'lg'}
            spacing='5'
            display={{ base: 'none', md: 'flex' }}>
            <Link
              onClick={() => {
                history.push('/profile/123');
              }}>
              Profile
            </Link>
          </HStack>
        </Flex>
        <HStack spacing={'5'} alignItems={'center'} fontSize={'lg'}>
          <HStack>
            <Box display={{ lg: 'block', base: 'none' }}>
              <NavSearch drawer={false} />
            </Box>
            <Link
              onClick={() => {
                history.push('/signup');
              }}>
              SIGNUP
            </Link>
            <FaUserCircle size='30px' />
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Navbar;
