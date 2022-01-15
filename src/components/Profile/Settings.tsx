import {
	Avatar,
	Box,
	Button,
	Center,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	HStack,
	Input,
	InputGroup,
	InputRightElement,
	Stack,
	Textarea,
	useToast,
	Image,
	Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { GrAddCircle } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import djNight from "../../assets/Group12.png";
import {
	getProfileData,
	profileDat,
	putProfileEdit,
} from "../../api/profileApi";

function Settings() {
	const [profile, setProfile] = useState<any>(profileDat);
	const [tracks, setTracks] = useState<Array<any>>(
		profile?.data?.tracks?.length ? profile?.data?.tracks : [1]
	);
	const toast = useToast();
	const [addTracks, setAddTracks] = useState(1);
	const handleAddTracks = () => {
		// if (tracks === 10) {
		// return;
		// }
		// setTracks(tracks + 1);
	};
	const handleRemoveTracks = () => {
		setAddTracks(addTracks - 1);
	};
	let avatarBase64: any;
	function readFileAvatar(e: any) {
		e.preventDefault();
		let file = e.target.files[0];
		let reader = new FileReader();

		if (file) {
			reader.readAsDataURL(file);
		}
		reader.onloadend = function () {
			avatarBase64 = reader.result;
		};
	}
	const handleSettingsSubmit = async (e: any) => {
		e.preventDefault();

		const data = {
			avatar: avatarBase64,
			name: e.target[1].value,
			username: e.target[2].value,
			description: e.target[3].value,
			link: e.target[4].value,
		};
		let updatedData: any = await putProfileEdit(data);
		console.log(data);
		if (updatedData.data === true) {
			toast({
				position: "bottom-right",
				title: "Updated successfully!",
				description: "Your Account Details have been updated successfully.",
				status: "success",
				duration: 5000,
				isClosable: true,
			});
		}
	};
	return (
		<Box mx="5" my="5">
			<Box my="5">
				<form onSubmit={handleSettingsSubmit}>
					<Stack py="5" overflow={"auto"}>
						{/* <Center> */}
						{/* <Input type="image" /> */}
						<FormLabel>Avatar</FormLabel>
						<Avatar
							id="profileAvatar"
							src={profile?.data?.profile?.avatar}
							size="2xl"></Avatar>
						<Text>Select another?</Text>
						<input
							onChange={readFileAvatar}
							defaultValue={profile?.data?.profile?.avatar}
							type="file"
						/>
						{/* </Center> */}
						<FormLabel>Name</FormLabel>
						<Input
							defaultValue={profile?.data?.profile?.name}
							minH="8"
							id="name"
							type="text"
						/>

						<FormLabel>Description</FormLabel>
						<Textarea
							defaultValue={profile?.data?.profile?.description}
							id="description"
							type="text"
						/>
						<FormLabel>Link</FormLabel>
						<Input
							defaultValue={profile?.data?.profile?.link}
							id="profile-link"
							minH="8"
							type="text"
						/>
						<FormLabel>Tracks</FormLabel>
						{tracks.map((a, b) => (
							// <Flex>
							<InputGroup>
								<Input id="profile-link" type="text" />

								{/* <HStack justify={"space-between"}> */}
								<InputRightElement w="16">
									<HStack justify={"space-between"}>
										{/* <HStack px="3"> */}
										{b !== 0 && (
											<Box onClick={handleRemoveTracks} cursor={"pointer"}>
												<AiFillDelete size="20px" color="red" />
											</Box>
										)}
										{b === addTracks - 1 && b !== 9 && (
											<Box onClick={handleAddTracks} cursor={"pointer"}>
												<GrAddCircle size="20px" color="#A020F0" />
											</Box>
										)}
										{/* </HStack> */}
									</HStack>
								</InputRightElement>
								{/* </HStack> */}
							</InputGroup>
							// </Flex>
						))}
						<FormLabel>Profile Banner</FormLabel>
						<Image
							src={djNight}
							h={"32vh"}
							w="full"
							objectFit={"cover"}
							rounded="lg"></Image>
					</Stack>
					<Button
						_hover={{}}
						_active={{}}
						bg="main"
						color="white"
						mt="3"
						type="submit"
						w="100%">
						Submit
					</Button>
				</form>
			</Box>
		</Box>
	);
}

export default Settings;
