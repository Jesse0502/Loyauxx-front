import React from "react";
import PropTypes from "prop-types";
import {
	Box,
	Container,
	Flex,
	Heading,
	HStack,
	Image,
	Text,
	VStack,
} from "@chakra-ui/react";
import djNight from "../../assets/djNight.jpg";

const TopArtists = () => {
	return (
		<Container maxW="container.lg">
			<h1>Top Artists</h1>
			<Flex flexDir={"column"} w="full">
				{Array.from(Array(20)).map((a, b) => (
					<>
						<HStack border="2px solid" borderColor={"blackAlpha.600"}>
							<Heading>{b + 1}</Heading>
							<Image h="20" src={djNight}></Image>
							<Flex flexDir={"column"}>
								<Heading>Artist Name</Heading>
								<Text>@username</Text>
							</Flex>
						</HStack>
					</>
				))}
			</Flex>
		</Container>
	);
};

export default TopArtists;
