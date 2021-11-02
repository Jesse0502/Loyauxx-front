import React, { useState } from 'react';
import {
  Box,
  Text,
  Heading,
  Center,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Flex,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stack,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Link,
  Avatar,
} from '@chakra-ui/react';
import djNight from '../../assets/djNight.jpg';
import { motion } from 'framer-motion';
import { BsCaretDownFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import Footer from '../Footer/Footer';
function TopArtists() {
  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };
  const history = useHistory();
  const [showMore, setShowMore] = useState(true);
  const handleShowMore = () => {
    if (showMore) {
      setShowMore(false);
    } else {
      setShowMore(true);
    }
  };
  return (
    <Box bg='mainLight'>
      <Center h='10' justifyContent={'flex-end'} px='5'>
        <Text textAlign={'right'}>
          <Menu>
            <MenuButton as={Link}>
              <HStack>
                <Text>MAY 2020</Text>
                <BsCaretDownFill />
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Text>
      </Center>
      <Center pos='relative' flexDir={'column'}>
        <Image h='96' w={'full'} objectFit={'cover'} src={djNight}></Image>
        <Box mt='-48' zIndex='0' w={{ lg: 'container.lg' }}>
          <Flex justifyContent={'space-between'} color='white'>
            <Text fontSize='lg'>MAY 2020</Text>
            <Text
              opacity='0.5'
              _hover={{ opacity: '1', cursor: 'pointer' }}
              transition={'ease'}
              transitionDuration={'0.6s'}
              onClick={() => {
                window.location.href =
                  'https://open.spotify.com/playlist/3xR5yrn8RQZMvsdGXHIp6d?si=dbeb5c7ee37e4fb7';
              }}>
              Listen it on the loyauxx playlist on spotify
            </Text>
          </Flex>
          <Accordion defaultIndex={[0]} allowMultiple>
            <Box rounded='lg'>
              {Array.from(Array(showMore ? 4 : 8)).map((a, b) => (
                <motion.div
                  initial='hidden'
                  animate='visible'
                  variants={variants}>
                  <AccordionItem
                    borderTop='1px grey'
                    bg={b % 2 == 0 ? 'mainLight' : 'white'}
                    color={'blackAlpha.800'}>
                    <AccordionButton shadow='lg'>
                      <Box flex='1' textAlign='left'>
                        <Stack
                          spacing='5'
                          alignItems={'center'}
                          direction='row'>
                          <Heading>1</Heading>
                          <Image
                            rounded='lg'
                            src={djNight}
                            h='40'
                            w='50'></Image>
                          <Stack>
                            <Heading>Track Title</Heading>
                            <Text>@username</Text>
                            <Text>Hear it on Spotify Youtube Music</Text>
                          </Stack>
                        </Stack>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>

                    <AccordionPanel pb={4}>
                      <Flex justify='space-between' alignItems={'center'}>
                        <Stack
                          direction={'row'}
                          spacing='5'
                          alignItems={'center'}>
                          <Avatar src={djNight} size='2xl'></Avatar>
                          <Stack>
                            <Heading>Name</Heading>
                            <Text>Visit Artist</Text>
                          </Stack>
                        </Stack>
                        <Box>
                          <Stat>
                            <StatLabel>Sent</StatLabel>
                            <StatNumber>345,670</StatNumber>
                            <StatHelpText>
                              <StatArrow type='increase' />
                              23.36%
                            </StatHelpText>
                          </Stat>
                        </Box>
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                </motion.div>
              ))}
            </Box>
          </Accordion>
        </Box>
      </Center>
      <Center
        justifyContent={'flex-end'}
        w={{ lg: 'container.xl', md: 'container.md' }}>
        <Button
          onClick={handleShowMore}
          rounded='xl'
          my='3'
          _hover={{ bg: ' ' }}
          bg='mainLight'
          color='blackAlpha.800'>
          {showMore ? 'Show More' : 'Show less'}
        </Button>
      </Center>
      <Center w='container.lg' m='auto'>
        <Stack>
          <Heading>Follow the Artistss</Heading>
          <Stack pt='10' spacing='5' direction={'row'} alignItems={'center'}>
            <Avatar size='2xl' />
            <Stack>
              <Heading>Name</Heading>
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis, consequuntur magni aperiam atque voluptatum ab eos.
                Necessitatibus sequi at minima veniam vero, asperiores ullam
                reiciendis expedita beatae accusantium tempora perferendis,
                doloremque ea dolor ipsa rerum est blanditiis odit laborum
                nostrum perspiciatis optio animi? Tempora illo facere mollitia
                nemo culpa quibusdam.
              </Text>
              <Text>Visit artist</Text>
            </Stack>
          </Stack>
          <Stack pt='10' direction={'row'} justify={'space-around'}>
            {Array.from(Array(5)).map(() => (
              <Box>
                <Avatar size='xl' />
                <Heading>Name</Heading>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Center>

      <Footer />
    </Box>
  );
}

export default TopArtists;
