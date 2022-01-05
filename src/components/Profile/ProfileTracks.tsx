import React from "react";
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
	AspectRatio,
	Button,
} from "@chakra-ui/react";
// import spotifyUrlIinfo from 'spotify-url-info';
function ProfileTracks() {
	// const { getData, getPreview, getTracks } = spotifyUrlIinfo;
	// getPreview('https://open.spotify.com/track/5nTtCOCds6I0PHMNtqelas').then(
	//   (data: any) => console.log(data)
	// );
	return (
		<Box px={{ lg: "10", base: "0" }} overflow={"hidden"}>
			<Heading color="blackAlpha.700">2021</Heading>
			<Stack my="5">
				<AspectRatio h="40">
					<iframe src="https://youtube.com/watch?v=Dhp1cMpNdbg"></iframe>
				</AspectRatio>
				<AspectRatio h="20">
					<iframe src="https://embed.spotify.com/?uri=spotify:track:5nTtCOCds6I0PHMNtqelas"></iframe>
				</AspectRatio>
				<AspectRatio h="20">
					<iframe src="https://embed.spotify.com/?uri=spotify:track:5nTtCOCds6I0PHMNtqelas"></iframe>
				</AspectRatio>
			</Stack>
			<Heading color="blackAlpha.700">2020</Heading>
			<Stack my="5">
				<AspectRatio h="20">
					<iframe src="https://embed.spotify.com/?uri=spotify:track:5nTtCOCds6I0PHMNtqelas"></iframe>
				</AspectRatio>
				<AspectRatio h="20">
					<iframe src="https://embed.spotify.com/?uri=spotify:track:5nTtCOCds6I0PHMNtqelas"></iframe>
				</AspectRatio>
			</Stack>
		</Box>
	);
}

export default ProfileTracks;
