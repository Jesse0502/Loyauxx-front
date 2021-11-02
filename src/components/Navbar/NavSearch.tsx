import React, { useState } from 'react';
import {
  InputGroup,
  InputLeftElement,
  Input,
  Box,
  ScaleFade,
  Text,
} from '@chakra-ui/react';
function NavSearch(props: any) {
  const [modal, setModal] = useState(false);
  const [modalText, setModalText] = useState(null);
  const showModal = (e: any) => {
    if (e.target.value.trim() === '') {
      setModal(false);
    } else {
      setModal(true);
      setModalText(e.target.value.trim());
    }
  };
  return (
    <div>
      <InputGroup
        pos='relative'
        rounded={'2xl'}
        bg={!props.drawer ? 'whiteAlpha.200' : 'transparent'}
        border={'2px'}
        alignItems={'center'}
        borderColor={!props.drawer ? 'whiteAlpha.600' : 'main'}>
        <InputLeftElement
          fontFamily={'heading'}
          fontSize={'2xl'}
          color={!props.drawer ? 'whiteAlpha.900' : '#313033'}
          children='@'
          mt='-2px'
        />

        <Input
          border='0'
          zIndex={1}
          rounded={'2xl'}
          onChange={showModal}
          placeholder='Enter username'
          _placeholder={{
            color: !props.drawer ? 'whiteAlpha.600' : 'blackAlpha.700',
            fontSize: 'lg',
          }}
        />
        <Box
          pos='absolute'
          maxW='96'
          left='0'
          top='12'
          zIndex={999}
          display={{ base: 'none', md: 'block' }}>
          <ScaleFade initialScale={0.8} in={modal}>
            <Box
              minH='60'
              w='96'
              overflowWrap={'anywhere'}
              bg='mainLight'
              rounded='xl'
              border='1px'
              px='2'
              py='2'
              display={modal ? 'block' : 'none'}
              borderColor={'blackAlpha.400'}>
              <Text fontSize={'md'} color='blackAlpha.500'>
                Showing search results for '@{modalText}'
              </Text>
            </Box>
          </ScaleFade>
        </Box>
      </InputGroup>
      <Box display={props.drawer ? 'block' : 'none'}>
        <Text fontSize={'md'} color='blackAlpha.500'>
          Showing search results for '@{modalText}'
        </Text>
      </Box>
    </div>
  );
}

export default NavSearch;
