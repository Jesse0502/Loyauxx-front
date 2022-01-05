import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";

function Submit() {
  return (
    <Box mx="5" my="5">
      <Heading textAlign={"center"}> L-BAS August 2021 Submission</Heading>
      <Box mt="6">
        <FormControl>
          <Stack spacing="3" justifyItems={"center"}>
            <Stack spacing={"1"}>
              <FormLabel>
                <Flex alignItems={"center"}>Url of the track</Flex>
              </FormLabel>
              <Input isRequired type="text" placeholder={"Paste url here"} />
            </Stack>
            <FormHelperText></FormHelperText>
            <Button color="white" bg="main" _hover={{}} _active={{}}>
              Submit
            </Button>
          </Stack>
        </FormControl>
      </Box>
      <Box mt="5">
        <Heading fontSize={"3xl"}>Past Submissions</Heading>
      </Box>
    </Box>
  );
}

export default Submit;
