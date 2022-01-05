import React, { useState } from "react";
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
  Button,
  Container,
} from "@chakra-ui/react";
import { ImCross } from "react-icons/im";
import { BiLinkExternal } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import djNight from "../../assets/Group12.png";
import Footer from "../Footer/Footer";
import ProfileStats from "./Stats";
import { FaLink } from "react-icons/fa";
import SimilarArtists from "./SimilarArtists";
import ProfileTracks from "./ProfileTracks";
import Navigation from "./Navigation";
import Submit from "./Submit";
import Settings from "./Settings";

function Profile(props: any) {
  const [profileNav, setProfileNav] = useState("Profile");

  return (
    <Box>
      <Stack direction="row" spacing="0">
        <Box flex="1" w="full">
          <Navigation setProfileNav={setProfileNav} current={profileNav} />
        </Box>
        <Box flex="6">
          {profileNav === "Profile" && (
            <Box>
              <Image src={djNight} h={"32vh"} w="full" objectFit={"cover"} />
              <Box pos="relative" px={{ lg: "10", base: "0" }}>
                <Avatar
                  pos="absolute"
                  size={"2xl"}
                  top="-16"
                  left={{ lg: "10", base: "5" }}
                />
                <Flex>
                  <Stack pt="16" pb="5" spacing="3">
                    <Heading fontSize={{ lg: "5xl", base: "5xl" }} px={{ base: '3', lg: '0' }}>
                      Name
                    </Heading>
                    <Text color="blackAlpha.700" px={{ base: '3', lg: '0' }}>@username</Text>
                    <Text px={{ base: '3', lg: '0' }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Deleniti tempore consectetur illum adipisci odio
                      voluptatem sint incidunt cumque? vitae possimus harum
                      molestias culpa sit eum expedita modi officia?
                    </Text>
                  </Stack>
                </Flex>
              </Box>
              <Tabs mt="5" isFitted variant="enclosed">
                <TabList>
                  <Tab>Tracks</Tab>
                  <Tab>Top Tracks</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <ProfileTracks />
                  </TabPanel>
                  <TabPanel>
                    <ProfileTracks />
                  </TabPanel>
                </TabPanels>
              </Tabs>{" "}
            </Box>
          )}
          {profileNav === "Stats" && <ProfileStats />}
          {profileNav === "Submission" && <Submit />}
          {profileNav === "Settings" && <Settings />}
        </Box>
      </Stack>
    </Box>
  );
}

export default Profile;
