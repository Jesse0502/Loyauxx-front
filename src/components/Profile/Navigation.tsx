import React from "react";
import {
	Box,
	Heading,
	Text,
	Flex,
	Stack,
	Divider,
	VStack,
} from "@chakra-ui/react";
import "./NavigationStyles.css";
import { ImUser, ImStatsDots } from "react-icons/im";
import { GrSettingsOption } from "react-icons/gr";
import { MdOutlineSend } from "react-icons/md";
import { BsSpotify } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import useAuth from "../../customHooks/useAuth";

function Navigation(props: any) {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.href = "/";
	};
	const { authInfo } = useAuth();
	return (
		<Box pos="relative" h="92vh" w="full" zIndex={"1"}>
			<Stack
				pos="fixed"
				h="92vh"
				overflowX={"hidden"}
				overflowWrap={"anywhere"}
				w="14.5%"
				bg="wall"
				pt="7">
				{[
					{ text: "Profile", icon: <ImUser size="28" /> },
					{ text: "Stats", icon: <ImStatsDots size="28" /> },
					{ text: "Submission", icon: <MdOutlineSend size="28" /> },
					{ text: "Settings", icon: <GrSettingsOption size="28" /> },
				].map(({ text, icon }) => (
					<Box>
						<Stack
							bg={props.current === text ? "whitesmoke" : "wall"}
							borderLeft={props.current === text ? "4px" : "0px"}
							borderLeftColor="main"
							transition={"ease-in"}
							transitionDuration={"0.1s"}
							onClick={() => props.setProfileNav(text)}
							mt="-2"
							justify={{ base: "center", lg: "flex-start" }}
							py="5"
							fontWeight={props.current === text ? "medium" : "normal"}
							px={"5"}
							_hover={{
								bg: props.current === text ? "" : "blackAlpha.200",
								cursor: "pointer",
							}}
							alignItems={"center"}
							direction={"row"}
							className={props.current === text ? "navBorder" : ""}>
							<Box opacity={props.current === text ? "1" : "0.5"}>{icon}</Box>
							<Text
								w="max"
								display={{ base: "none", lg: "flex" }}
								fontSize="xl"
								opacity={0.9}>
								{text}
							</Text>
						</Stack>

						<Divider color="black" />
					</Box>
				))}
				<Flex
					pos="absolute"
					justifyItems={"center"}
					boxShadow={"base"}
					justify={{ base: "center", lg: "space-between" }}
					bottom={0}
					py="3"
					px="2"
					// borderTop={"1px"}
					shadow={"inner"}
					zIndex={999}
					w="100%">
					<Text
						display={{ base: "none", lg: "flex" }}
						fontSize="xl"
						opacity={0.9}>
						Logout
					</Text>
					<Box cursor={"pointer"} onClick={handleLogout}>
						<FiLogOut size="26" />
					</Box>
				</Flex>
			</Stack>
		</Box>
	);
}

export default Navigation;
