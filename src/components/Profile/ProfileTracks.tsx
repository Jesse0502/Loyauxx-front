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
function ProfileTracks(props: any) {
	let tracks = props.tracks;
	// const { getData, getPreview, getTracks } = spotifyUrlIinfo;
	// getPreview('https://open.spotify.com/track/5nTtCOCds6I0PHMNtqelas').then(
	//   (data: any) => console.log(data)
	// );
	return (
		<Box px={{ lg: "10", base: "0" }} overflow={"hidden"}>
			<Stack my="5">
				{tracks.map(() => (
					<Box py="1" px="4">
						<Box flex="1">
							<AspectRatio h="20">
								<iframe src={""}></iframe>
							</AspectRatio>
						</Box>
					</Box>
				))}
			</Stack>
		</Box>
	);
}

export default ProfileTracks;
