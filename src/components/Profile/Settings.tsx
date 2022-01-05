import { Box, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import React from "react";

function Settings() {
	return (
		<Box mx="5" my="5">
			<Heading>123's Profile</Heading>
			<FormControl>
				<FormLabel htmlFor="email">Name</FormLabel>
				<Input id="name" type="text" />
				<FormLabel htmlFor="email">Username</FormLabel>
				<Input id="username" type="text" />
			</FormControl>
		</Box>
	);
}

export default Settings;
