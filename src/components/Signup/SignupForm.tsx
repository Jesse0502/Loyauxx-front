import React from 'react';
import {
  Stack,
  FormControl,
  Input,
  FormLabel,
  Button,
  Heading,
  Text,
  InputGroup,
  InputLeftElement,
  Box,
} from '@chakra-ui/react';
import '../../App.css';
function SignupForm() {
  return (
    <div>
      <form>
        <Stack spacing='1' pt='5'>
          <Heading>Create your free account</Heading>
          <Text color='blackAlpha.600' fontSize={'sm'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sequi
            placeat fugiat eligenem.
          </Text>
        </Stack>
        <Stack
          pr='2'
          spacing='5'
          pt='5'
          h={{ lg: '96', base: '80' }}
          overflow={'auto'}
          className='signupScrollBar'>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input placeholder='Enter your Name' />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                bg='wall'
                borderLeftRadius={'md'}
                children={<Text color='blackAlpha.700'>@</Text>}
              />
              <Input placeholder='Enter your username' pl='12' />
            </InputGroup>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input placeholder='Enter your email' />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input placeholder='Enter your password' />
          </FormControl>
        </Stack>
        <Button
          mt='4'
          w='full'
          _hover={{ bg: 'main' }}
          _active={{ bg: 'main' }}
          type='submit'
          bg='main'
          color='bgText'>
          Signup
        </Button>
      </form>
    </div>
  );
}

export default SignupForm;
