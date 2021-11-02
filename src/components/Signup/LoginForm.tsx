import React from 'react';
import {
  Stack,
  FormControl,
  Input,
  FormLabel,
  Button,
  Heading,
  Text,
} from '@chakra-ui/react';
function LoginForm() {
  return (
    <div>
      <form>
        <Stack
          spacing='2'
          pt={{ lg: '16', base: '5' }}
          pb={{ lg: '12', base: '5' }}>
          <Heading>Login to your account</Heading>
          <Text color='blackAlpha.600' fontSize={'sm'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sequi
            placeat fugiat eligenem.
          </Text>
        </Stack>
        <Stack spacing='7' pb='24'>
          <FormControl isRequired>
            <FormLabel>Username</FormLabel>
            <Input placeholder='Enter your username' />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input placeholder='Enter your email' />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input placeholder='Enter your password' />
          </FormControl>
          <Button
            _hover={{ bg: 'main' }}
            _active={{ bg: 'main' }}
            type='submit'
            bg='main'
            color='bgText'>
            Login
          </Button>
        </Stack>
      </form>
    </div>
  );
}

export default LoginForm;
