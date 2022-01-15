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
import { postSubmission } from "../../api/profileApi";

function Submit() {
	const handleSubmissionSubmit = async (e: any) => {
		e.preventDefault();
		if (
			e.target[0].value.includes("http") ||
			e.target[0].value.includes("https")
		) {
			let url = new URL(e.target[0].value);

			if (url !== undefined && !url?.host?.includes("open.spotify.com")) {
				console.log(false);
			} else {
				console.log(true);
				await postSubmission(e.target[0].value);
			}
		}
	};
	return (
		<Box mx="5" my="5">
			<Heading textAlign={"center"} color="blackAlpha.700">
				L-BAS August 2021 Submission
			</Heading>
			<Box mt="6">
				<form onSubmit={handleSubmissionSubmit}>
					<FormControl>
						<Stack spacing="3" justifyItems={"center"}>
							<Stack spacing={"1"}>
								<FormLabel>
									<Flex alignItems={"center"}>Url of the track</Flex>
								</FormLabel>
								<Input isRequired type="text" placeholder={"Paste url here"} />
							</Stack>
							<FormHelperText></FormHelperText>
							<Button
								color="white"
								bg="main"
								type="submit"
								_hover={{}}
								_active={{}}>
								Submit
							</Button>
						</Stack>
					</FormControl>
				</form>
			</Box>
			<Box mt="5">
				<Heading fontSize={"3xl"}>Past Submissions</Heading>
			</Box>
		</Box>
	);
}

export default Submit;
